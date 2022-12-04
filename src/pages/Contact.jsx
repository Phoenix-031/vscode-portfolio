import React from 'react'
import Form from '../components/Form'
import Contactlinks from '../components/Contactlinks'
import  {motion,Variants} from 'framer-motion'

const Contact = () => {

  const pagetrans = {
    hidden:{opacity:0},
    visible:{opacity:1}
  }
  
  return (
    <motion.div className='row-start-2 bg-drk00 w-full flex overflow-auto'
    variants={pagetrans}
    initial= "hidden"
    animate = "visible"
    exit="hidden"
    >
      <Contactlinks />
      <Form />
    </motion.div>
  )
}

export default Contact