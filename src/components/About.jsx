// src/components/About.jsx
import { motion } from 'framer-motion';
import { Code, Briefcase, Coffee } from 'lucide-react';

const stats = [
    { icon: Code, label: 'Projects', value: 5 },
    { icon: Briefcase, label: 'Experience (months)', value: 4 },
    { icon: Coffee, label: 'Cups of Coffee', value: 1000 },
];

export default function About() {
    return (
        <section
            id="about"
            className="px-8 sm:px-16 py-20 bg-white text-slateDark dark:bg-slateDark dark:text-slateLight"
        >
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Animated Heading & Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="font-heading text-4xl">About Me</h2>
                    <p className="font-body text-lg leading-relaxed">
                        I’m a backend engineer who loves crafting reliable, efficient systems.
                        When I’m not writing C# or tuning SQL queries, you’ll find me exploring
                        Linux shells, optimizing workflows, and occasionally breaking things
                        just to fix them better.
                    </p>
                </motion.div>

                {/* Stats Cards with Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {stats.map(({ icon: Icon, label, value }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                            className="flex flex-col items-center p-6 bg-slateLight rounded-2xl shadow-lg-soft dark:bg-slateDark"
                        >
                            <Icon className="w-8 h-8 text-primary mb-2" />
                            <span className="font-heading text-2xl">{value}</span>
                            <span className="font-body text-sm text-gray-600 dark:text-gray-400">
                                {label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
