// src/pages/_app.jsx
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import TransitionContext from '../context/TransitionContext';
import TransitionOverlay from '../components/TransitionOverlay';
import FloatingBlobs from '../components/FloatingBlobs';

function MyApp({ Component, pageProps }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();
    const isBlogRoute = router.pathname.startsWith('/blog');

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
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
            {/* Floating blobs only on non-blog pages */}
            {!isBlogRoute && <FloatingBlobs />}

            <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
                {/* Custom cursor only on non-blog pages */}
                {!isBlogRoute && <CustomCursor />}

                {/* Main navbar only on non-blog pages */}
                {!isBlogRoute && <Navbar />}
                <TransitionOverlay />

                {/* Page content */}
                <Component {...pageProps} />
            </TransitionContext.Provider>
        </ThemeProvider>
    );
}

export default MyApp;
