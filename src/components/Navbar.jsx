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

    useEffect(() => {
        // delay mount to allow entrance animation
        setMounted(true);
    }, []);

    const handleNavClick = (href) => {
        setOpen(false);
        triggerTransition(href);
    };

    return (
        <AnimatePresence>
            {mounted && (
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    exit={{ y: -50, opacity: 0, transition: { duration: 0.3 } }}
                    className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-slateDark/60 backdrop-blur-lg shadow-md"
                >
                    <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
                        {/* Logo / Title */}
                        <button
                            onClick={() => handleNavClick('#home')}
                            data-cursor="pointer"
                            className="font-heading text-xl text-slateDark dark:text-slateLight focus:outline-none"
                        >
                            Usman A. Khan
                        </button>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <ul className="flex space-x-8 font-body text-sm">
                                {links.map(({ label, href }) => {
                                    const active = asPath === href;
                                    return (
                                        <li key={href} className="relative group">
                                            <button
                                                onClick={() => handleNavClick(href)}
                                                data-cursor="pointer"
                                                className={`relative z-10 px-1 text-slateDark dark:text-slateLight focus:outline-none ${active ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                            {/* Animated underline */}
                                            <span
                                                className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${active ? 'w-full' : 'w-0'} group-hover:w-full`}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="md:hidden flex items-center">
                            <ThemeToggle />
                            <button onClick={() => setOpen(!open)} className="ml-4 p-2 rounded-md focus:outline-none">
                                {open ? (
                                    <X className="w-6 h-6 text-slateDark dark:text-slateLight" />
                                ) : (
                                    <Menu className="w-6 h-6 text-slateDark dark:text-slateLight" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Panel */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden bg-white/50 dark:bg-slateDark/50 backdrop-blur-lg shadow-md"
                            >
                                <ul className="flex flex-col px-6 pb-4 space-y-4 font-body text-lg">
                                    {links.map(({ label, href }) => (
                                        <li key={href}>
                                            <button
                                                onClick={() => handleNavClick(href)}
                                                className="block w-full text-left text-slateDark dark:text-slateLight px-2 py-2 rounded-md hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition focus:outline-none"
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
