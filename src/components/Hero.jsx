// src/components/Hero.jsx
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'
import { Github, Linkedin, ArrowRight } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' }
    }),
}

export default function Hero() {
    return (
        <motion.section
            id="home"
            aria-label="Introduction"
            className="relative min-h-screen flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 pt-24 pb-16 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Mesh gradient background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-mesh pointer-events-none"
            />

            {/* Glow orb */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl">
                {/* Open to work badge */}
                <motion.div
                    custom={0.1}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/20 dark:border-accent/25 text-primary dark:text-accent text-sm font-medium font-body">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                        Open to Opportunities
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    custom={0.2}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slateDark dark:text-slateLight mb-4"
                >
                    Hi, I'm{' '}
                    <span className="text-primary dark:text-accent">Usman.</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    custom={0.35}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="font-body text-xl sm:text-2xl text-slateDark/70 dark:text-slateLight/70 max-w-xl leading-relaxed mb-8"
                >
                    Backend Engineer building reliable, efficient systems -- from real-time satellite control in Rust to full-stack web platforms.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    custom={0.5}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-4 mb-12"
                >
                    <AnimatedButton
                        as="a"
                        href="#projects"
                        data-cursor="pointer"
                        className="button-ripple inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-heading font-semibold rounded-xl shadow-glow-sm hover:bg-primary-dark hover:shadow-glow transition-all duration-200"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </AnimatedButton>
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 dark:border-accent/30 text-primary dark:text-accent font-heading font-semibold rounded-xl hover:bg-primary/8 dark:hover:bg-accent/8 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Resume
                    </motion.a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    custom={0.65}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-5"
                >
                    <a
                        href="https://github.com/u-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="text-slateDark/50 dark:text-slateLight/50 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                    >
                        <Github className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a
                        href="https://linkedin.com/in/usmank-x"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="text-slateDark/50 dark:text-slateLight/50 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                    >
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a
                        href="mailto:usmank+portfolio@outlook.in"
                        aria-label="Send email"
                        className="font-body text-sm text-slateDark/50 dark:text-slateLight/50 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                    >
                        usmank+portfolio@outlook.in
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}