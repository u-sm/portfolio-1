import { useMemo, useState } from 'react';

// A working copy of ReserveDesk's clash check. The rooms and bookings are samples.
const OPEN = 8;
const CLOSE = 20;
const rooms = [
    {
        id: 'b07',
        name: 'Seminar Room B-07',
        bookings: [
            { from: 9, to: 11, who: 'Robotics Club', what: 'weekly build' },
            { from: 14, to: 16, who: 'Red Hat Club', what: 'Linux workshop' },
        ],
    },
    {
        id: 'aud2',
        name: 'Auditorium 2',
        bookings: [
            { from: 10, to: 13, who: 'Debate Society', what: 'final round' },
            { from: 17, to: 19, who: 'Student Council', what: 'town hall' },
        ],
    },
    {
        id: 'lab4',
        name: 'Computer Lab 4',
        bookings: [
            { from: 8, to: 10, who: 'Cyber Security Club', what: 'capture the flag' },
            { from: 13, to: 15, who: 'Data Science Club', what: 'study group' },
        ],
    },
];

const clock = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
const hour = (h) => clock.format(Date.UTC(2026, 9, 23, h));
const hours = Array.from({ length: CLOSE - OPEN + 1 }, (_, i) => OPEN + i);

export default function BookingCheck() {
    const [roomId, setRoomId] = useState('b07');
    const [from, setFrom] = useState(15);
    const [to, setTo] = useState(17);
    const [sent, setSent] = useState(false);
    const [nudge, setNudge] = useState(false);

    const room = rooms.find((r) => r.id === roomId);
    // Two bookings clash when each starts before the other ends.
    const clash = useMemo(
        () => room.bookings.find((b) => from < b.to && to > b.from),
        [room, from, to]
    );

    const change = (setter) => (e) => {
        setSent(false);
        setNudge(false);
        setter(e.target.value);
    };
    const changeFrom = (e) => {
        const v = Number(e.target.value);
        setSent(false);
        setNudge(false);
        setFrom(v);
        if (to <= v) setTo(Math.min(v + 1, CLOSE));
    };
    const pct = (h) => `${((h - OPEN) / (CLOSE - OPEN)) * 100}%`;

    return (
        <div className="bk" data-ui>
            <div className="bk-head">
                <p className="bk-app" translate="no">ReserveDesk</p>
                <p className="bk-date">Thursday 23 October</p>
            </div>
            <div className="bk-fields">
                <label className="bk-field bk-field--room">
                    <span>Room</span>
                    <select value={roomId} onChange={change(setRoomId)}>
                        {rooms.map((r) => (
                            <option key={r.id} value={r.id}>
                                {r.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="bk-field">
                    <span>From</span>
                    <select value={from} onChange={changeFrom}>
                        {hours.slice(0, -1).map((h) => (
                            <option key={h} value={h}>
                                {hour(h)}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="bk-field">
                    <span>To</span>
                    <select value={to} onChange={(e) => { setSent(false); setNudge(false); setTo(Number(e.target.value)); }}>
                        {hours.filter((h) => h > from).map((h) => (
                            <option key={h} value={h}>
                                {hour(h)}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="bk-day" aria-hidden="true">
                {room.bookings.map((b) => (
                    <span
                        key={b.from}
                        className="bk-taken"
                        style={{ left: pct(b.from), width: `calc(${pct(b.to)} - ${pct(b.from)})` }}
                    />
                ))}
                <span
                    className={`bk-ask ${clash ? 'is-clash' : ''}`}
                    style={{ left: pct(from), width: `calc(${pct(to)} - ${pct(from)})` }}
                />
            </div>
            <div className="bk-scale" aria-hidden="true">
                <span>{hour(OPEN)}</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>{hour(CLOSE)}</span>
            </div>

            <ul className="bk-booked" aria-label={`Already booked in ${room.name}`}>
                {room.bookings.map((b) => (
                    <li key={b.from}>
                        <span>{b.who}, {b.what}</span>
                        <span>{hour(b.from)} to {hour(b.to)}</span>
                    </li>
                ))}
            </ul>

            <p className={`bk-result ${clash ? 'is-clash' : 'is-free'}`} role="status" aria-live="polite">
                {clash
                    ? `Clashes with ${clash.who}, ${clash.what}, ${hour(clash.from)} to ${hour(clash.to)}.${nudge ? ' Move the start or end time, or choose another room.' : ''}`
                    : sent
                        ? `Sent to an admin for approval: ${room.name}, ${hour(from)} to ${hour(to)}.`
                        : `Free from ${hour(from)} to ${hour(to)}. The request goes to an admin for approval.`}
            </p>
            <button
                type="button"
                className={`bk-send${clash || sent ? ' is-held' : ''}`}
                aria-disabled={Boolean(clash) || sent}
                onClick={() => (clash ? setNudge(true) : setSent(true))}
            >
                {sent && !clash ? 'Request sent' : 'Request this slot'}
            </button>
        </div>
    );
}
