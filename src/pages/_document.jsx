import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap"
                    rel="stylesheet"
                />
                <meta name="theme-color" content="#472913" />
            </Head>
            <body>
                {/* Mark the page as scripted before paint, so hidden-until-revealed styles never apply without JS. */}
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
