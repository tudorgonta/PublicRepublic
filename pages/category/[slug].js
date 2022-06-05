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
              <a href={`sub/${encodeURIComponent(title)}`}>
                <img
                  key={index}
                  src={urlFor(postImage).quality(40).url()}
                  alt={title}
                  onClick={() => openLightboxOnSlide(index+1)}
                />
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
        "sectionTitle": title,
        target,
        links[]{
          "subSectionTitle": title,
          "subtarget": subtarget,
        }
      }
    }`);

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