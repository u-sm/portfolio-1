// src/components/FloatingBlobs.jsx
'use client';

import { motion } from 'framer-motion';

export default function FloatingBlobs() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
        >
            {/* Blob 1 - indigo */}
            <motion.div
                className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-tr from-indigo-400 to-violet-400 opacity-10 dark:opacity-15 rounded-full filter blur-3xl"
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, 40, -40, 0],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Blob 2 - violet/indigo */}
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-400 to-indigo-500 opacity-8 dark:opacity-12 rounded-full filter blur-3xl"
                animate={{
                    x: [0, -80, 40, 0],
                    y: [0, -60, 30, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Blob 3 - blue/indigo */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-l from-blue-400 to-indigo-400 opacity-7 dark:opacity-10 rounded-full filter blur-3xl"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -40, 40, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}
