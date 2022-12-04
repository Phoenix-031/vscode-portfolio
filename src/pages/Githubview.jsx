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
              initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    className="h-full overflow-auto bg-drk00"
      >
        <div className='row-start-2 bg-drk00 flex flex-col justify-start items-center gap-6 h-full '>

          <div className='flex justify-center items-center gap-4 grid-cols-none grid-rows-none mt-8 py-8 w-8/12 bg-drk01'>
            <p className='font-poppins text-xl text-white flex gap-2 justify-center items-center'>
              <div className='rounded-full w-24 h-24 object-contain overflow-hidden'>
                <img src={info.avatar_url} alt="" />
              </div>
              <p>{info.login}</p>
            </p>
            <p className='font-poppins text-xl text-white'></p>
            <p className='font-poppins text-xl text-white'>{info.public_repos} Repos</p>
            <p className='font-poppins text-xl text-white'>{info.followers} Followers</p>
            <p className='font-poppins text-xl text-white'>{info.public_gists} Gists</p>
          </div>

          <div className='flex flex-wrap justify-center items-end gap-4 pl-5 pt-2'>
            {
              repos && repos.map((repo,ind) => (
                <Githubcard gitinfo = {repo} key={ind}/>
              ))
            }
          </div>

          <div className=' w-full py-5 flex justify-center items-center'>
            {
              loadmore ? (<Loadmore />) : (<button id='loadmore' className={`bg-drk01 py-3 px-10 text-white text-medium font-poppins text-xl rounded-lg`} onClick={loadmoredata} ref={scrolldown}>Load More</button>)
            }
          </div>
        </div>

        <div  ref={scrolldown}></div>
      </motion.div>
  )

  }

}

export default Githubview