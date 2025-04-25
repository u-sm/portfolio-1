// src/components/Hero.jsx
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <motion.section
            id="home"
            className="min-h-screen flex flex-col justify-center items-start px-8 sm:px-16 bg-slateLight text-slateDark dark:bg-slateDark dark:text-slateLight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1
                className="font-heading text-6xl sm:text-7xl mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                Hi, I’m Usman Ali Khan.
            </motion.h1>
            <motion.p
                className="font-body text-xl sm:text-2xl text-primary max-w-xl dark:text-accent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                Backend Engineer & Linux Enthusiast building efficient, scalable systems with a dash of creativity.
            </motion.p>
            <div className="mt-8 flex space-x-4">
                <motion.a
                    href="mailto:usman@outlook.in"
                    className="px-6 py-3 bg-primary text-white rounded-2xl shadow-lg-soft hover:shadow-lg transition dark:bg-white dark:text-primary"
                    whileHover={{ scale: 1.05 }}
                >
                    Let’s Connect
                </motion.a>
                <motion.a
                    href="/DummyResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-primary text-primary rounded-2xl hover:bg-primary hover:text-white transition dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-slateDark"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    View Resume
                </motion.a>
            </div>
        </motion.section>
    )
}