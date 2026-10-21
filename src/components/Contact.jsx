// src/components/Contact.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    useEffect(() => {
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            setLinkedinUrl('linkedin://in/usmank-x');
        }
    }, []);

    const resolvedSocials = socials.map((s) =>
        s.label === 'LinkedIn' ? { ...s, href: linkedinUrl } : s
    );

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Replace YOUR_FORM_ID with your Formspree form ID to activate
            const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(formState),
            });
            if (res.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section
            id="contact"
            aria-label="Contact"
            className="relative px-6 sm:px-12 lg:px-24 py-24 bg-white dark:bg-card-dark overflow-hidden"
        >
            {/* Background accent */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.07) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="font-heading text-4xl font-bold text-slateDark dark:text-slateLight mb-4">
                        Let's Connect
                    </h2>
                    <p className="font-body text-base leading-7 text-slateDark/65 dark:text-slateLight/65 max-w-lg mx-auto">
                        Whether you have a project in mind, a role that fits, or just want to talk engineering - my inbox is open. I'm currently available for internships, part-time roles, and freelance work.
                    </p>
                </motion.div>

                {/* Primary email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex justify-center mb-10"
                >
                    <a
                        href="mailto:usmank+portfolio@outlook.in"
                        data-cursor="pointer"
                        className="button-ripple inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-accent text-white dark:text-slateDark font-heading font-semibold text-base rounded-xl shadow-glow-sm hover:bg-primary-dark dark:hover:opacity-90 hover:shadow-glow transition-all duration-200"
                    >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        Say Hello
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                </motion.div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-10 p-6 rounded-2xl border border-primary/10 dark:border-accent/10 bg-slateLight dark:bg-slateDark"
                >
                    <p className="font-heading text-sm font-semibold text-muted uppercase tracking-widest mb-5">
                        Or send a message
                    </p>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center gap-3 py-8 text-center">
                            <CheckCircle className="w-10 h-10 text-primary dark:text-accent" />
                            <p className="font-heading text-lg font-semibold text-slateDark dark:text-slateLight">
                                Message sent!
                            </p>
                            <p className="font-body text-sm text-muted">
                                Thanks for reaching out. I'll get back to you soon.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                data-cursor="pointer"
                                className="mt-2 font-body text-sm text-primary dark:text-accent underline underline-offset-2"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="contact-name" className="block font-body text-xs font-medium text-muted mb-1.5 uppercase tracking-wide">
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-card-dark border border-primary/15 dark:border-accent/15 text-slateDark dark:text-slateLight font-body text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block font-body text-xs font-medium text-muted mb-1.5 uppercase tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="you@email.com"
                                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-card-dark border border-primary/15 dark:border-accent/15 text-slateDark dark:text-slateLight font-body text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block font-body text-xs font-medium text-muted mb-1.5 uppercase tracking-wide">
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="What's on your mind?"
                                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-card-dark border border-primary/15 dark:border-accent/15 text-slateDark dark:text-slateLight font-body text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition resize-none"
                                />
                            </div>

                            {status === 'error' && (
                                <p className="flex items-center gap-2 font-body text-sm text-red-500">
                                    <AlertCircle className="w-4 h-4" />
                                    Something went wrong. Please email me directly.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                data-cursor="pointer"
                                className="button-ripple inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-accent text-white dark:text-slateDark font-heading font-semibold rounded-xl hover:bg-primary-dark dark:hover:opacity-90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" aria-hidden="true" />
                                {status === 'sending' ? 'Sending…' : 'Send Message'}
                            </button>

                            <p className="font-body text-xs text-muted">
                                Powered by Formspree. Replace <code className="font-mono bg-primary/8 dark:bg-accent/10 px-1 rounded">YOUR_FORM_ID</code> in Contact.jsx with your form ID to activate.
                            </p>
                        </form>
                    )}
                </motion.div>

                {/* Social cards */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {resolvedSocials.map(({ icon: Icon, label, subtext, href }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                            aria-label={`${label}: ${subtext}`}
                            data-cursor="pointer"
                            className="group flex flex-col items-center gap-2 p-5 rounded-2xl border border-primary/10 dark:border-accent/8 bg-slateLight dark:bg-slateDark hover:border-primary/30 dark:hover:border-accent/25 hover:shadow-lg-soft transition-all duration-200"
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
                    className="mt-10 font-body text-xs text-muted text-center"
                >
                    Based in Malaysia. Available remotely worldwide.
                </motion.p>
            </div>
        </section>
    );
}
