// src/components/Navbar.jsx
'use client';

import { useState, useContext } from 'react';
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

    const toggleMenu = () => setOpen((prev) => !prev);

    const handleNavClick = (href) => {
        setOpen(false);
        triggerTransition(href);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slateDark/90 backdrop-blur-lg">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Title */}
                <button
                    onClick={() => handleNavClick('#home')}
                    className="font-heading text-xl text-slateDark dark:text-slateLight"
                >
                    Usman A. Khan
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6 font-body text-sm">
                        {links.map(({ label, href }) => {
                            const active = asPath === href;
                            return (
                                <li key={href} className="relative group">
                                    <button
                                        onClick={() => handleNavClick(href)}
                                        className={`text-slateDark dark:text-slateLight hover:text-primary transition ${active ? 'font-medium' : 'font-normal'
                                            }`}
                                    >
                                        {label}
                                    </button>
                                    {active && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 bottom-0 h-0.5 bg-primary"
                                            initial={false}
                                            animate={{ width: '100%' }}
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="ml-4 p-2 rounded-md">
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
                        className="md:hidden bg-white dark:bg-slateDark"
                    >
                        <ul className="flex flex-col px-6 pb-4 space-y-4 font-body text-lg">
                            {links.map(({ label, href }) => (
                                <li key={href}>
                                    <button
                                        onClick={() => handleNavClick(href)}
                                        className="block text-slateDark dark:text-slateLight hover:text-primary transition"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
