import groq from 'groq'
import client from '../../../client'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Category = ({category, slug}) => {

  const images = category.map(({postImage}) => (
    urlFor(postImage).url()
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

      <ul className='categ'>
          {category.map(({title, postImage}, index) => (
            <li className='categ-item'>
                <img
                  key={index}
                  src={urlFor(postImage).url()}
                  alt={title}
                  onClick={() => openLightboxOnSlide(index+1)}
                />
            </li>
            
          ))}
          <li></li>
        </ul>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
        types={
          [
            ...new Array(images.length).fill('image')
          ]
        }
        key={lightboxController.key}
      />
    </>
  )
}

const query = groq`*[_type == "post" && $slug == category->title || $slug == category->parent->title]{
  title,
  "postImage": mainImage
}`
export async function getServerSideProps(context) {
  const { slug = "" } = context.params
  const category = await client.fetch(query, { slug })
  return {
    props: {
        category,
        slug
    }
  }
}
export default Category