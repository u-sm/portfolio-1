'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer2, Pointer } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const cursorX = useSpring(mouseX, { stiffness: 1200, damping: 80 });
    const cursorY = useSpring(mouseY, { stiffness: 1200, damping: 80 });

    const [cursorVariant, setCursorVariant] = useState('default');
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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

    if (!mounted || !resolvedTheme) return null;

    const Icon = cursorVariant === 'pointer' ? Pointer : MousePointer2;
    const iconSize = cursorVariant === 'pointer' ? 24 : 16;

    // Cyber Teal brand-aligned cursor colors
    const iconColor =
        cursorVariant === 'pointer'
            ? isDark
                ? '#00C9A7'   // bright teal in dark mode
                : '#007A64'   // dark teal in light mode
            : isDark
                ? '#e8f5f2'   // near-white in dark mode
                : '#0a1a17';  // near-black in light mode

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
                    translateY: cursorY,
                }}
                animate={{
                    scale: cursorVariant === 'pointer' ? 1.1 : 1,
                    opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 600, damping: 40 }}
            >
                <Icon size={iconSize} color={iconColor} strokeWidth={2} />
            </motion.div>
        </>
    );
}
