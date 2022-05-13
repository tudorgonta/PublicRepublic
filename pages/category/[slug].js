import groq from 'groq'
import client from '../../client'
import Head from 'next/head'


const Category = ({category, slug}) => {
  return (
    <>
      <Head>
        <title>PR - {slug}</title>
      </Head>
      <article>
      {category.map(({title}, index) => (
        <h1 key={index}>{title}</h1>
      ))}
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