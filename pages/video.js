import groq from 'groq'
import client from '../client'
import Head from "next/head"
import NavBar from "../components/navbar/NavBar"
import SanityMuxPlayer from "sanity-mux-player"

const contact = ({nav, video}) => {
  return (
    <>
      <Head>
        <title>PR - Video Gallery</title>
      </Head>
      <NavBar nav={nav} />
      <div className='w-5/6 flex flex-col items-center flex-wrap md:flex-row m-auto justify-evenly mt-10 mb-5'>
        {video.map(({title, catVideos}, index) => (
          <div className='w-full md:w-1/3 p-4 text-center uppercase font-Roboto' key={index}>
            <h3 className='p-4 text-lg'>{title}</h3>
            <SanityMuxPlayer 
              assetDocument={catVideos.asset}
              autoload={true}
              autoplay={false}
              showControls={true}
              muted={false}
              loop={false}
           />
          </div>
        ))}
      </div>
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
    const video = await client.fetch(groq`*[_type == "videogal"]{
      title,
      catVideos{
        asset->{
          ...
        }
      }
    }`)
  return {
    props: {
        nav,
        video
    }
  }
}
export default contact