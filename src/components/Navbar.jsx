// src/components/Navbar.jsx
'use client';

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import TransitionContext from '../context/TransitionContext';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech', href: '#tech' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const { asPath } = useRouter();
    const [open, setOpen] = useState(false);
    const { triggerTransition } = useContext(TransitionContext);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (href) => {
        setOpen(false);
        triggerTransition(href);
    };

    return (
        <AnimatePresence>
            {mounted && (
                <motion.nav
                    role="navigation"
                    aria-label="Main navigation"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    exit={{ y: -50, opacity: 0, transition: { duration: 0.3 } }}
                    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                        scrolled
                            ? 'bg-white/80 dark:bg-slateDark/80 backdrop-blur-xl shadow-lg-soft border-b border-primary/5 dark:border-white/5'
                            : 'bg-transparent'
                    }`}
                >
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => handleNavClick('#home')}
                            data-cursor="pointer"
                            aria-label="Go to home section"
                            className="font-heading text-lg font-bold text-slateDark dark:text-slateLight focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md tracking-tight"
                        >
                            Usman A. Khan
                        </button>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8">
                            <ul className="flex items-center gap-6 font-body text-sm" role="list">
                                {links.map(({ label, href }) => {
                                    const active = asPath === href;
                                    return (
                                        <li key={href} className="relative group">
                                            <button
                                                onClick={() => handleNavClick(href)}
                                                data-cursor="pointer"
                                                aria-current={active ? 'page' : undefined}
                                                className={`relative z-10 px-1 py-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors duration-200 ${
                                                    active
                                                        ? 'text-primary dark:text-accent'
                                                        : 'text-slateDark/70 dark:text-slateLight/70 hover:text-slateDark dark:hover:text-slateLight'
                                                }`}
                                            >
                                                {label}
                                            </button>
                                            <span
                                                className={`absolute left-0 bottom-0 h-0.5 bg-primary dark:bg-accent rounded-full transition-all duration-300 ${
                                                    active ? 'w-full' : 'w-0'
                                                } group-hover:w-full`}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                            <ThemeToggle />
                        </div>

                        {/* Mobile controls */}
                        <div className="md:hidden flex items-center gap-3">
                            <ThemeToggle />
                            <button
                                onClick={() => setOpen(!open)}
                                aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={open}
                                className="p-2 rounded-lg hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition"
                            >
                                {open ? (
                                    <X className="w-5 h-5 text-slateDark dark:text-slateLight" aria-hidden="true" />
                                ) : (
                                    <Menu className="w-5 h-5 text-slateDark dark:text-slateLight" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden bg-white/90 dark:bg-slateDark/90 backdrop-blur-xl border-t border-primary/5 dark:border-white/5"
                            >
                                <ul className="flex flex-col px-6 pb-5 pt-2 gap-1 font-body" role="list">
                                    {links.map(({ label, href }) => (
                                        <li key={href}>
                                            <button
                                                onClick={() => handleNavClick(href)}
                                                className="block w-full text-left text-slateDark dark:text-slateLight px-3 py-3 rounded-lg hover:bg-primary/8 dark:hover:bg-primary/10 transition font-medium text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                            >
                                                {label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
