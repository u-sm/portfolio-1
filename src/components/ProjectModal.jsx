// src/components/ProjectModal.jsx
'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slateDark rounded-2xl p-8 w-11/12 md:w-2/3 max-w-2xl relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slateDark dark:text-slateLight"
                >
                    <X className="w-6 h-6" />
                </button>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="font-heading text-2xl dark:text-slateLight mb-2">{project.title}</h3>
                <p className="font-body text-base dark:text-slateLight mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 border border-primary rounded-full text-sm text-primary dark:border-accent dark:text-accent"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-white rounded-2xl hover:bg-primary-dark transition"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-primary text-primary rounded-2xl hover:bg-primary hover:text-white transition"
                    >
                        Source Code
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
