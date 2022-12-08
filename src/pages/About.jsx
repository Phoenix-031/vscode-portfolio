import React from 'react'
import profileimg from '../assets/profile2.jpg'
import  {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div className='row-start-2 bg-drk00 h-full overflow-auto' 
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration:0.2,
      ease:'easeIn'
    }}
    >
      <div className='w-full flex sm:flex-row flex-col justify-center items-center text-lg sm:text-2xl text-white font-varela font-medium h-40'>
        <h1 className=''>
          <span className='relative block before:block before:absolute before:bottom-10 before:font-Enriqueta before:text-xl sm:before:text-3xl before:right-32 sm:before:right-36 before:content-["<h1>"]  after:block after:absolute after:top-10 after:left-32 sm:after:left-36 after:font-Enriqueta after:text-xl sm:after:text-3xl after:content-["</h1>"]' >About Me</span>
        </h1>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row sm:flex-nowrap gap-2 sm:gap-4 justify-between items-center px-5 py-5 sm:px-10 sm:py-10">
        <div className='rounded-lg sm:rounded-xl overflow-hidden sm:h-96 w-full'>
          <img src={profileimg} alt="" className='object-contain' />
        </div>
        <div className='w-full sm:w-3/5 h-full text-poppins text-white text-lg sm:text-xl'>
          <p>         I'm a computer Science and Engineering student and an aspiring software Engineer. I love to solve or atleast try to come up with a solution to real world problems with the help of Technolodgy, the new technolodgies rolling out everyday keeps me on edge. I'm a keen learner spending most of my time working on projects involving various tech stacks. I love competitve programming it's and i have a particular interest towards malware analysis and design. I love Open Source and have been contributer in various events thereby addying to my learning experiences.

          </p>
          <motion.ul className='flex gap-2 sm:gap-4 justify-start items-center pt-5 flex-wrap'>
            <motion.li className='border-gray-700 py-3 px-4 sm px-4:sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
            initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.1,
              type:"spring",
              stiffness:100
            }}
            >Competitve Programming</motion.li>
            <motion.li className='border-gray-700 py-3 px-4 sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.1,
              type:"spring",
              stiffness:100
            }}
            >FullStack(Backend Heavy)</motion.li>
            <motion.li className='border-gray-700 py-3 px-4 sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.2,
              type:"spring",
              stiffness:100
            }}
            >Open source</motion.li>
            <motion.li className='border-gray-700 py-3 px-4 sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.3,
              type:"spring",
              stiffness:100
            }}
            >Malware analysis</motion.li>
            <motion.li className='border-gray-700 py-3 px-8 border-2 rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.4,
              type:"spring",
              stiffness:100
            }}
            >Devops</motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About