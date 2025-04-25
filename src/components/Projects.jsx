// src/components/Projects.jsx
import { motion } from 'framer-motion'

export default function Projects() {
    const projects = [
        { title: 'Microsite Game SPA', tech: '.NET C#', desc: 'Interactive one-page game prototype.' },
        { title: 'Placeholder Project 2', tech: 'Coming soon', desc: 'Stay tuned!' },
    ]

    return (
        <motion.section
            id="projects"
            className="px-8 sm:px-16 py-20 bg-white text-slateDark dark:bg-slateDark dark:text-slateLight space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-heading text-4xl dark:text-slateLight">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((p) => (
                    <motion.div
                        key={p.title}
                        className="p-6 bg-slateLight rounded-2xl shadow-lg-soft hover:shadow-lg transition hover:scale-[1.02] dark:bg-slateDark"
                        whileHover={{ scale: 1.03 }}
                    >
                        <h3 className="font-heading text-2xl mb-2 dark:text-slateLight">{p.title}</h3>
                        <p className="font-body text-sm italic mb-4 text-primary dark:text-accent">{p.tech}</p>
                        <p className="font-body text-base dark:text-slateLight">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}