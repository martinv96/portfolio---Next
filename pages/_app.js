import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Martin Vallée – Développeur Web</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
