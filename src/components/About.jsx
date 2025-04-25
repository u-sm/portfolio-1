// src/components/About.jsx
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-8 sm:px-16 py-20 bg-white text-slateDark dark:bg-slateDark dark:text-slateLight space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-heading text-4xl dark:text-slateLight">About Me</h2>
      <p className="font-body text-lg max-w-2xl leading-relaxed dark:text-slateLight">
        I’m a backend engineer who loves crafting reliable, efficient systems. When I’m not writing
        C# or tuning SQL queries, you’ll find me exploring Linux shells, optimizing workflows, and
        occasionally breaking things just to fix them better.
      </p>
    </motion.section>
  )
}