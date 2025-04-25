// src/components/TechStack.jsx
import { motion } from 'framer-motion'

export default function TechStack() {
    const tech = ['.NET', 'MSSQL', 'Linux', 'Git', 'Docker']
    return (
        <motion.section
            id="tech"
            className="px-8 sm:px-16 py-20 bg-white text-slateDark dark:bg-slateDark dark:text-slateLight space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-heading text-4xl dark:text-slateLight">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
                {tech.map((t) => (
                    <motion.span
                        key={t}
                        className="px-4 py-2 border border-primary rounded-full font-body text-sm hover:bg-primary hover:text-white transition dark:border-accent dark:text-slateLight dark:hover:bg-accent dark:hover:text-slateDark"
                        whileHover={{ scale: 1.05 }}
                    >
                        {t}
                    </motion.span>
                ))}
            </div>
        </motion.section>
    )
}