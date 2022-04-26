import React from 'react'

const ImageBanner = () => {
  return (
    <div className='pt-12 pb-8'>
        <div className="bg-center bg-no-repeat bg-cover h-[80vh] bg-hero-pattern">
            <main className="w-full flex flex-col h-[80vh] content-center justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/3  rounded-xl m-auto">
                    <div className="text-white text-center">
                        Nelu Buza is za bast
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default ImageBanner