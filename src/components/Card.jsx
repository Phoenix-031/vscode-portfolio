import React from 'react'
// import { useState } from 'react'
import { motion } from 'framer-motion'

const Card = (props) => {

  // const [tags,setTags] = useState("")

  
  return (
    <motion.div className='border-white border-2 rounded-xl max-h-max bg-gray-800 px-3 py-3 text-white text-lg font-urbanist w-4/12 flex flex-col justify-start items-center gap-4'
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
        <motion.img src={props.cardinfo.imgurl} alt="" className=' border-white border-2 transition-all duration-75 ease-in hover:rotate-6 hover:scale-100'
        initial={{opacity: 0.8}}
        whileHover={{
          scale:1.05,
          transition:{duration:0.5}
        }}
        exit={{opacity:1}}
        />
      </div> 
      <div className='text-2xl font-Enriqueta'>
        {props.cardinfo.title}
      </div>
      <p className='flex flex-wrap w-full overflow-hidden text-xl font-varela text-center '>
        {props.cardinfo.description}
      </p>
      <div className='flex gap-2 justify-start items-center w-full flex-wrap text-sm font-semibold'>
        {
          props.cardinfo.tags && props.cardinfo.tags.map((tag,ind) => (
            <p className='border-gray-400 border-2 rounded-2xl py-2 px-3' key={ind}>{tag}</p>
          )
          )
        }
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <p className='border-gray-500 border-2 rounded-xl px-4 py-2 hover:'><a href={props.cardinfo.live}>Live Demo</a></p>
        <p className='border-gray-500 border-2 rounded-xl px-4 py-2 hover:'><a href={props.cardinfo.source}>Source</a></p>
      </div>
    </motion.div>
  )
}

export default Card