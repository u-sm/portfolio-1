// src/components/Hero.jsx
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'

export default function Hero() {
    return (
        <motion.section
            id="home"
            className="min-h-screen flex flex-col justify-center items-start px-8 sm:px-16 bg-slateLight/80 text-slateDark dark:bg-slateDark/80 dark:text-slateLight"
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
                <AnimatedButton as="a"
                    href="mailto:usmank@outlook.in"
                    className="button-ripple px-6 py-3 bg-primary text-white rounded-2xl shadow-lg-soft hover:shadow-lg transition dark:bg-white dark:text-primary"
                >
                    Let’s Connect
                </AnimatedButton>
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