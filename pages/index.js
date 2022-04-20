import groq from 'groq'
import client from '../client'
import EmblaCarousel from '../components/Carousel/EmblaCarousel';
import Hr from '../components/Hr';

const Index = ({category}) => {
    return (
      <div>
          {/*<Carousel category={category}/>*/}
          <EmblaCarousel category={category}/>
          <Hr />

          <div className='max-w-screen-lg text-center m-auto py-7 px-7 font-Tangerine text-xl flex'>
          <div className='text-4xl font-Monsieur w-1/4'>Lorem Ipsum</div> 
          <div className='w-3/4 py-3'>is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
          <Hr/>
          <div className='pt-12 pb-8'>
          <div className="bg-center bg-no-repeat bg-cover h-[80vh] bg-hero-pattern">
            <main className="w-full flex flex-col h-[80vh] content-center justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
                    <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        Nelu Buza is za bast
                    </div>
                </div>
            </main>
          </div>
          </div>
      </div>
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