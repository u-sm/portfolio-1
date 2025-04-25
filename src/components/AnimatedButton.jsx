// src/components/AnimatedButton.jsx
'use client'

import { motion } from 'framer-motion'

export default function AnimatedButton({ children, className, ...props }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`focus:outline-none focus:ring-2 focus:ring-primary-dark ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    )
}
