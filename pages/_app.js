import '../styles/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
