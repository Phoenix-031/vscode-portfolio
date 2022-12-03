import React from 'react'
// import { useState } from 'react'

const Card = (props) => {

  // const [tags,setTags] = useState("")

  
  return (
    <div className='border-white border-2 rounded-xl max-h-max bg-gray-800 px-3 py-3 text-white text-lg font-urbanist w-4/12 flex flex-col justify-start items-center gap-4' >
      <div className='overflow-hidden'>
        <img src={props.cardinfo.imgurl} alt="" className='transition-all duration-75 ease-in hover:rotate-6 hover:scale-100'/>
      </div>
      <div className='text-3xl font-Enriqueta'>
        {props.cardinfo.title}
      </div>
      <p className='flex flex-wrap w-full overflow-hidden text-xl font-varela text-center '>
        {props.cardinfo.description}
      </p>
      <div className='flex gap-2 justify-start items-center w-full flex-wrap'>
        {
          props.cardinfo.tags && props.cardinfo.tags.map((tag,ind) => (
            <p className='border-gray-400 border-2 rounded-xl py-1 px-3' key={ind}>{tag}</p>
          )
          )
        }
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <p className='border-gray-500 border-2 rounded-xl px-4 py-2 hover:'><a href={props.cardinfo.live}>Live Demo</a></p>
        <p className='border-gray-500 border-2 rounded-xl px-4 py-2 hover:'><a href={props.cardinfo.source}>Source</a></p>
      </div>
    </div>
  )
}

export default Card