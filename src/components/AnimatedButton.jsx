// src/components/AnimatedButton.jsx
'use client'

import { motion } from 'framer-motion'

/**
 * Polymorphic animated button.
 * @param {string} as - HTML element to render ('a', 'button', etc.)
 */
export default function AnimatedButton({ as = 'a', children, className, ...props }) {
    // Strip the `as` prop before spreading onto DOM element
    const MotionComponent = motion[as] || motion.a

    return (
        <MotionComponent
            data-cursor="pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
            {...props}
        >
            {children}
        </MotionComponent>
    )
}
