import client from "../client"
import imageUrlBuilder from '@sanity/image-url'

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
const ListImag = ({imag}) => {

    const img = imag.map((index, key) => (
      key
    ))
    const arr = []
    img.map((index) => ( 
      imag[index].imagesGallery != null && imag[index].imagesGallery.map(({mainImage, publishedAt}) => (
          publishedAt != null && mainImage != null &&
            arr.push({image: mainImage.asset, date: publishedAt})
      ))
    ))
    arr.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    })

    //Lightbox
    const categimg = []

    arr.slice(0,4).map((item) => (
      categimg.push(urlFor(item.image).url())
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
    <div className="flex justify-center mt-8">
      <ul className="flex flex-wrap w-5/6 justify-center">
        {arr.slice(0,4).map((item, index) =>(
          <li className="w-full md:w-1/2 lg:w-[23%] p-2 m-2 border-[3px] border-solid border-gray-200">
            <img
              key={index}
              src={urlFor(item.image).quality(40).url()}
              className="object-cover h-[40vh] w-full cursor-pointer"
              onClick={() => openLightboxOnSlide(index+1)}
              />
          </li>
        ))}
        <li></li>
      </ul>
    </div>
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

export default ListImag