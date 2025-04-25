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
                    key="overlay"
                    className="fixed inset-0 bg-primary z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </AnimatePresence>
    );
}