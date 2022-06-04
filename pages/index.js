import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';
import ImageBanner from '../components/ImageBanner';
import TextContainer from '../components/TextContainer';
import { Navbar, Dropdown } from 'flowbite-react';

const Index = ({category,nav}) => {

    console.log(nav.sections[0])

    return (
      <div>
        <div className='navigat'>
        <Navbar>
            {nav.sections.map(({sectionTitle, target, links}) => (
              <>
              {links != null ?
                <Dropdown
                  label={sectionTitle}
                  inline={true}
                >
                  {links.map(({subSectionTitle}) => (
                    <Dropdown.Item>
                      <a href="/category/Wedding">{subSectionTitle}</a>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
                : 
                <Navbar.Link className="" href={target}>{sectionTitle}</Navbar.Link>
              }
              </>
            ))}
        </Navbar>
        </div>
        <Hr />
        <TextContainer />
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