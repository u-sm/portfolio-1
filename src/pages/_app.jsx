// src/pages/_app.jsx
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import TransitionContext from '../context/TransitionContext';
import TransitionOverlay from '../components/TransitionOverlay';
import FloatingBlobs from '../components/FloatingBlobs';

function MyApp({ Component, pageProps }) {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const triggerTransition = (hash) => {
        setIsTransitioning(true);
        // fade-in overlay
        setTimeout(() => {
            window.location.hash = hash;
        }, 300);
        // fade-out overlay
        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
    };

    return (
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
            <FloatingBlobs />
            <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
                {/*<CustomCursor />*/}
                <Navbar />
                <TransitionOverlay />
                <Component {...pageProps} />
            </TransitionContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;