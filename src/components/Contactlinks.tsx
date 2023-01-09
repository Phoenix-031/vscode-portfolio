import {FC } from 'react'
import { motion } from 'framer-motion'
const Contactlinks : FC = () => {

  // const listVariant = {
  //   init:{opacity:0,translateX:-100},
  
  // }

  
  return (
    <motion.div className='sm:w-1/2  flex flex-col justify-start items-center w-full md:w-full'
            initial={{opacity:0,translateX:-50}}
        animate={{opacity:1,translateX:0}}
        transition={{
          staggerChildren:0.2,
          ease:'easeIn',
          delay:0.1
        }}
    >
        <p className='w-full py-3 sm:px-4 px-2 text-white text-lg sm:text-2xl md:text-xl font-Enriqueta '>.socials &#123;</p>
        <motion.div className="flex flex-col justify-start items-baseline gap-2 w-full sm:px-12 px-5"
        >
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Github: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.1,
              ease:'easeInOut',
              duration:0.3
            }}
            >Phoenix-031 ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Twitter: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.2,
              ease:'easeInOut',
              duration:0.3
            }}
            >@__m6lw9r3__  ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Linkedin: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.3,
              ease:'easeInOut',
              duration:0.3
            }}
            >Debayan pradhan ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Dev: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.4,
              ease:'easeInOut',
              duration:0.3
            }}
            >Phoenix-031 ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Email: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.5,
              ease:'easeInOut',
              duration:0.3
            }}
            >pradhandebayan@gmail.com ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Medium: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.6,
              ease:'easeInOut',
              duration:0.3
            }}
            >Phoenix-031 ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Linktree: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.1,
              ease:'easeInOut',
              duration:0.3
            }}
            >Phoenix-031 ;</motion.a></p>
            <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Instagram: <motion.a href='https://github.com/Phoenix-031' className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400 '
            initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.7,
              ease:'easeInOut',
              duration:0.3
            }}
            >__m6lw9r3__ ;</motion.a></p>
            <p className='w-full py-3 px-4 text-white text-lg sm:text-2xl md:text-xl  font-Enriqueta'>&#125;</p>
        </motion.div>
        <div className="w-full">
            <p className='w-full py-3 sm:px-4 px-2 text-white text-lg sm:text-2xl md:text-xl  font-Enriqueta'>.cp &#123;</p>
            <div className="flex flex-col justify-start items-baseline sm:gap-2 w-full sm:px-12 px-5">
                <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Codechef: <motion.a href="/" className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400'              initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.8,
              ease:'easeInOut',
              duration:0.3
            }}
                 > Codechef profile ;</motion.a></p>
                <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Codeforces: <motion.a href="/" className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400'              initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:0.9,
              ease:'easeInOut',
              duration:0.3
            }}
                > Codeforces profile ;</motion.a></p>
                <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>LeetCode: <motion.a href="/" className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400'              initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:1,
              ease:'easeInOut',
              duration:0.3
            }}
                > Leetcode profile ;</motion.a></p>
                <p className='text-lg sm:text-2xl md:text-xl  font-Enriqueta text-white '>Atcoder: <motion.a href="/" className='font-poppins text-transparent bg-clip-text bg-bcol05 hover:text-orange-400'              initial={{opacity:0,translateY:-200}}
            animate={{opacity:1,translateY:0}}
            transition={{
              delay:1.1,
              ease:'easeInOut',
              duration:0.3
            }}
                 > Atcoder profile ;</motion.a></p>
            </div>
            <p className='w-full py-3 px-4 text-white text-lg sm:text-2xl md:text-xl  font-Enriqueta'>&#125;</p>
        </div>
    </motion.div>
  )
}

export default Contactlinks