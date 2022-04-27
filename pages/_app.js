import Head from 'next/head'
import '../styles/global.css'
import Navbar from '../components/Navbar'
import Hr from '../components/Hr'
import Footer from '../components/Footer'
import TextContainer from '../components/TextContainer'
import Navig from '../components/Navig'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PublicRepublic</title>
      </Head>
      <div className="max-w-screen-xl m-auto">
        <h1 className="text-6xl font-Monsieur text-center my-20">PublicRepublic</h1>
        <Navbar />
        <Hr />
        <Component {...pageProps} />
        <Hr />
        <TextContainer />
      </div>
      <Footer />
    </>
  )
}

export default MyApp