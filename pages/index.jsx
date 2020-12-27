import Head from 'next/head'
import Hero from '../components/home/hero'
import Projects from '../components/home/projects'
import LearningFootprints from '../components/home/learning-footsteps'
import Certificates from '../components/home/certificates'
import Footer from '../components/footer/footer'

export default function Home() {

  return (
    <div className="home">
      <Head>
        <title>Izzu Zantya Fawwas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Izzu's personal website" />
      </Head>

      <Hero />
      <Projects />
      <LearningFootprints />
      <Certificates />
      <Footer />

    </div>
  )
}
