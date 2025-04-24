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
        <title>Usman Ali Khan — Backend Engineer</title>
      </Head>
      <Navbar />
      <main
        className="
          pt-20 
          bg-slateLight text-slateDark 
          dark:bg-slateDark dark:text-slateLight
          scroll-snap-y mandatory overflow-y-scroll h-screen
        "
      >
        <section id="home" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        <section id="projects" className="snap-center">
          <Projects />
        </section>
        <section id="tech" className="snap-center">
          <TechStack />
        </section>
        <section id="contact" className="snap-end">
          <Contact />
        </section>
      </main>
    </>
  )
}
