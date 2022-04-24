import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Head from 'next/head'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    body = []
  } = post
  return (
    <>
      <Head>
        <title>PR - {title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <span>By {name}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => <li key={category}>{category}</li>)}
          </ul>
        )}
        <PortableText
          value={body}
          components={ptComponents}
        />
      </article>
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  body
}`
export async function getServerSideProps(context) {
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post