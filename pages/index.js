import Link from 'next/link'
import groq from 'groq'
import client from '../client'

const Index = ({posts}) => {
    return (
      <>
        <h1>Welcome to a PublicRepublic!</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      </>
    )
}

export async function getServerSideProps() {
    const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Index