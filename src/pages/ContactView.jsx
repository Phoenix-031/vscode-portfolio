import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import Terminal from '../components/Terminal'
import { TabContext } from '../context/TabContext'
import Contactcard from '../components/Admindashboard/Contactcard'


const ContactView = () => {

    const {terminal} = useContext(TabContext)
    
  return (
    <>
    <motion.div className='row-start-2 bg-drk00  text-white text-lg sm:text-xl font-poppins'
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >
      <Contactcard />
      asiolkrjfg
    </motion.div>

      {
        terminal ? <Terminal /> : null
      }
    </>
  )
}

export default ContactView