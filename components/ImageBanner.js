import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

const ImageBanner = ({banner}) => {
  const path = urlFor(banner.mainImage).quality(70).url()
  console.log(path)
  return (
    <div className='pt-12 pb-8'>
        <div className="bg-center bg-no-repeat bg-cover h-[80vh]" style={{backgroundImage: `url(${path})`}}>
            <main className="w-full flex flex-col h-[80vh] content-center justify-center" >
                <div className="w-full sm:w-1/2 lg:w-1/3 m-auto">
                    <div className="text-white text-7xl font-Romantica text-center p-4 rounded">
                        {banner.desc}
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default ImageBanner