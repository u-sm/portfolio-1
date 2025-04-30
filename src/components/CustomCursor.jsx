'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2, Pointer } from 'lucide-react';

export default function CustomCursor() {
    // raw coords
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // snappy springs
    const cursorX = useSpring(mouseX, { stiffness: 1200, damping: 80 });
    const cursorY = useSpring(mouseY, { stiffness: 1200, damping: 80 });

    // which icon to show
    const [cursorVariant, setCursorVariant] = useState('default');

    useEffect(() => {
        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const el = e.target.closest('[data-cursor]');
            setCursorVariant(el ? el.getAttribute('data-cursor') : 'default');
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    // pick icon based on variant
    const Icon =
        cursorVariant === 'pointer'
            ? Pointer
            : MousePointer2;

    const iconSize = cursorVariant === 'pointer' ? 24 : 16;
    const iconColor = cursorVariant === 'pointer' ? '#1C1311' : '#080505';

    return (
        <>
            <style>{`
        @media (min-width: 768px) {
         body,
         a,
         button,
         [data-cursor] {
           cursor: none !important;
         }
       }
      `}</style>

            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    translateX: cursorX,
                    translateY: cursorY
                }}
                animate={{
                    scale: cursorVariant === 'pointer' ? 1.1 : 1,
                    opacity: 1
                }}
                transition={{ type: 'spring', stiffness: 600, damping: 40 }}
            >
                <Icon size={iconSize} color={iconColor} strokeWidth={2} />
            </motion.div>
        </>
    );
}
