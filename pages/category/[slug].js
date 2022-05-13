import groq from 'groq'
import client from '../../client'
import Head from 'next/head'


const Category = ({post}) => {
  const {
    title = 'Missing title'
  } = post
  return (
    <>
      <Head>
        <title>PR - {title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
      </article>
    </>
  )
}

const query = groq`*[_type == "post" && $slug in categories[]->slug.current]{
  title,
  "postImage": mainImage
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
export default Category