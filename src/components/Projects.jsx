// src/components/Projects.jsx
'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
    {
        title: 'sg-control-rts',
        featured: true,
        category: 'Systems / Embedded',
        description:
            'A real-time CubeSat control system simulation built in Rust, split across three workspace crates: the Onboard Control System, Ground Control Station, and shared packet and logging primitives. Features real-time task scheduling with configurable sensor priorities, telemetry downlink preparation, and fault management -- designed around the constraints of embedded satellite systems.',
        tech: ['Rust', 'Cargo Workspaces', 'Real-Time Systems', 'Networking', 'CubeSat'],
        githubLink: 'https://github.com/u-sm/sg-control-rts',
        demoLink: null,
    },
    {
        title: 'ReserveDesk',
        featured: true,
        category: 'Full-Stack Web',
        description:
            'A centralized resource reservation platform for university clubs and staff, featuring smart request forms with real-time conflict detection, an admin dashboard with calendar views, financial tracking with payment and penalty management, analytics with approval rate reporting, and automated email notifications via SendGrid. Deployed to production at reservedesk.vercel.app.',
        tech: ['TypeScript', 'Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Shadcn UI', 'SendGrid', 'Recharts'],
        githubLink: 'https://github.com/u-sm/reservedesk',
        demoLink: 'https://reservedesk.vercel.app',
    },
    {
        title: 'DeFiLance',
        featured: false,
        category: 'Web3 / Blockchain',
        description:
            'A decentralized freelancing marketplace built with Hardhat and Solidity on Ethereum, enabling trustless project contracts with on-chain milestone payments and smart contract escrow. The platform removes intermediaries from the freelancer-client relationship using EVM-compatible smart contracts, with a TypeScript frontend for contract interaction.',
        tech: ['Solidity', 'Hardhat', 'TypeScript', 'Ethereum', 'Smart Contracts', 'EVM'],
        githubLink: 'https://github.com/sqd2/Hardhat-DeFi-Freelance-Platform',
        demoLink: null,
    },
    {
        title: 'Portfolio Website',
        featured: false,
        category: 'Frontend',
        description:
            'This portfolio site -- a single-page application built with Next.js and Framer Motion, featuring smooth section transitions, a custom cursor, animated floating backgrounds, and full light and dark theme support. Deployed on Vercel with static export.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
        githubLink: 'https://github.com/u-sm/portfolio-1',
        demoLink: 'https://portfolio-1-one-sable.vercel.app',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Projects() {
    return (
        <section
            id="projects"
            aria-label="Projects"
            className="px-6 sm:px-12 lg:px-24 py-24 bg-white dark:bg-card-dark"
        >
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-4xl font-bold text-slateDark dark:text-slateLight section-heading mb-12">
                        Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className={`group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${
                                project.featured
                                    ? 'border-primary/20 dark:border-accent/15 hover:border-primary/40 dark:hover:border-accent/30 hover:shadow-glow'
                                    : 'border-primary/8 dark:border-white/5 hover:border-primary/20 dark:hover:border-white/10 hover:shadow-lg-soft'
                            } bg-slateLight dark:bg-slateDark`}
                        >
                            {/* Featured bar */}
                            {project.featured && (
                                <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary/0" aria-hidden="true" />
                            )}

                            <div className="flex flex-col flex-1 p-6">
                                {/* Top row */}
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        {project.featured && (
                                            <span className="inline-flex items-center gap-1 mb-2 text-xs font-mono font-medium text-primary dark:text-accent">
                                                <Star className="w-3 h-3" aria-hidden="true" />
                                                Featured
                                            </span>
                                        )}
                                        <h3 className="font-heading text-xl font-bold text-slateDark dark:text-slateLight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <span className="flex-shrink-0 font-mono text-xs text-muted bg-white dark:bg-card-dark border border-primary/8 dark:border-white/5 px-2.5 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="font-body text-sm leading-6 text-slateDark/70 dark:text-slateLight/65 mb-5 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-badge">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 pt-4 border-t border-primary/5 dark:border-white/5">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} source code on GitHub`}
                                        className="inline-flex items-center gap-2 font-body text-sm font-medium text-slateDark/60 dark:text-slateLight/60 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                                    >
                                        <Github className="w-4 h-4" aria-hidden="true" />
                                        Source Code
                                    </a>
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} live demo`}
                                            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary dark:text-accent hover:text-primary-dark dark:hover:text-accent-muted transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
