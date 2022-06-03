import client from '../client'
import groq from 'groq'

const NavigationTree = () => {
    const nav = client.fetch(groq`*[_id == 'frontPage'][0] {
     title,
     sections[]{
       ...,
       target->{title, slug, _id},
       links[]{
         ...,
         target->{title, slug, _id},
         children[]{
           ...,
           target->{title, slug, _id}
         }
       }
     }
   }`)
   const navig  = nav.map(({title}) => {
       {title}
   })
    return (
        <>
        {navig}
        </>
    )
  }
    
export default NavigationTree