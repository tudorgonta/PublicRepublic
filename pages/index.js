import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';
import ImageBanner from '../components/ImageBanner';
import TextContainer from '../components/TextContainer';
import Navbar from '../components/navbar/NavBar';

const Index = ({category,nav}) => {
    return (
      <div>
        <Navbar nav={nav}/>
        <Hr />
        {/*<Carousel category={category}/>*/}
        <EmblaCarousel category={category}/>
        <TextContainer />
        <Hr/>
        <ImageBanner />
      </div>
    )
}

export async function getServerSideProps() {

  const [nav, category] = await Promise.all([
    client.fetch(groq`*[_type == 'navigation'][0]{
      title,
      sections[]{
        "sectionTitle": title,
        target,
        links[]{
          "subSectionTitle": title
        }
      }
    }`), 
    client.fetch(groq`*[_type == 'category' && !defined(parent)][0..5]{
      title,
      "catImage": mainImage
    }`)
  ]);
  return {
    props: {
      nav,
      category
    }
  }
}

export default Index