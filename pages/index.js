import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';
import ImageBanner from '../components/ImageBanner';
import TextContainer from '../components/TextContainer';


const Index = ({category,nav}) => {
    console.log(nav.sections)
    return (
      <div>
          {/*<Carousel category={category}/>*/}
          <EmblaCarousel category={category}/>
          <Hr />
          {nav.sections.map(({sectionTitle, links}) => (
            <>
             <h2>-{sectionTitle}</h2>
             {links != null &&
              <div>
              {links.map(({subSectionTitle}) => (
              <h3>--{subSectionTitle}</h3>
              ))}
              </div>
             }
            </>
          ))}
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
  const nav = await client.fetch(groq`*[_type == 'navigation'][0]{
    title,
    sections[]{
      "sectionTitle": title,
      links[]{
        "subSectionTitle": title
      }
    }
}`)
  return {
    props: {
      category,
      nav
    }
  }
}

export default Index