// src/components/TechStack.jsx
'use client';

import { motion } from 'framer-motion';

// Icon glyphs using Unicode/text for each tech (no extra packages needed)
const categories = [
    {
        label: 'Languages',
        emoji: '{ }',
        color: 'text-accent dark:text-accent',
        items: [
            { name: 'C#', glyph: 'C#' },
            { name: 'Rust', glyph: '⚙' },
            { name: 'TypeScript', glyph: 'TS' },
            { name: 'Python', glyph: '🐍' },
            { name: 'SQL', glyph: '⊞' },
            { name: 'JavaScript', glyph: 'JS' },
        ],
    },
    {
        label: 'Frameworks & Platforms',
        emoji: '▲',
        color: 'text-primary dark:text-accent-muted',
        items: [
            { name: '.NET', glyph: '.N' },
            { name: 'Next.js', glyph: '▲' },
            { name: 'React', glyph: '⚛' },
            { name: 'Hardhat', glyph: '⛏' },
        ],
    },
    {
        label: 'Databases & Storage',
        emoji: '🗄',
        color: 'text-primary dark:text-accent',
        items: [
            { name: 'SQL Server', glyph: '⬡' },
            { name: 'PostgreSQL', glyph: '🐘' },
            { name: 'Supabase', glyph: '⚡' },
            { name: 'SQLite', glyph: '◈' },
        ],
    },
    {
        label: 'DevOps & Tools',
        emoji: '🛠',
        color: 'text-primary-dark dark:text-accent-muted',
        items: [
            { name: 'Git', glyph: '⎇' },
            { name: 'Linux', glyph: '🐧' },
            { name: 'Docker', glyph: '🐳' },
            { name: 'CI/CD', glyph: '↻' },
            { name: 'Vercel', glyph: '▲' },
            { name: 'GitHub Actions', glyph: '⚡' },
        ],
    },
    {
        label: 'Currently Exploring',
        emoji: '🔭',
        color: 'text-accent dark:text-accent-muted',
        items: [
            { name: 'Solidity', glyph: '◆' },
            { name: 'Tokio (Rust async)', glyph: '⚙' },
            { name: 'WebAssembly', glyph: '🕸' },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06 },
    },
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export default function TechStack() {
    return (
        <section
            id="tech"
            aria-label="Technology stack"
            className="px-6 sm:px-12 lg:px-24 py-24 bg-slateLight dark:bg-slateDark"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-4xl font-bold text-slateDark dark:text-slateLight section-heading mb-12">
                        Tech Stack
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                            className={`p-5 rounded-2xl bg-white dark:bg-card-dark border border-primary/10 dark:border-accent/10 hover:border-primary/25 dark:hover:border-accent/20 transition-colors duration-200 ${
                                cat.label === 'Currently Exploring' ? 'sm:col-span-2 lg:col-span-1' : ''
                            }`}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-sm"
                                    aria-hidden="true"
                                >
                                    {cat.emoji}
                                </span>
                                <p className="font-heading text-xs font-semibold text-muted uppercase tracking-widest">
                                    {cat.label}
                                </p>
                            </div>

                            {/* Badges */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex flex-wrap gap-2"
                            >
                                {cat.items.map((item) => (
                                    <motion.span
                                        key={item.name}
                                        variants={badgeVariants}
                                        className="tech-badge cursor-default inline-flex items-center gap-1.5"
                                        title={item.name}
                                    >
                                        <span aria-hidden="true" className="text-[10px] opacity-70 leading-none">
                                            {item.glyph}
                                        </span>
                                        {item.name}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-8 font-body text-sm text-muted"
                >
                    I adapt to project requirements and continuously expand my toolkit. This list reflects technologies I've used in real projects and internship work.
                </motion.p>
            </div>
        </section>
    );
}
