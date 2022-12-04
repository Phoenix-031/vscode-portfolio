import React from 'react'
import { motion } from 'framer-motion'
const Contactlinks = () => {
  return (
    <div className='w-1/2     flex flex-col justify-start items-center'>
        <p className='w-full py-3 px-4 text-white text-2xl font-Enriqueta'>.socials &#123;</p>
        <div className="flex flex-col justify-start items-baseline gap-2 w-full     px-12">
            <p className='text-2xl font-Enriqueta text-white '>Github: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>Phoenix-031 ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Twitter: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>@__m6lw9r3__  ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Linkedin: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>Debayan pradhan ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Dev: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>Phoenix-031 ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Email: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>pradhandebayan@gmail.com ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Medium: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>Phoenix-031 ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Linktree: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>Phoenix-031 ;</motion.a></p>
            <p className='text-2xl font-Enriqueta text-white '>Instagram: <motion.a onHoverStart={{
              fontSize: 50
            }}
            transition={{
              duration:0.5,
              ease:'easeInOut',
              type:"spring",
              stiffness:200
            }}
             href='https://github.com/Phoenix-031' className='font-poppins text-orange-400 hover:text-orange-300'>__m6lw9r3__ ;</motion.a></p>
            <p className='w-full py-3 px-4 text-white text-2xl font-Enriqueta'>&#125;</p>
        </div>
        <div className="w-full">
            <p className='w-full py-3 px-4 text-white text-2xl font-Enriqueta'>.cp &#123;</p>
            <div className="flex flex-col justify-start items-baseline gap-2 w-full     px-12">
                <p className='text-2xl font-Enriqueta text-white '>Codechef: <a href="/" className='font-poppins text-orange-400 hover:text-orange-300' > Codechef profile ;</a></p>
                <p className='text-2xl font-Enriqueta text-white '>Codeforces: <a href="/" className='font-poppins text-orange-400 hover:text-orange-300'> Codeforces profile ;</a></p>
                <p className='text-2xl font-Enriqueta text-white '>LeetCode: <a href="/" className='font-poppins text-orange-400 hover:text-orange-300'> Leetcode profile ;</a></p>
                <p className='text-2xl font-Enriqueta text-white '>Atcoder: <a href="/" className='font-poppins text-orange-400 hover:text-orange-300' > Atcoder profile ;</a></p>
            </div>
            <p className='w-full py-3 px-4 text-white text-2xl font-Enriqueta'>&#125;</p>
        </div>
    </div>
  )
}

export default Contactlinks