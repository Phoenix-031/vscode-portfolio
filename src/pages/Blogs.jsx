import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import Terminal from '../components/Terminal'
import { TabContext } from '../context/TabContext'


const Blogs = () => {

  const {terminal} = useContext(TabContext)


  return (
        <>
    <motion.div className='row-start-2 bg-drk00  text-white text-lg sm:text-xl font-poppins'
    //     initial={{opacity:0}}
    // animate = {{opacity:1}}
    // exit={{opacity:0}}
    >
      Blogs section
    </motion.div>

      {
        terminal ? <Terminal /> : console.log(terminal)
      }
        </>
    
  )
}

export default Blogs