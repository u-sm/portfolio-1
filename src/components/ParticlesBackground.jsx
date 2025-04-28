// src/components/ParticlesBackground.jsx
'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        // Load the slim version of tsparticles for basic shapes and performance
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'repulse' },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                particles: {
                    number: { value: 40, density: { enable: true, area: 800 } },
                    color: { value: '#FF6B6B' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5 },
                    size: { value: { min: 1, max: 3 } },
                    links: {
                        enable: true,
                        distance: 120,
                        color: '#FF6B6B',
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        outModes: { default: 'out' },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 w-full h-full"
        />
    );
}
