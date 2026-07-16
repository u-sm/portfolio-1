import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Ali Khan -- Backend Engineer</title>
        <meta name="description" content="Usman Ali Khan is a backend engineer building reliable, efficient systems -- from real-time satellite control in Rust to full-stack web platforms with TypeScript and C#." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Usman Ali Khan -- Backend Engineer" />
        <meta property="og:description" content="Backend Engineer building reliable, efficient systems. Real-time satellite control, full-stack web platforms, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-1-one-sable.vercel.app" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Usman Ali Khan -- Backend Engineer" />
        <meta name="twitter:description" content="Backend Engineer building reliable, efficient systems." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-slateLight text-slateDark dark:bg-slateDark dark:text-slateLight">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="tech">
          <TechStack />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
