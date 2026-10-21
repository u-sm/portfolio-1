import Head from 'next/head';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Record from '../components/Record';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useReveal from '../lib/useReveal';

const title = 'Usman Ali Khan, backend engineer in Kuala Lumpur';
const description =
    'Usman Ali Khan is a backend engineer in Kuala Lumpur: C# and .NET services, real-time Rust and TypeScript, looking for a full-time backend role.';

export default function Home() {
    useReveal();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://portfolio-1-one-sable.vercel.app" />
                <meta property="og:image" content="https://portfolio-1-one-sable.vercel.app/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://portfolio-1-one-sable.vercel.app/og-image.png" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>

            <a className="skip" href="#work">
                Skip to the work
            </a>
            <Hero />
            <main>
                <Work />
                <Record />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
