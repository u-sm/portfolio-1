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

    // triggerTransition kept for any component that may still want to call it
    const triggerTransition = (_hash) => {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 650);
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