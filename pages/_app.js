import '../styles/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
import Script from 'next/script'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script src="../plugins/hotjar.js" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
