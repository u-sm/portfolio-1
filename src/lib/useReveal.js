import { useEffect } from 'react';

// Adds .is-in to [data-reveal] elements the first time they enter the screen.
export default function useReveal() {
    useEffect(() => {
        const items = Array.from(document.querySelectorAll('[data-reveal]'));
        if (!('IntersectionObserver' in window)) {
            items.forEach((el) => el.classList.add('is-in'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('is-in');
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
        );
        // Whatever is already on the first screen comes in straight away, in order.
        requestAnimationFrame(() => {
            items.forEach((el) => {
                if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
                else io.observe(el);
            });
        });
        return () => io.disconnect();
    }, []);
}
