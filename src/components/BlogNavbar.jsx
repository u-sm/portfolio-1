// src/components/BlogNavbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const simpleLinks = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/#contact' },
];

export default function BlogNavbar() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setOpen((prev) => !prev);

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
                        {/* Logo */}
                        <Link href="/" className="font-heading text-xl text-slateDark dark:text-slateLight">
                            Usman A. Khan
                        </Link>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <ul className="flex space-x-8 font-body text-sm">
                                {simpleLinks.map(({ label, href }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className="text-slateDark dark:text-slateLight hover:text-primary transition"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
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

                    {/* Mobile Menu */}
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
                                    {simpleLinks.map(({ label, href }) => (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                className="block w-full text-slateDark dark:text-slateLight px-2 py-2 rounded-md hover:bg-primary/10 dark:hover:bg-primary-dark/10 transition"
                                            >
                                                {label}
                                            </Link>
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
