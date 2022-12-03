import React from 'react'
import Form from '../components/Form'
import Contactlinks from '../components/Contactlinks'
import  {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div className='row-start-2 bg-drk00 w-full flex '
        initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >
      <Contactlinks />
      <Form />
    </motion.div>
  )
}

export default Contact