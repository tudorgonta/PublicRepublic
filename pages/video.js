import groq from 'groq'
import client from '../client'
import Head from "next/head"
import NavBar from "../components/navbar/NavBar"
import SanityMuxPlayer from "sanity-mux-player"


const contact = ({nav, video}) => {
  return (
    <>
      <Head>
        <title>PR - Contact Us</title>
      </Head>
      <NavBar nav={nav} />
        <SanityMuxPlayer 
            assetDocument={video}
            autoload={true}
            autoplay={false}
            showControls={true}
            muted={false}
            loop={false}
        />
    </>
  )
}
export async function getServerSideProps() {

  const nav = await client.fetch(groq`*[_type == 'navigation'][0]{
      title,
      sections[]{
        "sectionTitle": title,
        target,
        links[]{
          "subSectionTitle": title,
          "subtarget": subtarget,
        }
      }
    }`);
    const video = await client.fetch(groq`*[_type == "mux.videoAsset"][0]`)
  return {
    props: {
        nav,
        video
    }
  }
}
export default contact