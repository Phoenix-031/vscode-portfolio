import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Edit from '../icons/Edit'
import Cross from '../icons/Cross'
import { removeProject, updateProject } from '../api/projects'
import ModalLoader from './ModalLoader'
import Bin from '../icons/Bin'
import { useEffect } from 'react'
import { verfiyAdmin } from '../api/user'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const Card = (props) => {


  const {user} = useContext(AdminContext)
  const [modal,setModal] = useState(false)
  const [modaltitle,setModaltitle] = useState(props.cardinfo.title)
  const [modaldescription,setModaldescription] = useState(props.cardinfo.description)
  const [taginp,setTanginp] = useState("")
  const [modaltags,setModaltags] = useState(props.cardinfo.tags)
  const [live,setLive] = useState(props.cardinfo.live)
  const [demo,setDemo] = useState(props.cardinfo.source)
  const [update,setUpdate] = useState(false)
  const [verified,setVerified] = useState(false)

  useEffect(() => {
    const verifyAdminPriviledge = async () => {
      const res = await verfiyAdmin(localStorage.getItem('user'))

      if(res.data.success){
        setVerified(true)
      } else {
        setVerified(false)
      }
    }

    verifyAdminPriviledge()
  },[user])

  const handletags = (e) => {

    modaltags.push(taginp)
    setTanginp("")
    console.log(modaltags)

  }

 const removetag = (e) => {
  console.log(e.target.parentElement.parentElement.textContent)
  console.log(modaltags.filter(tag => tag !== e.target.parentElement.parentElement.textContent))
  setModaltags(modaltags.filter(tag => tag !== e.target.parentElement.parentElement.textContent))
 }
  
  const handleEditProject = () => {
    setModal(!modal)
  }

  const handleformupadate = async (e) => {
    e.preventDefault()
    setUpdate(true)
    const res = await updateProject({modaltitle,modaldescription,modaltags,live,demo},props.cardinfo._id)
    if(res.data.success) {
      setUpdate(false)
      setModal(false)
    }
  }
  
  const handleDelete = async() => {
   const res = await removeProject(props.cardinfo._id)

   if(res.data.success) {
    alert("deleted successfully")
  }
}
  
  return (
   <>

   {modal ? 
      <motion.div className='bg-drk01 text-lg rounded-2xl text-white font-urbanist w-1/2 h-[70%] overflow-y-auto top-20 z-20 fixed flex justify-center items-baseline'
      initial={{opacity:0,translateY:-150}}
      animate = {{opacity:1,translateY:0}}
      transition = {{
        delay:0.1,
        duration:0.5,
        type:"spring",
        stiffness:120,
      }}
      > 
        <div className='max-h-max flex flex-col gap-6 justify-center items-center w-full px-10 py-3 mb-10 mt-5 overflow-auto'>
            <div className=" w-full flex justify-end" onClick={() => setModal(false)}>
              <Cross width={30} height={30} />
            </div>
          <div className='flex flex-col gap-2 justify-center items-center w-full'>
            <img src={props.cardinfo.imgurl} alt="" />
            <input className='rounded-lg font-poppins text-lg py-3 px-5 hidden' placeholder = 'Image' type="file" id='fileupload-btn'/>
            <button onClick={() => {document.getElementById('fileupload-btn').click()}} className='text-lg py-3 px-5 font-poppins font-semibold rounded-lg bg-drk00 max-w-max'>Upload</button>
          </div>
          <div className="w-full flex justify-start items-baseline flex-col"> 
            <p>Title</p>
            <input className='rounded-sm  border-b-1 bg-inherit font-poppins text-lg py-3 px-5 text-gray-600 focus:outline-none w-2/3' value={modaltitle} placeholder = 'Edit Title' type="text" 
            onChange={(e) => setModaltitle(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-start items-baseline flex-col">
            <p className=''>Desctiption</p>
            <input className='rounded-sm  border-b-1  bg-inherit font-poppins text-lg py-3 px-5 text-gray-600 focus:outline-none w-2/3' value={modaldescription} placeholder = 'Edit Description' type="text" 
            onChange={(e) => setModaldescription(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center flex-col gap-2 w-full'>
            <div className="flex justify-start items-center gap-2 w-full">
              <input className='rounded-sm font-poppins text-lg py-3 px-5 text-gray-600 focus:outline-none bg-inherit border-b-1 w-2/3' value={taginp} onChange={(e) => setTanginp(e.target.value)} placeholder = 'Edit Tags' type="text" />
              <button onClick={handletags} className='rounded-lg py-2 px-4 bg-drk00 text-lg text-white font-poppins font-semibold'>Add</button>
            </div>
            <div className="flex gap-3 jsutify-start items-center w-full flex-wrap">
              {modaltags.map(tag => (
                <div className='bg-drk00 py-2 px-4 rounded-lg flex justify-center items-center gap-2'>{tag}
                <div className='rounded-full' onClick={removetag}><Cross width={16} height={16} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex gap-2 justify-between items-center'>
            <div className='flex flex-col justify-center items-center'>Live
              <input type="text" className='rounded-sm  border-b-1 bg-inherit  font-poppins text-lg py-3 px-5 text-gray-600 focus:outline-none w-full' value={live} onChange={(e) => setLive(e.target.value)}/>
            </div>
            <div className='flex flex-col justify-center items-center'>Source
              <input type="text" className='rounded-sm  border-b-1 bg-inherit font-poppins text-lg py-3 px-5 text-gray-600 focus:outline-none w-full' value={demo} onChange={(e) => setDemo(e.target.value)}/>
            </div>
          </div>
          {
            update ? (<ModalLoader />) : (<button className='text-white py-3 px-5 font-poppins bg-drk00 rounded-lg hover:bg-gray-500' onClick={handleformupadate}>Update</button>)
          }
        </div>
      </motion.div>
    : null}
   
 <motion.div className='relative border-white border-2 rounded-lg md:rounded-xl max-h-max bg-gray-800 px-1 sm:px-3 py-2 sm:py-3 text-white text-sm md:text-lg font-urbanist w-full md:w-2/3 mobile-l:w-[90%] lg:w-[60%] xl:w-[40%] flex flex-col justify-start items-center gap-4 '
    initial={{opacity:0,
      translateX: props.cardno % 2 ===0 ? -150 : 150
    }}
     whileInView={{
      opacity:1,
      translateX:0
     }}
     transition={{
      delay:props.cardno * 0.2,
      ease:'easeIn',
      duration:0.6,
      type:'spring',
      stiffness:100
     }}
     >
      <div className='overflow-hidden h-52 rounded-lg w-full'>
        <motion.img src={props.cardinfo.imgurl} alt="" className=' border-white border-1 md:border-2 transition-all duration-75 ease-in hover:rotate-6 hover:scale-100'
        initial={{opacity: 0.8}}
        whileHover={{
          scale:1.05,
          transition:{duration:0.5}
        }}
        exit={{opacity:1}}
        />
      </div> 
      <div className='text-xl xl:text-3xl md:text-2xl font-Enriqueta'>
        {props.cardinfo.title}
      </div>
      <p className='flex flex-wrap w-full overflow-hidden text-lg xl:text-2xl md:text-lg font-varela text-center '>
        {props.cardinfo.description}
      </p>
      <div className='flex gap-1 sm:gap-2 justify-start items-center w-full flex-wrap text-sm xl:text-xl md:text-lg font-semibold'>
        {
          props.cardinfo.tags && props.cardinfo.tags.map((tag,ind) => (
            <p className='border-gray-400 border-2 rounded-lg sm:rounded-2xl py-2 px-3' key={ind}>{tag}</p>
          )
          )
        }
      </div>
      <div className='w-full flex justify-between items-center px-3'>
        <p className='border-gray-500 border-2 rounded-lg md:rounded-xl px-4 py-2'><a href={props.cardinfo.live}>Live Demo</a></p>
        {verified ? (
        <>
        <div onClick={handleEditProject}><Edit width={30} height={30}/></div> 
         <div onClick={handleDelete}><Bin /></div>
        </>
        )
        : null}
        <p className='border-gray-500 border-2 rounded-lg md:rounded-xl px-4 py-2'><a href={props.cardinfo.source}>Source</a></p>
      </div>
    </motion.div>
   </>
  )
}

export default Card