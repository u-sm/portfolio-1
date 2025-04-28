// src/components/Contact.jsx
'use client';

import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="px-8 sm:px-16 py-20 flex flex-col items-center bg-gradient-to-br from-slateLight to-white dark:from-slateDark dark:to-gray-900 text-slateDark dark:text-slateLight space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {/* Heading */}
            <motion.h2
                className="font-heading text-4xl dark:text-slateLight"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Let’s Connect
            </motion.h2>

            {/* Intro Text */}
            <motion.p
                className="font-body text-lg text-center max-w-lg dark:text-slateLight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Got feedback about my work or just want to chat? Reach out via email below, or connect with me on GitHub or LinkedIn.
            </motion.p>

            {/* Email Link */}
            <AnimatedButton
                as="a"
                href="mailto:usmank@outlook.in"
                className="bg-primary text-white rounded-2xl px-6 py-3"
                whileHover={{ scale: 1.05 }}
            >
                Email Me
            </AnimatedButton>

            {/* Social Icons */}
            <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                {[
                    { icon: Github, href: 'https://github.com/u-sm' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/usmank-x' },
                ].map(({ icon: Icon, href }, i) => (
                    <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-primary dark:text-accent hover:text-primary-dark dark:hover:text-accent transition"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon className="w-6 h-6" />
                    </motion.a>
                ))}
            </motion.div>
        </motion.section>
    );
}
