import client from "../client"
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
const ListImag = ({imag}) => {
    const img = imag.map((index, key) => (
      key
    ))
    const imgar = img.map((index) => ( 
      imag[index].imagesGallery.map(({mainImage, publishedAt}, index) => (
        mainImage,
        publishedAt
      ))
    ))
    console.log(imgar)
  return (
    <>
     <ul className='categ'>
      {img.map((index) => (
        <>
        {imag[index].imagesGallery != null ? (
          <>
          {imag[index].imagesGallery.map(({mainImage}, index) => (
            <>
            {mainImage != null && 
              <li className='categ-item'>
                  <img
                    key={index}
                    src={urlFor(mainImage.asset).quality(40).url()}
                  />
              </li>
            }
            </>
          ))}
          </>
        )
          : (<></>)
        }
        </>
        ))}
          <li></li>
        </ul>
    </>
  )
}

export default ListImag