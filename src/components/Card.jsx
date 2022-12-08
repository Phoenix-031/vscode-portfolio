import React from 'react'
// import { useState } from 'react'
import { motion } from 'framer-motion'

const Card = (props) => {

  // const [tags,setTags] = useState("")

  
  return (
    <motion.div className='border-white border-2 rounded-lg md:rounded-xl max-h-max bg-gray-800 px-1 sm:px-3 py-2 sm:py-3 text-white text-sm md:text-lg font-urbanist w-full md:w-2/3 mobile-l:w-[90%] lg:w-[60%] xl:w-[40%] flex flex-col justify-start items-center gap-4 '
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
        <motion.img src={props.cardinfo.imgurl} alt="" className=' border-white border-1 md:border-2 transition-all duration-75 ease-in hover:rotate-6 hover:scale-100'
        initial={{opacity: 0.8}}
        whileHover={{
          scale:1.05,
          transition:{duration:0.5}
        }}
        exit={{opacity:1}}
        />
      </div> 
      <div className='text-xl xl:text-3xl md:text-2xl font-Enriqueta'>
        {props.cardinfo.title}
      </div>
      <p className='flex flex-wrap w-full overflow-hidden text-lg xl:text-2xl md:text-lg font-varela text-center '>
        {props.cardinfo.description}
      </p>
      <div className='flex gap-1 sm:gap-2 justify-start items-center w-full flex-wrap text-sm xl:text-xl md:text-lg font-semibold'>
        {
          props.cardinfo.tags && props.cardinfo.tags.map((tag,ind) => (
            <p className='border-gray-400 border-2 rounded-lg sm:rounded-2xl py-2 px-3' key={ind}>{tag}</p>
          )
          )
        }
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <p className='border-gray-500 border-2 rounded-lg md:rounded-xl px-4 py-2'><a href={props.cardinfo.live}>Live Demo</a></p>
        <p className='border-gray-500 border-2 rounded-lg md:rounded-xl px-4 py-2'><a href={props.cardinfo.source}>Source</a></p>
      </div>
    </motion.div>
  )
}

export default Card