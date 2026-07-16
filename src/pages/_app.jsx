// src/pages/_app.jsx
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '../components/CustomCursor';
import { useState } from 'react';
import TransitionContext from '../context/TransitionContext';
import TransitionOverlay from '../components/TransitionOverlay';
import FloatingBlobs from '../components/FloatingBlobs';

function MyApp({ Component, pageProps }) {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const triggerTransition = (hash) => {
        setIsTransitioning(true);
        setTimeout(() => {
            window.location.hash = hash;
        }, 300);
        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
    };

    return (
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
            <FloatingBlobs />
            <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
                <CustomCursor />
                <TransitionOverlay />
                <Component {...pageProps} />
            </TransitionContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;