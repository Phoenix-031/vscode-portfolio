import React from 'react'
import  {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div className=' bg-drk00 row-start-2 text-white text-xl font-poppins'
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >
      Landing page
    </motion.div>
  )
}

export default Home