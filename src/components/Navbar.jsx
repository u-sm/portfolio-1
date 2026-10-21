// src/components/Navbar.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
    { label: 'Home', href: '#home', sectionId: 'home' },
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Experience', href: '#experience', sectionId: 'experience' },
    { label: 'Projects', href: '#projects', sectionId: 'projects' },
    { label: 'Tech', href: '#tech', sectionId: 'tech' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // Scroll-spy: track which section is currently in view
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        setMounted(true);

        // Scroll state for navbar background
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });

        // Scroll-spy using IntersectionObserver
        const sectionIds = links.map((l) => l.sectionId);
        const observers = [];

        // Track which sections are currently intersecting
        const intersecting = {};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    intersecting[entry.target.id] = entry.isIntersecting;
                });
                // Set active to the first intersecting section (in document order)
                const active = sectionIds.find((id) => intersecting[id]);
                if (active) setActiveSection(active);
            },
            { rootMargin: '-80px 0px -40% 0px', threshold: 0 }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
                observers.push(el);
            }
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, []);

    const handleNavClick = (href) => {
        setOpen(false);
        // Simple smooth scroll to hash
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.hash = href;
        }
    };

    if (!mounted) return null;

    return (
        <motion.nav
            role="navigation"
            aria-label="Main navigation"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/85 dark:bg-slateDark/85 backdrop-blur-xl shadow-lg-soft border-b border-primary/8 dark:border-accent/8'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick('#home')}
                    data-cursor="pointer"
                    aria-label="Go to home section"
                    className="font-heading text-lg font-bold text-slateDark dark:text-slateLight focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md tracking-tight"
                >
                    Usman A.{' '}
                    <span className="text-primary dark:text-accent">Khan</span>
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6 font-body text-sm" role="list">
                        {links.map(({ label, href, sectionId }) => {
                            const active = activeSection === sectionId;
                            return (
                                <li key={href} className="relative group">
                                    <button
                                        onClick={() => handleNavClick(href)}
                                        data-cursor="pointer"
                                        aria-current={active ? 'page' : undefined}
                                        className={`relative z-10 px-1 py-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors duration-200 ${
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
                        data-cursor="pointer"
                        className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
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
                        className="md:hidden bg-white/95 dark:bg-slateDark/95 backdrop-blur-xl border-t border-primary/8 dark:border-accent/8"
                    >
                        <ul className="flex flex-col px-6 pb-5 pt-2 gap-1 font-body" role="list">
                            {links.map(({ label, href, sectionId }) => {
                                const active = activeSection === sectionId;
                                return (
                                    <li key={href}>
                                        <button
                                            onClick={() => handleNavClick(href)}
                                            data-cursor="pointer"
                                            aria-current={active ? 'page' : undefined}
                                            className={`block w-full text-left px-3 py-3 rounded-lg transition font-medium text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                                                active
                                                    ? 'text-primary dark:text-accent bg-primary/8 dark:bg-accent/10'
                                                    : 'text-slateDark dark:text-slateLight hover:bg-primary/10 dark:hover:bg-accent/10'
                                            }`}
                                        >
                                            <span className={`inline-flex items-center gap-2`}>
                                                {active && (
                                                    <span
                                                        aria-hidden="true"
                                                        className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent flex-shrink-0"
                                                    />
                                                )}
                                                {label}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
