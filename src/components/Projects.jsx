// src/components/Projects.jsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ProjectModal = dynamic(() => import('./ProjectModal'), { ssr: false })

const projects = [
    {
        title: 'Microsite Game SPA',
        tech: ['.NET', 'C#'],
        desc: 'Interactive one-page game prototype.',
        image: '/images/blackPattern1.jpg', // add images in public/images
        demoLink: '#',
        codeLink: '#',
    },
    {
        title: 'Project Placeholder #2',
        tech: ['React', 'Tailwind'],
        desc: 'Details coming soon...',
        image: '/images/whiteHexPattern.png',
        demoLink: '#',
        codeLink: '#',
    },
];

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <motion.section
            id="projects"
            className="px-8 sm:px-16 py-20 bg-white text-slateDark dark:bg-slateDark dark:text-slateLight"
        >
            <h2 className="font-heading text-4xl mb-8 dark:text-slateLight">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={p.title}
                        className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg-soft hover:shadow-lift transition-shadow duration-200 ease-out"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        onClick={() => setSelected(p)}
                    >
                        <Image
                            src={p.image}
                            alt={p.title}
                            width={600}       // approximate card width
                            height={360}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 bg-slateLight dark:bg-slateDark">
                            <h3 className="font-heading text-2xl mb-1 dark:text-slateLight">
                                {p.title}
                            </h3>
                            <p className="font-body text-sm text-primary dark:text-accent">
                                {p.tech.join(' | ')}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selected && (
                <ProjectModal project={selected} onClose={() => setSelected(null)} />
            )}
        </motion.section>
    );
}