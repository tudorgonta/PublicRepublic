import groq from 'groq'
import client from '../client'
import Head from "next/head"
import NavBar from "../components/navbar/NavBar";


const contact = ({nav}) => {

  async function handleOnSubmit(e) {
    e.preventDefault();
  
    const formData = {};
  
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
  
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }

  return (
    <>
      <Head>
        <title>PR - Contact</title>
      </Head>
      <NavBar nav={nav} />
      <div className='w-5/6 m-auto text-center font-Rubik '>
        <div className='mt-10 mb-10 flex flex-col lg:flex-row md:flex-row'>
          
          <div className='w-full md:w-1/2 lg:w-1/2 bg-slate-50 rounded-sm text-left p-7'>
            <div className="mt-5">
            <h1 className='text-4xl text-center font-medium'>Get in touch</h1>
            <h2 className='text-xl text-center mb-5'>Fill in the form to start a conversation</h2>
            
            <div className='flex flex-row mb-2'>
            </div>
            <div className='flex flex-row mb-2'>
              <svg class="w-7 h-7" viewBox="0 0 20 20">
                <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
              </svg>
              <p className='ml-5'>Telephone: +33 6 31 70 02 00</p>
            </div>
            <div className='flex flex-row'>
              <svg className="w-7 h-7" viewBox="0 0 20 20">
                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
              </svg>
              <p className='ml-5'>Email address: nelu80@gmail.com</p>
            </div>
            </div>
          </div>

          <div className='w-full pt-10 md:pt-5 lg:pt-0 md:w-1/3 lg:w-1/3 md:ml-10 text-left'>
            <form className='flex flex-col' onSubmit={handleOnSubmit} method="post">
              <div className='mb-4 flex flex-col'>
                <label htmlFor="name" className='mb-2'>Your name: </label>
                <input type='text' name='name' className="px-3 py-2 border-solid border-2 border-slate-200 rounded-md"
                  placeholder="Joe Bloggs"
                />
              </div>
              
              <div className='mb-4 flex flex-col'>
                <label htmlFor="email" className='mb-2'>Your Email: </label>
                <input type='email' name='email' className="px-3 py-2 border-solid border-2 border-slate-200 rounded-md"
                  placeholder="joe.bloggs@example.com"
                  required
                />
              </div>

              <div className='mb-4 flex flex-col'>
                <label htmlFor="message" className='mb-2'>Message: </label>
                <textarea name='message' className="px-3 py-2 border-solid border-2 border-slate-200 rounded-md"
                  placeholder="Text..."
                />
              </div>
                  
              <input type='submit' className="px-3 py-2 cursor-pointer bg-neutral-500 text-white hover:bg-neutral-700 rounded-md uppercase font-Roboto tracking-wide"/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {

  const nav = await client.fetch(groq`*[_type == 'navigation'][0]{
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
  }`);

  return {
    props: {
        nav
    }
  }
}
export default contact