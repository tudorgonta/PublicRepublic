import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';
import ImageBanner from '../components/ImageBanner';
import TextContainer from '../components/TextContainer';

const Index = ({category}) => {
    return (
      <div>
          {/*<Carousel category={category}/>*/}
          <EmblaCarousel category={category}/>
          <Hr />

          <TextContainer />
          <Hr/>
          <ImageBanner />
      </div>
    )
}

export async function getServerSideProps() {
  const category = await client.fetch(groq`*[_type == 'category' && !defined(parent)][0..5]{
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