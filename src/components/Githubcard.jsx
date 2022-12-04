import React from 'react'
import Github from '../icons/Github'
import { motion } from 'framer-motion'

const Githubcard = (props) => {

  return (
    <motion.div className='bg-drk01 pt-5 pb-5 rounded-lg pr-10 pl-5 flex justify-start flex-col gap-3 w-[calc(100%/3)] items-center hover:shadow-xl' 
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
        <div className='font-Enriqueta text-xl text-orange-500'>{props.gitinfo.full_name}</div>
        <div className='text-lg font-poppins text-white font-normal flex flex-wrap w-56 overflow-y-hidden text-ellipsis break-words leading-8 max-h-16'>{props.gitinfo.description}</div>
        <div className='flex flex-wrap justify-between items-center gap-2 text-lg w-100'>
            <p className='border-white rounded-xl py-1 px-4 border-1'>{props.gitinfo.watchers_count} Views</p>
            <p className='border-white rounded-xl py-1 px-4 border-1'>{props.gitinfo.forks_count} Forks</p>
            <p className='border-white rounded-xl py-1 px-4 border-1'>{props.gitinfo.stargazers_count} Stars</p>

            <div className="cursor-pointer">
                <a href={props.gitinfo.url}><Github /></a>
            </div>
        </div>
    </motion.div>
  )
}

export default Githubcard