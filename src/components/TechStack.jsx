// src/components/TechStack.jsx
'use client';

import { motion } from 'framer-motion';

const categories = [
    {
        label: 'Languages',
        items: ['C#', 'Rust', 'TypeScript', 'Python', 'SQL', 'JavaScript'],
    },
    {
        label: 'Frameworks & Platforms',
        items: ['.NET', 'Next.js', 'React', 'Hardhat'],
    },
    {
        label: 'Databases & Storage',
        items: ['SQL Server', 'PostgreSQL', 'Supabase', 'SQLite'],
    },
    {
        label: 'DevOps & Tools',
        items: ['Git', 'Linux', 'Docker', 'CI/CD', 'Vercel', 'GitHub Actions'],
    },
    {
        label: 'Currently Exploring',
        items: ['Solidity', 'Tokio (Rust async)', 'WebAssembly'],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
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

                <div className="space-y-9">
                    {categories.map((cat, catIdx) => (
                        <div key={cat.label}>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: catIdx * 0.05, duration: 0.4 }}
                                className="font-heading text-xs font-semibold text-muted uppercase tracking-widest mb-3"
                            >
                                {cat.label}
                            </motion.p>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex flex-wrap gap-2"
                            >
                                {cat.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={badgeVariants}
                                        className="tech-badge cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-10 font-body text-sm text-muted"
                >
                    I adapt to project requirements and continuously expand my toolkit. This list reflects technologies I've used in real projects and internship work.
                </motion.p>
            </div>
        </section>
    );
}
