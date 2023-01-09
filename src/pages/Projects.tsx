import React from 'react'
import Card from '../components/Card'
// eslint-disable-next-line no-unused-vars
// import { useEffect } from 'react'
import { useState } from 'react'
// import {filterProjects, getAllProjects} from '../api/projects'
import Projectloading from '../components/Projectloading'
import  {motion} from 'framer-motion'
import { useContext } from 'react'
import { TabContext } from '../context/TabContext'
import Terminal from '../components/Terminal'
import { useQuery,useLazyQuery} from '@apollo/client'
import { GET_ALL_PROJECTS } from '../Queries/projectQuery.graphql'
import { FILTER_PROJECT } from '../Queries/projectQuery.graphql'

const Projects = () => {


  //UPDATED TO APOLLO CLIENT

  // USED WHEN WORKING WITH RESTAPI BACKEND
  
  const[projects,setProjects] = useState([])
 

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const {loading,data} = useQuery(GET_ALL_PROJECTS,{
    pollInterval:1000,
    onCompleted: (data) => {
      setIsloading(false)
      setProjects(data.getAllProjects)
    }
    // fetchPolicy:"network-only"
  })
   const[isloading, setIsloading] = useState(loading)
   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
   const[filterProj,filterres] = useLazyQuery(FILTER_PROJECT,{
    onCompleted:(data) => {
      console.log(data)
      setProjects(data.filterProjects)
      setIsloading(false)
    },
    fetchPolicy:"cache-and-network"
   })


  //   useEffect(() => {
  //   const projectData = async() =>{
  //   //   const projdata = await getAllProjects()
  //   //   setIsloading(!isloading)
  //   //   setProjects(projdata.data.data)

  //   await getProj()
  //   if(!loading)console.log(data)

  //   }
    
  //   projectData()

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[data])


    const {terminal} = useContext(TabContext)


  

  const handlefilter = async(e : any) => {

  // const [{loading,error,data}] = useLazyQuery(GET_ALL_PROJECTS)
   setIsloading(true)
  filterProj({
    variables:{
      id: e.target.textContent
    }
  })

    // const filterData = await filterProjects(e.target.textContent)

    // setIsloading(false)

    // setProjects(filterData.data.data)
  }


  // const getProjectList = async () => {
  // }
  

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
        <motion.span className='cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-[1px] rounded-sm lg:rounded-lg hover:text-transparent hover:bg-clip-text hover:bg-bcol02 py-1 px-2 '
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.05,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >All</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-sm lg:rounded-lg hover:text-transparent hover:bg-clip-text hover:bg-bcol02 py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.1,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Hackathons</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-sm lg:rounded-lg hover:text-transparent hover:bg-clip-text hover:bg-bcol02 py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.15,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Personal Projects</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-sm lg:rounded-lg hover:text-transparent hover:bg-clip-text hover:bg-bcol02 py-1 px-2'
              initial={{opacity:0,translateY:-150}}
      animate={{opacity:1,translateY:0}}
      transition={{
        delay:0.25,
        ease:"easeInOut"
      }}
        onClick={handlefilter}
        >Fullstack</motion.span>
        <motion.span className='max-w-max cursor-pointer text-xs lg:text-lg md:text-sm hover:bg-drk01 text-white font-varela border-white border-1 rounded-sm lg:rounded-lg hover:text-transparent hover:bg-clip-text hover:bg-bcol02 py-1 px-2'
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
        projects?.length > 0 && projects.map((p,ind) => (
          <Card cardinfo = {p} cardno = {ind} key={ind}/>
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