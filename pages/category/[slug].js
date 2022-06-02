import groq from 'groq'
import client from '../../client'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Category = ({category, slug}) => {

  const images = category.map(({postImage}) => (
    urlFor(postImage).url()
   ))

  return (
    <>
      <Head>
        <title>PR - {slug}</title>
      </Head>

      <ul className='categ'>
          {category.map(({title, postImage}, index) => (
            <li className='categ-item'>
              <a href={`sub/${encodeURIComponent(title)}`}>
                <img
                  key={index}
                  src={urlFor(postImage).url()}
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