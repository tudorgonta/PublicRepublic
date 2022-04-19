import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = ({category}) => {
    return (
      <>
        <h1>Welcome to a PublicRepublic!</h1>
        {category.length > 0 && category.map(
          ({title = '', catImage}) => (
              <li>
                <Link href="/"><a>{title}</a></Link>
                <img src={urlFor(catImage)
                  .width(500).url()}
                />
              </li>
          )
        )}
      </>
    )
}

export async function getServerSideProps() {
    const category = await client.fetch(groq`*[_type == 'category'][0..2]{
        title,
        "catImage": mainImage
    }`)
    return {
      props: {
        category
      }
    }
}

export default Index