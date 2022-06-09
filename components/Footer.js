import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-white lg shadow md:px-6 md:py-8 dark:bg-neutral-800">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-5xl font-Romantica whitespace-nowrap dark:text-white">PublicRepublic</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="/video" className="mr-4 hover:underline md:mr-6 ">Video Gallery</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact us</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">PublicRepublic™</a>. All Rights Reserved.
        </span>
    </footer>
  )
}

export default Footer