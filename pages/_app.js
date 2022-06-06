import Head from 'next/head'
import '../styles/global.css'
import Hr from '../components/Hr'
import Footer from '../components/Footer'
import TextContainer from '../components/TextContainer'
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return <>{isLoading ? 
  <div className="flex h-screen">
    <div className="animate-flicker font-Romantica m-auto text-6xl">
      PublicRepublic
  </div> 
  </div>
  : 
  <>
    <Head>
      <title>PublicRepublic</title>
      <link rel="shortcut icon" href="/static/pr.png" />
    </Head> 
      <div className="max-w-screen-xl m-auto">
      <h1 className="text-9xl font-Romantica text-center my-10 opacity-40">PublicRepublic</h1>
      <h2 className='text-1xl text-center uppercase -mt-14 mb-10 font-Bulkey tracking-[0.5em]'>Video &amp; Photograpghy</h2>
      <Component {...pageProps} />
      <Hr />
      <TextContainer />
    </div>
    <Footer />
  </>
  }</>;

}

export default MyApp