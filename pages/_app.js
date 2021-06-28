import '../styles/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script>
          {
            // hotjar script
            `(function (h, o, t, j, a, r) {
              h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
              h._hjSettings = { hjid: 2474554, hjsv: 6 };
              a = o.getElementsByTagName('head')[0];
              r = o.createElement('script'); r.async = 1;
              r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
              a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')`
          }
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
