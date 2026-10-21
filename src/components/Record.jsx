import { useEffect, useRef, useState } from 'react';
import { record } from '../data/site';

const pictures = [
    {
        src: '/found/mail-sorting-1920.jpg',
        w: 1760,
        h: 1328,
        alt: 'A long mail sorting room with pigeonhole cabinets, hanging lamps and a clerk filing letters.',
        caption: 'The mail sorting room of the U.S. Post Office, Washington, 1920.',
        position: '60% 50%',
    },
    {
        src: '/found/kl-river-1900.jpg',
        w: 1920,
        h: 1472,
        alt: 'A wide, still river in Kuala Lumpur with shophouses on one bank and a man resting on the grass.',
        caption: 'The river at Kuala Lumpur, about 1900.',
        position: '45% 50%',
    },
];

function Picture({ p, className = '', eager = false }) {
    return (
        <figure className={className}>
            <img
                className="archival"
                src={p.src}
                width={p.w}
                height={p.h}
                alt={p.alt}
                loading={eager ? undefined : 'lazy'}
                decoding="async"
                style={{ objectPosition: p.position }}
            />
            <figcaption>{p.caption}</figcaption>
        </figure>
    );
}

export default function Record() {
    const letterRef = useRef(null);
    const [scene, setScene] = useState(0);

    useEffect(() => {
        const el = letterRef.current;
        // The fixed picture changes once the letter fills the lower part of the screen.
        const io = new IntersectionObserver(
            ([entry]) => setScene(entry.isIntersecting || entry.boundingClientRect.top < 0 ? 1 : 0),
            { rootMargin: '0px 0px -45% 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div className="split">
            <div className="split-col">
                <section id="record" className="record" aria-labelledby="record-title">
                    <h2 id="record-title" className="section-title" data-reveal>
                        Where I’ve worked
                    </h2>
                    <Picture p={pictures[0]} className="split-inline" />
                    {record.map((g, gi) => (
                        <div key={g.group} className="rgroup" data-reveal style={{ '--i': gi % 3 }}>
                            <h3 className="rgroup-name">{g.group}</h3>
                            <ul className="rows">
                                {g.rows.map((r) => (
                                    <li key={r.name} className="row">
                                        <span className={`dot dot--${g.tone}`} aria-hidden="true" />
                                        <span className="row-name">{r.name}</span>
                                        <span className="row-value">{r.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section id="letter" className="letter" aria-labelledby="letter-title" ref={letterRef}>
                    <h2 id="letter-title" className="section-title" data-reveal>
                        How I work
                    </h2>
                    <Picture p={pictures[1]} className="split-inline" />
                    <div className="letter-sheet" data-reveal style={{ '--i': 1 }}>
                        <img className="letter-face" src="/images/profile.png" width="44" height="44" alt="" />
                        <div className="letter-body">
                            <p>
                                I like the parts of software nobody sees until they break: the queue that has to drain,
                                the email that has to arrive, the room that must not be booked twice.
                            </p>
                            <p>
                                At Bitlab I put a sign-in check in front of every endpoint and built a second mail
                                server that takes over when the first one fails, so a password reset still lands.
                            </p>
                            <p>
                                I build with AI coding agents the way I would work with a quick junior colleague. They
                                draft; <mark>I read every line</mark>, and I own what ships. ReserveDesk and Aspectly
                                were made that way.
                            </p>
                            <p>
                                Kuala Lumpur, where I studied, means “muddy confluence”, the place where two rivers
                                meet. A backend sits at a confluence too, where the front end meets the database, and
                                that is where I like to work.
                            </p>
                            <p>
                                I’m looking for a full-time backend role in Kuala Lumpur or remote. C# and .NET feel
                                like home, and I’ll learn whatever your team runs on.
                            </p>
                        </div>
                        <p className="sign">
                            <span className="sign-name">Usman Ali Khan</span>
                            <span className="sign-role">Backend engineer, Kuala Lumpur</span>
                        </p>
                    </div>
                </section>
            </div>

            <div className="split-stage">
                {pictures.map((p, i) => (
                    <Picture key={p.src} p={p} eager={i === 0} className={`stage-pic${scene === i ? ' is-on' : ''}`} />
                ))}
            </div>
        </div>
    );
}
