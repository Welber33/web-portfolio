import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>João Welber Web Portfolio</title>
      </Head>

    
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

     
      <section id="experience" className="snap-center">
        <Experiences />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/** Projects */}

      {/** Contact Me */}
    </div>
  )
}

export default Home
