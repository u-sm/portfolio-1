import Stripe from './Stripe';
import { person } from '../data/site';

const mail = `mailto:${person.email}?subject=${encodeURIComponent('A backend role')}`;

export default function Hero() {
    return (
        <header id="top" className="hero">
            <div className="hero-card">
                <Stripe className="stripe--hero" />
                <div className="hero-body">
                    <h1 className="hero-title" data-reveal style={{ '--i': 0 }}>
                        Usman Ali Khan, <br />
                        backend engineer
                    </h1>
                    <p className="hero-lead" data-reveal style={{ '--i': 1 }}>
                        I write C# and .NET services, real-time Rust and the TypeScript around them. I finished
                        my Computer Science degree in July 2026 and I’m looking for a full-time backend role.
                    </p>
                    <div data-reveal style={{ '--i': 2 }}>
                        <a className="btn" href={mail}>
                            <span>Email me about a role</span>
                            <Stripe className="stripe--btn" />
                        </a>
                    </div>
                </div>
                <nav className="hero-nav" aria-label="Sections" data-reveal style={{ '--i': 3 }}>
                    <a href="#work">Work</a>
                    <a href="#record">Record</a>
                    <a href="#letter">How I work</a>
                    <a href={person.resume}>Résumé</a>
                </nav>
            </div>
            <figure className="hero-photo">
                <img
                    src="/images/profile.png"
                    width="750"
                    height="750"
                    alt="Usman taking a mirror selfie in a grey shirt and a Red Hat lanyard, with a Minecraft version of himself beside him."
                    fetchpriority="high"
                />
            </figure>
        </header>
    );
}
