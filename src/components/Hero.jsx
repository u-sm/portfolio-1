// src/components/Hero.jsx
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react'

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' }
    }),
}

// Terminal lines shown in the right-side code panel
const terminalLines = [
    { prefix: '$', text: 'cat about.txt', color: 'text-accent' },
    { prefix: '>', text: 'Backend Engineer @ Bitlab Digital', color: 'text-slateLight/80' },
    { prefix: '>', text: 'Event Coordinator @ APU Red Hat Club', color: 'text-slateLight/80' },
    { prefix: '', text: '', color: '' },
    { prefix: '$', text: 'ls ./languages', color: 'text-accent' },
    { prefix: '>', text: 'Rust  C#  TypeScript  Python  SQL', color: 'text-accent-muted' },
    { prefix: '', text: '', color: '' },
    { prefix: '$', text: 'git log --oneline -3', color: 'text-accent' },
    { prefix: '●', text: 'feat: real-time CubeSat telemetry', color: 'text-slateLight/70' },
    { prefix: '●', text: 'feat: ReserveDesk - live at vercel', color: 'text-slateLight/70' },
    { prefix: '●', text: 'feat: DeFiLance smart-contract escrow', color: 'text-slateLight/70' },
    { prefix: '', text: '', color: '' },
    { prefix: '$', text: 'echo $STATUS', color: 'text-accent' },
    { prefix: '>', text: 'Open to opportunities ✓', color: 'text-accent-muted' },
]

export default function Hero() {
    return (
        <motion.section
            aria-label="Introduction"
            className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-24 pb-16 overflow-hidden"
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
                className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,201,167,0.12) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-start lg:items-center gap-12">

                {/* ── Left: Text content ── */}
                <div className="flex-1 max-w-xl">
                    {/* Open to work badge */}
                    <motion.div
                        custom={0.1}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-accent/10 border border-primary/20 dark:border-accent/20 text-primary dark:text-accent text-sm font-medium font-body">
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
                        Backend Engineer building reliable, efficient systems - from real-time satellite control in Rust to full-stack web platforms.
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
                            className="button-ripple inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-accent text-white dark:text-slateDark font-heading font-semibold rounded-xl shadow-glow-sm hover:bg-primary-dark dark:hover:opacity-90 hover:shadow-glow transition-all duration-200"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </AnimatedButton>
                        <motion.a
                            href="/DummyResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="pointer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 dark:border-accent/30 text-primary dark:text-accent font-heading font-semibold rounded-xl hover:bg-primary/10 dark:hover:bg-accent/10 transition-all duration-200"
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
                            data-cursor="pointer"
                            className="text-slateDark/50 dark:text-slateLight/50 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                        >
                            <Github className="w-5 h-5" aria-hidden="true" />
                        </a>
                        <a
                            href="https://linkedin.com/in/usmank-x"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            data-cursor="pointer"
                            className="text-slateDark/50 dark:text-slateLight/50 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                        >
                            <Linkedin className="w-5 h-5" aria-hidden="true" />
                        </a>
                        <a
                            href="mailto:usmank+portfolio@outlook.in"
                            aria-label="Send email"
                            data-cursor="pointer"
                            className="font-body text-sm text-slateDark/50 dark:text-slateLight/50 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                        >
                            usmank+portfolio@outlook.in
                        </a>
                    </motion.div>
                </div>

                {/* ── Right: Terminal code panel ── */}
                <motion.div
                    custom={0.45}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="hidden lg:block flex-shrink-0 w-full max-w-sm xl:max-w-md"
                    aria-hidden="true"
                >
                    <div className="terminal-window">
                        {/* Title bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-accent/10 bg-slateDark/60">
                            <span className="w-3 h-3 rounded-full bg-red-500/70" />
                            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <span className="w-3 h-3 rounded-full bg-accent/70" />
                            <span className="ml-2 font-mono text-xs text-slateLight/40 flex items-center gap-1.5">
                                <Terminal className="w-3 h-3" />
                                usman@portfolio:~
                            </span>
                        </div>
                        {/* Terminal body */}
                        <div className="p-4 font-mono text-xs leading-6 space-y-0.5">
                            {terminalLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.06, duration: 0.3 }}
                                    className="flex gap-2"
                                >
                                    <span className={`flex-shrink-0 ${
                                        line.prefix === '$' ? 'text-accent' :
                                        line.prefix === '>' ? 'text-accent/50' :
                                        line.prefix === '●' ? 'text-accent-muted/60' : ''
                                    }`}>
                                        {line.prefix}
                                    </span>
                                    <span className={line.color}>{line.text}</span>
                                </motion.div>
                            ))}
                            {/* Blinking cursor */}
                            <motion.div
                                className="flex gap-2 mt-1"
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    times: [0, 0.49, 0.5, 1],
                                }}
                            >
                                <span className="text-accent">$</span>
                                <span className="w-2 h-4 bg-accent inline-block" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}