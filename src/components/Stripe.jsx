import { stripeBits } from '../data/site';

// The initials UAK as ASCII bits: a filled bar for 1, an empty one for 0.
export default function Stripe({ className = '' }) {
    return (
        <span className={`stripe ${className}`} aria-hidden="true">
            {stripeBits.map((bit, i) => (
                <span key={i} className={bit ? 'is-on' : undefined} />
            ))}
        </span>
    );
}
