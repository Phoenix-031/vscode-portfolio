import React from 'react'
import {motion} from 'framer-motion'

const Blogs = () => {
  return (
    <motion.div className='row-start-2 bg-drk00  text-white text-xl font-poppins'
        initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >
      Blogs section
    </motion.div>
  )
}

export default Blogs