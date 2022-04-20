import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';

const Index = ({category}) => {
    return (
      <>
        <h1 className="text-3xl font-bold underline">Welcome to a PublicRepublic!</h1>
          {/*<Carousel category={category}/>*/}
          <EmblaCarousel category={category}/>
      </>
    )
}

export async function getServerSideProps() {
  const category = await client.fetch(groq`*[_type == 'category']{
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