import React from 'react'
// import { useState } from 'react'
import { motion } from 'framer-motion'

const Card = (props) => {

  // const [tags,setTags] = useState("")

  
  return (
    <motion.div className='border-white border-2 rounded-lg sm:rounded-xl max-h-max bg-gray-800 px-1 sm:px-3 py-2 sm:py-3 text-white text-sm sm:text-lg font-urbanist w-full sm:w-4/12 flex flex-col justify-start items-center gap-4 sm:min-w-[250px]'
    initial={{opacity:0,
      translateX: props.cardno % 2 ===0 ? -150 : 150
    }}
     whileInView={{
      opacity:1,
      translateX:0
     }}
     transition={{
      delay:props.cardno * 0.2,
      ease:'easeIn',
      duration:0.6,
      type:'spring',
      stiffness:100
     }}
     >
      <div className='overflow-hidden h-52 rounded-lg w-full'>
        <motion.img src={props.cardinfo.imgurl} alt="" className=' border-white border-1 sm:border-2 transition-all duration-75 ease-in hover:rotate-6 hover:scale-100'
        initial={{opacity: 0.8}}
        whileHover={{
          scale:1.05,
          transition:{duration:0.5}
        }}
        exit={{opacity:1}}
        />
      </div> 
      <div className='text-xl sm:text-3xl font-Enriqueta'>
        {props.cardinfo.title}
      </div>
      <p className='flex flex-wrap w-full overflow-hidden text-lg sm:text-2xl font-varela text-center '>
        {props.cardinfo.description}
      </p>
      <div className='flex gap-1 sm:gap-2 justify-start items-center w-full flex-wrap text-sm sm:text-xl font-semibold'>
        {
          props.cardinfo.tags && props.cardinfo.tags.map((tag,ind) => (
            <p className='border-gray-400 border-2 rounded-lg sm:rounded-2xl py-2 px-3' key={ind}>{tag}</p>
          )
          )
        }
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <p className='border-gray-500 border-2 rounded-lg sm:rounded-xl px-4 py-2'><a href={props.cardinfo.live}>Live Demo</a></p>
        <p className='border-gray-500 border-2 rounded-lg sm:rounded-xl px-4 py-2'><a href={props.cardinfo.source}>Source</a></p>
      </div>
    </motion.div>
  )
}

export default Card