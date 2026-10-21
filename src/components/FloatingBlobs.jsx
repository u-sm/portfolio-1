// src/components/FloatingBlobs.jsx
'use client';

import { motion } from 'framer-motion';

export default function FloatingBlobs() {
    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
        >
            {/* Blob 1 - teal */}
            <motion.div
                className="absolute top-10 left-10 w-80 h-80 rounded-full filter blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0,201,167,0.18) 0%, rgba(0,122,100,0.08) 70%, transparent 100%)',
                }}
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, 40, -40, 0],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Blob 2 - lime-teal */}
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 rounded-full filter blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(168,255,120,0.10) 0%, rgba(0,201,167,0.08) 60%, transparent 100%)',
                }}
                animate={{
                    x: [0, -80, 40, 0],
                    y: [0, -60, 30, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Blob 3 - deep teal */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full filter blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0,122,100,0.12) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -40, 40, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
}
