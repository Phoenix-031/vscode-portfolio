import React from 'react'
import  {motion} from 'framer-motion'
import profileimg from '../assets/profile2.jpg'
import Typinganimation from '../components/Typinganimation'

const Home = () => {
  return (
    <motion.div className=' bg-drk00 row-start-2 text-white text-sm md:text-xl font-poppins relative md:overflow-y-auto h-full'
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >

      <div className=' w-full h-full flex xl:flex-2 gap-3 xl:gap-5 justify-center items-center md:px-10 md:flex-col overflow-y-auto xl:flex-row py-5'>
        <div className='xl:w-1/3 h-full flex flex-col justify-center items-center'>

        <span className='font-cursive1 text-xs sm:text-sm sm:top-0 sm:left-0 fixed sm:absolute left-16 top-16 md:hidden xl:visible xl:block'>&lt;html&gt;</span>
        <span className='flex flex-col fixed sm:gap-5  sm:top-10 sm:left-5 sm:absolute top-22 left-20 md:hidden xl:visible xl:block'>
          <span className='font-cursive1 fixed text-xs sm:text-sm pl-5 sm:static top-24'>&lt;head&gt;</span>
          <span className='font-cursive1 fixed text-xs sm:text-sm pl-5 sm:static top-[120px]'>&lt;head/&gt;</span>
        </span>
        <span className='font-cursive1 fixed text-xs sm:text-sm  left-16 top-[140px] sm:top-0 sm:left-0 sm:translate-y-32 sm:absolute md:hidden xl:visible xl:block'>&lt;body&gt;</span>
          
          <motion.div className='rounded-full object-contain overflow-hidden w-60 xl:w-72 h-60 xl:h-72 border-gray-500 border-8 hidden md:block md:visible md:mt-40 xl:mt-0'
          // initial={{translateY:0}}
          animate={{
            translateY:[0, -20, 0],
            boxShadow:['0px 0px 0px rgba(110,110,110,1)','0px 10px 10px -1px rgba(110,110,110,1)', '0px 0px 0px rgba(110,110,110,1)']
          }}
          transition={{
            duration:2,
            ease:"easeInOut",
            repeat: Infinity,
            times:[0,0.5,1],
          }}
          >
            <img src={profileimg} alt="" className=''/>
          </motion.div>
          <div className='fixed left-12 bottom-7 sm:left-0 sm:bottom-0 sm:static'>
            <span className='font-cursive1 text-xs sm:text-sm absolute left-0 bottom-10 sm:bottom-20 md:hidden xl:visible xl:block'>&lt;body/&gt;</span>
            <span className='font-cursive1 absolute bottom-1 sm:bottom-5 text-xs sm:text-sm left-0 md:hidden xl:visible xl:block'>&lt;html/&gt;</span>
          </div>
          
        </div>


        <div className='h-full flex flex-col w-full xl:w-2/3 justify-center items-baseline xl:px-10 gap-4 xl:gap-8'>
          <div>
            <p>Hi There</p>
            <div className='flex gap-3 text-xl lg:text-2xl xl:text-3xl font-Enriqueta text-bold'>I'm  <span className='text-xl sm:text-4xl md:text-2xl lg:text-3xl font-roboto font-extrabold text-green-600 capitalize tracking-normal sm:tracking-wide'><Typinganimation /></span></div>
          </div>

          <div className='md:text-lg'>I'm a Webdeveloper working on fullstack projects and interested in malware analysis, trying to build something valuable for the comminuty and overengineering more or less eveything! </div>

          <div className='flex w-full py-2 px-3 justify-start items-center gap-3'>
            <a href="/"><i className="fa-brands border-white border-2 py-2 px-2 sm:py-4 sm:px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-twitter"></i></a>
            <a href="/"><i className="fa-brands border-white border-2 py-2 px-2 sm:py-4 sm:px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-instagram"></i></a>
            <a href="/"><i className="fa-brands border-white border-2 py-2 px-2 sm:py-4 sm:px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-facebook"></i></a>
            <a href="/"><i className="fa-brands border-white border-2 py-2 px-2 sm:py-4 sm:px-4 rounded-full hover:bg-gray-800 text-yellow-400 fa-medium"></i></a>
          </div>

          <div className='w-full flex gap-2 sm:gap-4 justify-start items-center'>
            <div>
              <button className='border-white border-2 py-2 px-5 xl:py-4 xl:px-10 rounded-xl xl:rounded-3xl font-medium xl:font-semibold font-Enriqueta hover:text-yellow-500'>Resume</button>
              <span></span>
            </div>
            <div>
              <button className='border-white border-2 py-2 px-5 xl:py-4 xl:px-10 rounded-xl xl:rounded-3xl font-medium xl:font-semibold font-Enriqueta hover:text-yellow-500 relative before:absolute before:'>Sponser</button>
              <span></span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Home