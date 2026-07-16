// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

const roles = [
    {
        icon: Briefcase,
        company: 'Bitlab Digital',
        title: 'Backend Engineer Intern',
        period: 'Jan 2025 -- May 2025',
        location: 'Malaysia',
        bullets: [
            'Designed and implemented RESTful API endpoints powering client-facing web applications.',
            'Modelled and optimized relational database schemas for performance and maintainability.',
            'Contributed to CI/CD pipeline configuration, reducing deployment friction across staging and production.',
            'Collaborated with frontend engineers on API contracts and integration testing.',
        ],
        tags: ['C#', '.NET', 'SQL Server', 'REST APIs', 'CI/CD'],
    },
    {
        icon: Users,
        company: 'APU Red Hat Academy Club',
        title: 'Event Coordinator',
        period: 'Oct 2024 -- Present',
        location: 'Asia Pacific University',
        bullets: [
            'Organize technical workshops on Linux, open-source tooling, and DevOps fundamentals.',
            'Coordinate speakers, manage logistics, and drive attendance for club events.',
            'Promote a culture of continuous learning and hands-on technical exploration.',
        ],
        tags: ['Linux', 'DevOps', 'Event Management', 'Community'],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            aria-label="Work experience"
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
                        Experience
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        aria-hidden="true"
                        className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block"
                    />

                    <div className="space-y-10">
                        {roles.map((role, i) => {
                            const Icon = role.icon;
                            return (
                                <motion.article
                                    key={role.company}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="sm:pl-16 relative"
                                >
                                    {/* Timeline dot */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-0 top-5 w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 border border-primary/20 dark:border-accent/20 items-center justify-center hidden sm:flex"
                                    >
                                        <Icon className="w-5 h-5 text-primary dark:text-accent" aria-hidden="true" />
                                    </div>

                                    <div className="p-6 bg-white dark:bg-card-dark rounded-2xl border border-primary/6 dark:border-white/5 hover:border-primary/15 dark:hover:border-accent/10 transition-colors duration-200 hover:shadow-lg-soft">
                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="font-heading text-xl font-bold text-slateDark dark:text-slateLight">
                                                    {role.title}
                                                </h3>
                                                <p className="font-body text-base text-primary dark:text-accent font-medium mt-0.5">
                                                    {role.company}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start sm:items-end gap-0.5">
                                                <span className="font-mono text-sm text-muted bg-slateLight dark:bg-slateDark px-3 py-1 rounded-full whitespace-nowrap">
                                                    {role.period}
                                                </span>
                                                <span className="font-body text-xs text-muted">
                                                    {role.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Bullets */}
                                        <ul className="space-y-2 mb-5" aria-label={`Responsibilities at ${role.company}`}>
                                            {role.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <span
                                                        aria-hidden="true"
                                                        className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent"
                                                    />
                                                    <span className="font-body text-sm leading-6 text-slateDark/75 dark:text-slateLight/75">
                                                        {b}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {role.tags.map((tag) => (
                                                <span key={tag} className="tech-badge">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}