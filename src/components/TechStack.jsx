// src/components/TechStack.jsx
'use client';

import { motion } from 'framer-motion';
import { Code, Database, Terminal, GitBranch, Box } from 'lucide-react';

const techSkills = [
    { name: '.NET', icon: Code, level: 85 },
    { name: 'MSSQL', icon: Database, level: 75 },
    { name: 'Linux', icon: Terminal, level: 80 },
    { name: 'Git', icon: GitBranch, level: 90 },
    { name: 'Docker', icon: Box, level: 70 },
];

export default function TechStack() {
    return (
        <motion.section
            id="tech"
            className="px-8 sm:px-16 py-20 bg-slateLight/30 dark:bg-slateDark/30 backdrop-blur-md text-slateDark dark:text-slateLight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-heading text-4xl mb-8 dark:text-slateLight">Tech Stack & Proficiency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {techSkills.map(({ name, icon: Icon, level }, i) => (
                    <motion.div
                        key={name}
                        className="p-6 bg-white dark:bg-slateDark rounded-2xl shadow-lg-soft hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <Icon className="w-8 h-8 text-primary dark:text-accent" />
                            <span className="font-heading text-xl dark:text-slateLight">{name}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-2 bg-primary dark:bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${level}%` }}
                                transition={{ delay: i * 0.05 + 0.3, duration: 1 }}
                            />
                        </div>
                        <span className="block mt-2 font-body text-sm text-gray-600 dark:text-gray-400">
                            {level}% proficiency
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
