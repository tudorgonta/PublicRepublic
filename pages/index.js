import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';
import ImageBanner from '../components/ImageBanner';
import TextContainer from '../components/TextContainer';
import NavBar from '../components/navbar/NavBar';
import ListImag from '../components/ListImag';

const Index = ({category,nav,banner,imag}) => {
  console.log(nav)
    return (
      <div>
        <div className="max-w-screen-xl m-auto">
          <NavBar nav={nav}/>
          {/*<Carousel category={category}/>*/}
          <EmblaCarousel category={category}/>
        </div>
        <Hr/>
        <TextContainer/>
        <Hr/>
        <ListImag imag={imag} />
        <Hr/>
        <ImageBanner banner={banner}/>
      </div>
    )
}

export async function getServerSideProps() {

  const [nav, category, banner, imag, test] = await Promise.all([
    client.fetch(groq`*[_type == 'navigation'][0]{
      title,
      sections[]{
        title,
        target,
        links[]{
          title,
          target,
          links[]{
            title,
            target,
          },
        },
      }
    }`), 
    client.fetch(groq`*[_type == 'category' && !defined(parent)][0..5]{
      title,
      "catImage": mainImage
    }`),
    client.fetch(groq`*[_type == 'banner'][0]{
      desc,
      mainImage
    }`),
    client.fetch(groq`*[_type == 'category' && defined(parent)]{
      imagesGallery[] {
        mainImage {
          asset,
        },
        publishedAt
      }
    }`),
  ]);
  return {
    props: {
      nav,
      category,
      banner,
      imag
    }
  }
}

export default Index