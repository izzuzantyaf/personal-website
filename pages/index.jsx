import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Izzu Zantya Fawwas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Izzu's personal website" />
      </Head>

      <main className="sm:w-10/12 h-screen flex flex-col gap-8 items-center justify-center m-auto px-4">

        <h1 className="transition duration-500 ease-in-out py-5 px-10 rounded-lg hover:bg-blue-200 hover:shadow-lg font-black text-4xl md:text-6xl text-center">
          Hi there, <span className="text-blue-700">I'm Izzu</span>
        </h1>

        <p className="bg-red-500 py-1 px-5 rounded animate-pulse">My site is under development</p>

      </main>

    </div>
  )
}
