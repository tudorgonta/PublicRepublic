import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';
import ImageBanner from '../components/ImageBanner';
import TextContainer from '../components/TextContainer';
import Link from 'next/link';


const Index = ({category,nav}) => {

    console.log(nav.sections[0])

    return (
      <div>
        <nav className="">
          <ul className="flex flex-row justify-center font-Roboto uppercase">
            {nav.sections.map(({sectionTitle, target, links}) => (
              <>
              {links != null ?
                <div>
                <a href={target}>-{sectionTitle}</a>
                {links.map(({subSectionTitle}) => (
                <a>--{subSectionTitle}</a>
                ))}
                </div>
                : 
                <li className="mr-4 hover:underline"><a href={target}>-{sectionTitle}</a></li>
              }
              </>
            ))}
          </ul>
        </nav>
        <nav aria-label="primary" class="z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-center md:flex-row">
      <div class="relative group">
        <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>First Dropdown</span>
        </button>
        <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div class="px-2 pt-2 pb-4 bg-gray-200 shadow-lg">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>dropdown content here</p>
            </div>
          </div>
        </div>
      </div>
      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </nav>
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