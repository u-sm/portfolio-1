// src/components/TransitionOverlay.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import TransitionContext from '../context/TransitionContext';

export default function TransitionOverlay() {
    const { isTransitioning } = useContext(TransitionContext);

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    key="progress-bar"
                    className="fixed top-0 left-0 h-0.5 z-[9998] pointer-events-none"
                    style={{
                        background: 'linear-gradient(to right, #007A64, #00C9A7, #A8FF78)',
                    }}
                    initial={{ scaleX: 0, opacity: 1, transformOrigin: 'left' }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            )}
        </AnimatePresence>
    );
}