import { useEffect, useState } from 'react';
import { person } from '../data/site';

function klTime() {
    return new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kuala_Lumpur',
    }).format(new Date());
}

export default function Contact() {
    const [message, setMessage] = useState('');
    const [time, setTime] = useState(null);

    useEffect(() => {
        setTime(klTime());
        const t = setInterval(() => setTime(klTime()), 30000);
        return () => clearInterval(t);
    }, []);

    const send = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent('A backend role');
        const body = encodeURIComponent(message || '');
        window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="contact" aria-labelledby="contact-title">
            <div className="contact-col">
                <h2 id="contact-title" className="contact-title" data-reveal>
                    Hiring for a backend role?
                </h2>
                <p className="contact-sub" data-reveal style={{ '--i': 1 }}>
                    Tell me about the team and the system, and I’ll write back.
                </p>
                <form
                    className="contact-form"
                    action={`mailto:${person.email}`}
                    method="get"
                    encType="text/plain"
                    onSubmit={send}
                    data-reveal
                    style={{ '--i': 2 }}
                >
                    <label htmlFor="message" className="sr-only">
                        Your message
                    </label>
                    <input
                        id="message"
                        name="body"
                        type="text"
                        autoComplete="off"
                        placeholder="What are you building…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" aria-label="Write the email">
                        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                            <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </form>
                <p className="contact-note" data-reveal style={{ '--i': 3 }}>
                    This opens your email app with the message filled in.
                </p>
                <dl className="contact-rows" data-reveal style={{ '--i': 3 }}>
                    <div>
                        <dt>Email</dt>
                        <dd>
                            <a href={`mailto:${person.email}`}>{person.email}</a>
                        </dd>
                    </div>
                    <div>
                        <dt>GitHub</dt>
                        <dd>
                            <a href={person.github} target="_blank" rel="noopener noreferrer">
                                {person.githubHandle}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt>LinkedIn</dt>
                        <dd>
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                {person.linkedinHandle}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt>Where</dt>
                        <dd>{time ? `Kuala Lumpur, ${time} there now` : 'Kuala Lumpur, GMT+8'}</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
