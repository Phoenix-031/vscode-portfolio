import React from 'react'
import Github from '../icons/Github'
import { motion } from 'framer-motion'

const Githubcard = (props) => {
  return (
    <motion.div className='bg-drk01 pt-5 pb-5 rounded-lg sm:pr-10 sm:pl-5 pr-2 pl-2 flex justify-start flex-wrap flex-col gap-1 lg:gap-3 xl:w-[calc(100%/3)] md:w-3/4 lg:w-2/3 w-full items-center hover:shadow-xl h-[230px]' 
    initial={{opacity: 0,translateY:-100}}
    whileInView = {{
      opacity:1,
      translateY:0
    }}
    transition = {{
      duration:0.5,
      delay:props.cardno % 2 === 0 ? props.cardno * 0.009 : 0,
      ease:'easeInOut'
    }}
    >
        <div className='font-Enriqueta sm:text-xl text-orange-500 text-lg'>{props.gitinfo.full_name}</div>
        <div className='text-sm sm:text-lg font-poppins text-white font-normal flex flex-wrap sm:w-56 overflow-y-hidden text-ellipsis break-words leading-4 sm:leading-8 max-h-16 '>{props.gitinfo.description}</div>
        <div className='flex flex-wrap justify-between items-center sm:gap-2 sm:text-lg gap-1 text-xs w-100'>
            <p className='border-white rounded-lg py-1 sm:rounded-xl sm:py-1 sm:px-4 px-2 border-1 text-white ' >{props.gitinfo.watchers_count} Views</p>
            <p className='border-white rounded-lg py-1 sm:rounded-xl sm:py-1 sm:px-4 px-2 border-1 text-white ' >{props.gitinfo.forks_count} Forks</p>
            <p className='border-white rounded-lg py-1 sm:rounded-xl sm:py-1 sm:px-4 px-2 border-1 text-white ' >{props.gitinfo.stargazers_count} Stars</p>

            <div className="cursor-pointer">
                <a href={props.gitinfo.url}><Github /></a>
            </div>
        </div>
    </motion.div>
  )
}

export default Githubcard