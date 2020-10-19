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

        <h1 className={`${styles.title} transition duration-500 ease-in-out py-5 px-10 rounded-lg hover:bg-blue-200 hover:shadow-lg`}>
          Hi there, <span className="text-blue-700">I'm Izzu</span>
        </h1>

        <p className="mt-5 bg-red-500 py-1 px-5 rounded animate-pulse">My site is under development</p>

      </main>

    </div>
  )
}
