import React from 'react'
import  {motion} from 'framer-motion'
import profileimg from '../assets/profile2.jpg'
import Typinganimation from '../components/Typinganimation'

const Home = () => {
  return (
    <motion.div className=' bg-drk00 row-start-2 text-white text-xl font-poppins'
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >
      <div className=' w-full h-full flex flex-2 gap-5 justify-center items-center px-10'>
        <div className='w-1/3 h-full flex justify-center items-center'>
          <motion.div className='rounded-full object-contain overflow-hidden w-72 h-72 border-gray-500 border-8'
          // initial={{translateY:0}}
          animate={{
            translateY:[0, -20, 0],
            boxShadow:['0px 0px 0px rgba(110,110,110,1)','0px 10px 10px -1px rgba(110,110,110,1)', '0px 0px 0px rgba(110,110,110,1)']
            // boxShadow:"0px 7px 20px -1px rgba(110,110,110,1)"
          }}
          transition={{
            duration:2,
            ease:"easeInOut",
            repeat: Infinity,
            times:[0,0.5,1],
          }}
          // end={{translateY:-100}}
          >
            <img src={profileimg} alt="" className=''/>
          </motion.div>
        </div>


        <div className='h-full flex flex-col w-2/3 justify-center items-baseline px-10 gap-6'>
          <div>
            <p>Hi There</p>
            <div className='flex gap-3 text-3xl font-Enriqueta text-bold'>I'm  <span><Typinganimation /></span></div>
          </div>

          <div>I'm a Webdeveloper working on fullstack projects and interested in malware analysis, trying to build something valuable for the comminuty and overengineering more or less eveything! </div>

          <div className='flex w-full py-2 px-3 justify-start items-center gap-3'>
            <a href=""><i className="fa-brands border-white border-2 py-4 px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-twitter"></i></a>
            <a href=""><i className="fa-brands border-white border-2 py-4 px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-instagram"></i></a>
            <a href=""><i className="fa-brands border-white border-2 py-4 px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-facebook"></i></a>
            <a href=""><i className="fa-brands border-white border-2 py-4 px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-medium"></i></a>
          </div>

          <div className='w-full flex gap-4 justify-start items-center'>
            <div>
              <button className='border-white border-2 py-4 px-10 rounded-3xl font-semibold font-Enriqueta hover:text-yellow-500'>Resume</button>
              <span></span>
            </div>
            <div>
              <button className='border-white border-2 py-4 px-10 rounded-3xl font-semibold font-Enriqueta hover:text-yellow-500 relative before:absolute before:'>Sponser</button>
              <span></span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Home