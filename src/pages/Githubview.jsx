/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Githubcard from '../components/Githubcard'
import { useEffect,useState,useRef } from 'react'
import {Githubdata,Githubrepo} from '../api/github'
import Projectloading from '../components/Projectloading'
import Loadmore from '../components/Loadmore'
import  {motion} from 'framer-motion'

const Githubview = () => {

  const [isloading,setIsloading] = useState(true)
  const [loadmore,setLoadmore] = useState(false)
  const [repos,setRepos] = useState([])
  const [page,setPage] = useState(1)
  const [info,setInfo] = useState("")
  const scrolldown = useRef(null)

  useEffect(() => {
    console.log(scrolldown.current)
    scrolldown.current?.scrollIntoView({behavior:'smooth'})
  },[repos])

  useEffect(() => {
    const getGithubdata = async() =>{
      const usrinfo = await Githubdata()
      const repoinfo = await Githubrepo(page)

      // console.log(repoinfo)
      // console.log(usrinfo)
      
      setIsloading(false)
      if(page > 1) {
        setLoadmore(!loadmore)
      }
      setRepos(repos.concat(repoinfo.data))
      setInfo(usrinfo.data)
    }

     getGithubdata()
     console.log(info)
    
  },[page])

  const loadmoredata = () => {
    if(page+1 <= 7){
      setLoadmore(!loadmore)
      console.log(page)
      setPage(page+1)
    } else {
      document.getElementById('loadmore').classList.add("hidden")
    }
  }

  if(isloading) {
    return <Projectloading />
  } else {

    return (
      <motion.div 
    className="h-full overflow-auto bg-drk00 flex-col w-full justify-center"
      >
        <div className='row-start-2 bg-drk00 flex flex-col justify-center items-center gap-4 xl:gap-6 h-max'>

          <div className='flex justify-center items-center gap-4 sm:mt-8 py-4 w-full md:w-full lg:w-8/12 bg-drk01 flex-col lg:flex-row'>
            <div className='font-poppins text-lg sm:text-xl text-white flex gap-2 justify-center items-center '>
              <div className='rounded-full sm:w-24 sm:h-24 md:h-20 md:w-20 w-12 h-12 object-contain overflow-auto  '>
                <img src={info.avatar_url} alt="" />
              </div>
              <p>{info.login}</p>
            </div>
            <p className='font-poppins text-xl text-white mobile:text-sm'></p>
              <p className=' font-poppins text-sm md:text-lg sm:text-xl text-white '>{info.public_repos} Repos</p>
              <p className=' font-poppins text-sm md:text-lg sm:text-xl text-white '>{info.followers} Followers</p>
              <p className=' font-poppins text-sm md:text-lg sm:text-xl text-white '>{info.public_gists} Gists</p>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-2 lg:gap-4 xl:pl-5 pt-2'>
            {
              repos && repos.map((repo,ind) => (
                <Githubcard cardno={ind} gitinfo = {repo} key={ind}/>
              ))
            }
          </div>

          <div className=' w-full py-5 flex justify-center items-center'>
            {
              loadmore ? (<Loadmore />) : (<button id='loadmore' className={`bg-drk01 py-3 sm:px-10 px-5 text-white text-normal sm:text-medium font-poppins text-sm md:text-xl rounded-lg `} onClick={loadmoredata} ref={scrolldown}>Load More</button>)
            }
          </div>
        </div>

        <div  ref={scrolldown}></div>
      </motion.div>
  )

  }

}

export default Githubview