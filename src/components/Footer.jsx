import Stripe from './Stripe';
import { credits, person } from '../data/site';

export default function Footer() {
    return (
        <footer className="footer">
            <Stripe className="stripe--footer" />
            <p className="credits">
                Old photographs and footage, all public domain or free of known restrictions:{' '}
                {credits.map((c, i) => (
                    <span key={c.href}>
                        <a href={c.href} target="_blank" rel="noopener noreferrer">
                            {c.what}
                        </a>{' '}
                        by {c.who}
                        {i < credits.length - 1 ? '; ' : '.'}
                    </span>
                ))}
            </p>
            <div className="footer-line">
                <p>Usman Ali Khan, backend engineer</p>
                <p className="footer-links">
                    <a href={person.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={person.resume}>Résumé</a>
                    <a href="#top">Back to top</a>
                </p>
                <p className="footer-year">2026</p>
            </div>
        </footer>
    );
}
