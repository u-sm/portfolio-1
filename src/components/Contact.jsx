// src/components/Contact.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socials = [
    {
        icon: Github,
        label: 'GitHub',
        subtext: 'u-sm',
        href: 'https://github.com/u-sm',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        subtext: 'usmank-x',
        mobileHref: 'linkedin://in/usmank-x',
        href: 'https://linkedin.com/in/usmank-x',
    },
    {
        icon: Mail,
        label: 'Email',
        subtext: 'usmank+portfolio@outlook.in',
        href: 'mailto:usmank+portfolio@outlook.in',
    },
];

export default function Contact() {
    const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/in/usmank-x');

    useEffect(() => {
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setLinkedinUrl('linkedin://in/usmank-x');
        }
    }, []);

    const resolvedSocials = socials.map((s) =>
        s.label === 'LinkedIn' ? { ...s, href: linkedinUrl } : s
    );

    return (
        <section
            id="contact"
            aria-label="Contact"
            className="relative px-6 sm:px-12 lg:px-24 py-24 bg-white dark:bg-card-dark overflow-hidden"
        >
            {/* Background accent */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-4xl font-bold text-slateDark dark:text-slateLight mb-4">
                        Let's Connect
                    </h2>
                    <p className="font-body text-base leading-7 text-slateDark/65 dark:text-slateLight/65 max-w-lg mx-auto mb-10">
                        Whether you have a project in mind, a role that fits, or just want to talk engineering -- my inbox is open. I'm currently available for internships, part-time roles, and freelance work.
                    </p>
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="mb-12"
                >
                    <a
                        href="mailto:usmank+portfolio@outlook.in"
                        className="button-ripple inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-heading font-semibold text-base rounded-xl shadow-glow-sm hover:bg-primary-dark hover:shadow-glow transition-all duration-200"
                    >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        Say Hello
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                </motion.div>

                {/* Social cards */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {resolvedSocials.map(({ icon: Icon, label, subtext, href }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                            aria-label={`${label}: ${subtext}`}
                            className="group flex flex-col items-center gap-2 p-5 rounded-2xl border border-primary/8 dark:border-white/5 bg-slateLight dark:bg-slateDark hover:border-primary/25 dark:hover:border-accent/20 hover:shadow-lg-soft transition-all duration-200"
                        >
                            <Icon
                                className="w-5 h-5 text-muted group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200"
                                aria-hidden="true"
                            />
                            <span className="font-heading text-sm font-semibold text-slateDark dark:text-slateLight">
                                {label}
                            </span>
                            <span className="font-mono text-xs text-muted truncate max-w-full">
                                {subtext}
                            </span>
                        </a>
                    ))}
                </motion.div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-12 font-body text-xs text-muted"
                >
                    Based in Malaysia. Available remotely worldwide.
                </motion.p>
            </div>
        </section>
    );
}
