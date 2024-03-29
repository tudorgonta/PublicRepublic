import groq from 'groq'
import client from '../../client'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'

import NavBar from '../../components/navbar/NavBar';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Category = ({category, slug, nav}) => {

  const images = category.map(({postImage}) => (
    urlFor(postImage).url()
   ))

  return (
    <>
      <Head>
        <title>PR - {slug}</title>
      </Head>
      <NavBar nav={nav}/>
      <ul className='categ'>
          {category.map(({title, postImage}, index) => (
            <li className='categ-item'>
              <img
                key={index}
                src={urlFor(postImage).quality(40).url()}
                alt={title}
              />
              <a href={`sub/${encodeURIComponent(title)}`} className="flex h-full w-full align-middle aspect-square absolute top-0 left-0 bg-zinc-400/[0.2] opacity-60 z-10 transition-opacity duration-300 hover:opacity-80 hover:bg-black/[0.6]">
                <h3 className="text-white text-xl m-auto uppercase font-Roboto">
                    {title}
                </h3>
              </a>
            </li>
            
          ))}
          <li></li>
        </ul>
    </>
  )
}



const query = groq`*[_type == "category" && parent->title == $slug]{
  title,
  "postImage": mainImage
}`
export async function getServerSideProps(context) {

  const nav = await client.fetch(groq`*[_type == 'navigation'][0]{
    title,
    sections[]{
      title,
      target,
      links[]{
        title,
        target,
        links[]{
          title,
          target,
        },
      },
    }
  }`)

  const { slug = "" } = context.params
  const category = await client.fetch(query, { slug })
  return {
    props: {
        category,
        slug,
        nav
    }
  }
}
export default Category