// src/components/Experience.jsx
import { motion } from 'framer-motion'

export default function Experience() {
    const roles = [
        {
            company: 'Bitlab Digital',
            title: 'Backend Engineer Intern',
            period: 'Jan 2025 – May 2025',
            desc: 'Built scalable API endpoints, designed database schemas, and implemented CI/CD pipelines.'
        },
        {
            company: 'APU Red Hat Academy Club',
            title: 'Event Coordinator',
            period: 'Ongoing',
            desc: 'Organize tech workshops and events, coordinate speakers, and manage event logistics.'
        }
    ]

    return (
        <motion.section
            id="experience"
            className="px-8 sm:px-16 py-20 bg-slateLight/30 text-slateDark dark:bg-slateDark/30 backdrop-blur-md dark:text-slateLight space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-heading text-4xl dark:text-slateLight">Experience</h2>
            <div className="space-y-6">
                {roles.map((r) => (
                    <div
                        key={r.company}
                        className="p-6 bg-white rounded-2xl shadow-lg-soft hover:shadow-lg transition hover:scale-[1.01] dark:bg-slateDark"
                    >
                        <h3 className="font-heading text-2xl dark:text-slateLight">{r.company}</h3>
                        <p className="font-body text-sm italic mt-1 text-primary dark:text-accent">
                            {r.title} • {r.period}
                        </p>
                        <p className="font-body text-base mt-4 dark:text-slateLight">{r.desc}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}