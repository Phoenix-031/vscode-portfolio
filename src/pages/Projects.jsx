import React from 'react'
import Card from '../components/Card'
import { useState,useEffect } from 'react'
import getAllProjects from '../api/projects'
import Projectloading from '../components/Projectloading'
import  {motion} from 'framer-motion'

const Projects = () => {

  const[projects,setProjects] = useState([])
  const[isloading, setIsloading] = useState(true)


  useEffect(() => {
    const projectData = async() =>{
      const projdata = await getAllProjects()
      setIsloading(!isloading)
      setProjects(projdata.data.data)
    }
    
    projectData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  if(isloading) {
    return <Projectloading />
  } else {

      return (
    <motion.div 
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    className="overflow-auto h-full"
    >
    
    <div className='row-start-2 bg-drk00 flex flex-wrap w-full h-full gap-6 justify-center items-center pt-10 pl-5 overflow-auto'>
      {
        projects && projects.map((p,ind) => (
          <Card cardinfo = {p} cardno = {ind} key={p._id}/>
        ))
      }
    </div>
    </motion.div>
  )
    
  }
}

export default Projects