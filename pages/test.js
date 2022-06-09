import Head from "next/head"
import React from "react";
import EmblaCarousel from "../components/Car/EmblaCarousel"
import groq from 'groq'
import client from '../client'

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const contact = ({cat}) => {
  return (
    <>
      <Head>
        <title>PR - Test</title>
      </Head>
      <div className='w-5/6'>
      <EmblaCarousel slides={slides} cat={cat} />
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const cat = await client.fetch(groq`*[_type == 'category' && !defined(parent)][0..5]{
    title,
    "catImage": mainImage
  }`)
  return {
    props: {
      cat
    }
  }
}
export default contact