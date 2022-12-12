import React from 'react'
import Card from '../components/Card'
import { useState,useEffect } from 'react'
import {filterProjects, getAllProjects} from '../api/projects'
import Projectloading from '../components/Projectloading'
import  {motion} from 'framer-motion'
import { useContext } from 'react'
import { TabContext } from '../context/TabContext'
import Terminal from '../components/Terminal'

const Projects = () => {

  const[projects,setProjects] = useState([])
  const[isloading, setIsloading] = useState(true)
    const {terminal} = useContext(TabContext)

  useEffect(() => {
    const projectData = async() =>{
      const projdata = await getAllProjects()
      setIsloading(!isloading)
      setProjects(projdata.data.data)
    }
    
    projectData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  const handlefilter = async(e) => {
   
    setIsloading(true)

    const filterData = await filterProjects(e.target.textContent)

    setIsloading(false)

    setProjects(filterData.data.data)
  }
  

  if(isloading) {
    return <Projectloading />
  } else {

      return (
        <>
    <motion.div 
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    className="overflow-x-hidden h-full w-full bg-drk00"
    >
      <motion.div className="w-full flex justify-start md:justify-center items-center py-2 px-3 gap-1 sm:gap-2 bg-drk00 overflow-auto ">
        <motion.span className='cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-lg lg:rounded-2xl py-1 px-2 '
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.05,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >All</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-lg lg:rounded-2xl py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.1,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Hackathons</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-lg lg:rounded-2xl py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.15,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Personal Projects</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-lg lg:rounded-2xl py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.25,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Fullstack</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-lg lg:rounded-2xl py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.1,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Applications</motion.span>
      </motion.div>
    
    <div className=' row-start-2 bg-drk00 flex flex-wrap w-full h-full gap-4 xl:gap-6  justify-center items-center pt-5 md:py-3 xl:py-5 sm:overflow-auto md:overflow-x-hidden'>
      {
        projects && projects.map((p,ind) => (
          <Card cardinfo = {p} cardno = {ind} key={p._id}/>
        ))
      }
    </div>
    </motion.div>

    {
      terminal ? <Terminal /> :null
    }
        </>
  )
    
  }
}

export default Projects