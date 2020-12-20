const { default: Head } = require("next/head");
import Link from 'next/link'

export default function About() {

    return (
        <div className="about">
            <Head>
                <title>About | Izzu Zantya Fawwas</title>
            </Head>
            <h1 className="text-4xl font-black">This is about page</h1>
            <Link href="/">
                <a>Home page</a>
            </Link>
        </div>
    )
}