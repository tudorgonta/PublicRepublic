import React from 'react'

const TextContainer = () => {
  return (
    <div className='max-w-screen-lg text-center m-auto py-7 px-7 font-Tangerine text-xl flex'>
        <div className='text-4xl font-Monsieur w-1/4'>
            Lorem Ipsum
        </div> 
        <div className='w-3/4 py-3'>
            is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>
  )
}

export default TextContainer