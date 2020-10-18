import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Izzu Zantya Fawwas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi there, <a href="https://nextjs.org">I'm Izzu</a>
        </h1>
        <p className="description">
          My site is under development
        </p>
      </main>

    </div>
  )
}
