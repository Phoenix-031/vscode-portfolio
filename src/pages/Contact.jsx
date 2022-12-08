import {React,useState} from 'react'
import Form from '../components/Form'
import Contactlinks from '../components/Contactlinks'
import  {motion} from 'framer-motion'
import Terminal from '../components/Terminal'

const Contact = () => {

  const [terminal, setTerminal] = useState(true)

  const pagetrans = {
    hidden:{opacity:0},
    visible:{opacity:1}
  }
  // mobile:flex-col
  return (

    <>
    <motion.div className='row-start-2 bg-drk00 w-full flex overflow-auto flex-col md:flex-col xl:flex-row'
    variants={pagetrans}
    initial= "hidden"
    animate = "visible"
    exit="hidden"
    >
      <Contactlinks />
      <Form />
    </motion.div>

      {
        terminal ? <Terminal /> : null
      }
    </>
    
  )
}

export default Contact