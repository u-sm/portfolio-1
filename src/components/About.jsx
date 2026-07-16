// src/components/About.jsx
import { motion } from 'framer-motion';
import { Terminal, Globe, Users } from 'lucide-react';

const stats = [
    {
        icon: Terminal,
        label: 'Languages',
        value: '5+',
        sublabel: 'Rust, C#, TypeScript, Python, SQL',
    },
    {
        icon: Globe,
        label: 'Live Projects',
        value: '2',
        sublabel: 'Production deployments',
    },
    {
        icon: Users,
        label: 'Collaboration',
        value: 'Active',
        sublabel: 'Open source and team projects',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
    return (
        <section
            id="about"
            aria-label="About me"
            className="px-6 sm:px-12 lg:px-24 py-24 bg-white dark:bg-card-dark"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-4xl font-bold text-slateDark dark:text-slateLight section-heading mb-8">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-5"
                    >
                        <p className="font-body text-base leading-7 text-slateDark/80 dark:text-slateLight/80">
                            I'm a backend-focused engineer with a passion for low-level systems, scalable APIs, and developer tooling. I work across C#, Rust, TypeScript, and Python -- and I'm most at home when solving hard infrastructure or architecture problems.
                        </p>
                        <p className="font-body text-base leading-7 text-slateDark/80 dark:text-slateLight/80">
                            I gained real-world experience as a Backend Engineer Intern at Bitlab Digital, where I built and shipped API endpoints, designed database schemas, and contributed to CI/CD pipelines. Beyond that, I organize technical workshops as Event Coordinator for the APU Red Hat Academy Club.
                        </p>
                        <p className="font-body text-base leading-7 text-slateDark/80 dark:text-slateLight/80">
                            I believe in shipping clean, well-reasoned code, writing meaningful documentation, and always learning from systems that scale.
                        </p>

                        {/* Focus areas */}
                        <div className="pt-2">
                            <p className="font-heading text-sm font-semibold text-muted uppercase tracking-widest mb-3">
                                Focus Areas
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Backend Systems',
                                    'Real-Time Architecture',
                                    'API Design',
                                    'Database Modeling',
                                    'DevOps',
                                    'Web3',
                                ].map((area) => (
                                    <span key={area} className="tech-badge">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 gap-5"
                    >
                        {stats.map(({ icon: Icon, label, value, sublabel }) => (
                            <motion.div
                                key={label}
                                variants={itemVariants}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-slateLight dark:bg-slateDark border border-primary/8 dark:border-white/5 hover:border-primary/20 dark:hover:border-accent/15 transition-colors duration-200"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-primary dark:text-accent" aria-hidden="true" />
                                </div>
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-heading text-2xl font-bold text-slateDark dark:text-slateLight">
                                            {value}
                                        </span>
                                        <span className="font-heading text-sm font-semibold text-primary dark:text-accent">
                                            {label}
                                        </span>
                                    </div>
                                    <p className="font-body text-sm text-muted mt-0.5">{sublabel}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
