import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PublicRepublic</title>
      </Head>
      <Navbar />
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp