import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

const ImageBanner = ({banner}) => {
  const path = urlFor(banner.mainImage).quality(70).url()
  return (
    <div className='w-full pt-12 pb-8'>
        <div className="bg-center bg-no-repeat bg-cover h-[80vh]" style={{backgroundImage: `url(${path})`}}>
            <main className="w-full flex flex-col h-[80vh] content-center justify-center" >
                <div className="w-full sm:w-1/2 lg:w-1/2 m-auto">
                    <div className="text-white text-[5.2rem] font-Dancing text-center p-1 rounded">
                        {banner.desc}
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default ImageBanner