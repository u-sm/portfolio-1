// src/components/FloatingBlobs.jsx
'use client';

import { motion } from 'framer-motion';

export default function FloatingBlobs() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Blob 1 */}
            <motion.div
                className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-tr from-pink-400 to-purple-400 opacity-25 rounded-full filter blur-3xl"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, -50, 0],
                    rotate: [0, 45, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Blob 2 */}
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 opacity-20 rounded-full filter blur-3xl"
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, -80, 40, 0],
                    rotate: [0, -30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Blob 3 */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-l from-blue-300 to-teal-300 opacity-15 rounded-full filter blur-3xl"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    rotate: [0, 60, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}
