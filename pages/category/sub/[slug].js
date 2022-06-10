import groq from 'groq'
import client from '../../../client'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

import NavBar from '../../../components/navbar/NavBar';


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Category = ({slug, nav, img}) => {

  const categimg = img.imagesGallery != null && img.imagesGallery.map(({mainImage})=> (
    urlFor(mainImage.asset).url()
  ))
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
    });
    
  function openLightboxOnSlide(number) {
    setLightboxController({
    toggler: !lightboxController.toggler,
    slide: number
    });
  }
  
  return (
    <>
      <Head>
        <title>PR - {slug}</title>
      </Head>
      <NavBar nav={nav} />
      
      <ul className='categ'>
        {img.imagesGallery != null ? (
          <>
          {img.imagesGallery.map(({mainImage}, index) => (
            <li className='categ-item'>
                <img
                  key={index}
                  src={urlFor(mainImage.asset).quality(40).url()}
                  onClick={() => openLightboxOnSlide(index+1)}
                />
            </li>
          ))}
          </>
        )
          : (<></>)
        }
          <li></li>
        </ul>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={categimg}
        slide={lightboxController.slide}
        types={
          [
            ...new Array(categimg.length).fill('image')
          ]
        }
        key={lightboxController.key}
      />
      
    </>
  )
}

export async function getServerSideProps(context) {
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
  const { slug = "" } = context.params
  const img = await client.fetch(groq`*[_type == 'category' && $slug == title][0]{
    imagesGallery[] {
      mainImage {
        asset
      }
    }
  }`, {slug})
  return {
    props: {
        slug,
        nav,
        img
    }
  }
}
export default Category