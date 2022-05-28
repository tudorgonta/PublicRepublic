import groq from 'groq'
import client from '../../client'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Category = ({category, slug}) => {
  return (
    <>
      <Head>
        <title>PR - {slug}</title>
      </Head>
      <article>
        <ul className='categ'>
          {category.map(({title, postImage}, index) => (
            <li className='categ-item'>
              <a 
                data-fancybox="gallery"
                data-src={urlFor(postImage).url()} 
                data-caption="A Toyota Previa covered in graffiti"
                >
                <img
                  key={index}
                  src={urlFor(postImage).url()}
                  alt={title}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
          <li></li>
        </ul>
      </article>
    </>
  )
}

const query = groq`*[_type == "post" && $slug in categories[]->title]{
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