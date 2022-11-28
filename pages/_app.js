import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps}) {
  return (
    // Forces a login page in next.js
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
  )
  
}

export default MyApp
