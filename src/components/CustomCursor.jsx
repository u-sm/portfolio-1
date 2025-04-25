'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    if (!isClient) return null

    return (
        <>
            <style>{`body { cursor: none !important; }`}</style>
            <motion.div
                className="fixed z-[9999] top-0 left-0 w-6 h-6 rounded-full border border-red-500 bg-red-300/50 pointer-events-none mix-blend-difference"
                animate={{ x: position.x - 12, y: position.y - 12 }}
                transition={{ type: 'spring', stiffness: 1100, damping: 60 }}
            />
        </>
    )
}