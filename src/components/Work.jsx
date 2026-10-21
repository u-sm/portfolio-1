import { useEffect, useRef, useState } from 'react';
import BookingCheck from './BookingCheck';
import { projects } from '../data/site';

const DESKTOP = '(min-width: 960px)';

function Media({ media, active }) {
    const videoRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            v.pause();
            return;
        }
        // Only play the clip while its project is on stage (or always, in the stacked layout).
        const stacked = !window.matchMedia(DESKTOP).matches;
        if ((active || stacked) && !paused) v.play().catch(() => {});
        else v.pause();
    }, [active, paused]);

    if (media.kind === 'live') {
        return (
            <figure className="proj-media proj-media--live">
                <BookingCheck />
                <figcaption className="proj-caption">A working copy of the clash check, with sample bookings.</figcaption>
            </figure>
        );
    }
    if (media.kind === 'video') {
        return (
            <figure className="proj-media">
                <video
                    ref={videoRef}
                    className="archival"
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                    poster={media.poster}
                    width="1280"
                    height="720"
                    aria-label={media.alt}
                >
                    <source src={media.src} type="video/mp4" />
                </video>
                <figcaption className="proj-caption">
                    {media.caption}{' '}
                    <button type="button" className="clip-toggle" onClick={() => setPaused((p) => !p)}>
                        {paused ? 'Play the clip' : 'Pause the clip'}
                    </button>
                </figcaption>
            </figure>
        );
    }
    return (
        <figure className="proj-media">
            <img
                className="archival"
                src={media.src}
                width={media.w}
                height={media.h}
                alt={media.alt}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: media.position }}
            />
            <figcaption className="proj-caption">{media.caption}</figcaption>
        </figure>
    );
}

export default function Work() {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const track = trackRef.current;
        const desktop = window.matchMedia(DESKTOP);
        let raf = 0;

        const update = () => {
            raf = 0;
            if (!desktop.matches) return;
            const rect = track.getBoundingClientRect();
            const travel = rect.height - window.innerHeight;
            if (travel <= 0) return;
            const progress = Math.min(Math.max(-rect.top / travel, 0), 0.9999);
            setActive(Math.floor(progress * projects.length));
        };
        const schedule = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            cancelAnimationFrame(raf);
        };
    }, []);

    const go = (i) => {
        const track = trackRef.current;
        const top = track.getBoundingClientRect().top + window.scrollY;
        const travel = track.offsetHeight - window.innerHeight;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: top + (travel * (i + 0.5)) / projects.length, behavior: reduce ? 'auto' : 'smooth' });
    };

    return (
        <section id="work" className="work" aria-labelledby="work-title" style={{ '--n': projects.length }}>
            <div className="work-track" ref={trackRef}>
                <div className="work-stage">
                    <h2 id="work-title" className="work-title" data-reveal>
                        What I’ve built
                    </h2>

                    {projects.map((p, i) => (
                        <article
                            key={p.id}
                            id={`project-${p.id}`}
                            className={`proj${i === active ? ' is-active' : ''}${i < active ? ' is-past' : ''}`}
                            aria-labelledby={`${p.id}-name`}
                        >
                            <Media media={p.media} active={i === active} />
                            <div className="proj-text">
                                <h3 id={`${p.id}-name`} className="proj-name" translate="no">
                                    {p.name}
                                </h3>
                                <p className="proj-meta">
                                    {p.disciplines} · {p.period}
                                </p>
                                <p>{p.summary}</p>
                                <p>{p.detail}</p>
                                <p className="proj-stack">Built with {p.stack}.</p>
                                {p.links.length > 0 && (
                                    <p className="proj-links">
                                        {p.links.map((l) => (
                                            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                                                {l.label}
                                            </a>
                                        ))}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}

                    <ul className="work-index" aria-label="Jump to a project">
                        {projects.map((p, i) => (
                            <li key={p.id}>
                                <button
                                    type="button"
                                    onClick={() => go(i)}
                                    aria-current={i === active ? 'true' : undefined}
                                >
                                    <span className="ix-name">{p.name}</span>
                                    <span className="ix-disc">{p.disciplines}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
