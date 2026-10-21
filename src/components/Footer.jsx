// src/components/Footer.jsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const year = new Date().getFullYear();

    return (
        <footer
            aria-label="Site footer"
            className="relative border-t border-primary/8 dark:border-accent/8 bg-slateLight dark:bg-slateDark px-6 sm:px-12 lg:px-24 py-8"
        >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: copyright */}
                <p className="font-body text-sm text-muted">
                    © {year}{' '}
                    <span className="text-primary dark:text-accent font-medium">Usman Ali Khan</span>
                    {' '}· Built with Next.js &amp; Framer Motion
                </p>

                {/* Right: back to top */}
                <motion.button
                    onClick={scrollToTop}
                    data-cursor="pointer"
                    aria-label="Scroll back to top"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/15 dark:border-accent/15 text-primary dark:text-accent font-body text-sm font-medium hover:bg-primary/8 dark:hover:bg-accent/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-accent"
                >
                    <ArrowUp className="w-4 h-4" aria-hidden="true" />
                    Back to top
                </motion.button>
            </div>
        </footer>
    );
}
