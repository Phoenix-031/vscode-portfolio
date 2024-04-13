//TO CHANGE

import React, { FC, useState,MouseEvent  } from 'react'
import { motion } from 'framer-motion'
import Edit from '../icons/Edit'
import Cross from '../icons/Cross'
// eslint-disable-next-line no-unused-vars
// import { updateProject } from '../api/projects'
import ModalLoader from './utils/ModalLoader'
import Bin from '../icons/Bin'
import { useEffect } from 'react'
import Popup from './Popup'
import { VERIFY_ADMIN } from '../services/api-v2/Queries/adminQuery.graphql'
import { UPDATE_PROJECT } from '../services/api-v2/Mutations/projectMutation.graphql'
import { useLazyQuery,useMutation } from '@apollo/client'

interface CardProps {
  cardinfo: {
    _id:string,
    title:string,
    description:string,
    tags:string[],
    imgurl:string,
    source:string,
    live:string,
    filter:string[],
  },
  cardno:number
}

const Card :FC<CardProps> = (props) => {


  // eslint-disable-next-line no-unused-vars
  // const {user} = useContext(AdminContext)
  const [modal,setModal] = useState<boolean>(false)
  const [modaltitle,setModaltitle] = useState<string>(props.cardinfo.title)
  const [modaldescription,setModaldescription] = useState<string>(props.cardinfo.description)
  const [taginp,setTanginp] = useState<string>("")
  const [modaltags,setModaltags] = useState<string[]>(props.cardinfo.tags)
  const [live,setLive] = useState<string>(props.cardinfo.live)
  const [demo,setDemo] = useState<string>(props.cardinfo.source)
  const [update,setUpdate] = useState<boolean>(false)
  const [verified,setVerified] = useState<boolean>(false)
  const [popup,setPopup] = useState<boolean>(false)

  // eslint-disable-next-line no-unused-vars
  const [Adminverification,{data}] = useLazyQuery(VERIFY_ADMIN,{
    onCompleted: (data) => {
      console.log(data);
      if(data?.veriAdmin.success)
          setVerified(true)
    },
    onError: (error) => {
      // console.log(error)
      setVerified(false)

    }
  })
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [updateProj,upres] = useMutation(UPDATE_PROJECT,{
    fetchPolicy:"network-only",
    onCompleted: (data) => {
      if(data?.updateProject.success){
        setUpdate(false)
        setModal(false)
      } else {
        console.log("Project could not be updated")
        setUpdate(false)
        setModal(false)
      }
    }
  })

  useEffect(() => {
    const verifyAdminPriviledge = async () => {
      // const res = await verfiyAdmin(localStorage.getItem('user'))
       Adminverification({
            variables:{
              token:localStorage.getItem('user')
    }
       })
      // if(!loading && data?.verifyAdmin.success){
      //   setVerified(true)
      // } 
      // else {
      //   setVerified(false)
      // }
    }

    verifyAdminPriviledge()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])

  const handletags = (e : MouseEvent<HTMLButtonElement>) :void => {

    modaltags.push(taginp)
    setTanginp("")
    console.log(modaltags)

  }

 const removetag = (e : any) => {
  console.log(e.target.parentElement.parentElement.textContent)
  console.log(modaltags.filter(tag => tag !== e.target.parentElement.parentElement.textContent))
  setModaltags(modaltags.filter(tag => tag !== e.target.parentElement.parentElement.textContent))
 }
  
  const handleEditProject = () => {
    setModal(!modal)
  }

  const handleformupadate = async (e : MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    setUpdate(true)

    updateProj({variables: {token: localStorage.getItem('user'),id:props.cardinfo._id,title:modaltitle,description:modaldescription,tags:modaltags,source:live,live:demo}})

    // const id = upres.data?.updateProject._id
    // console.log(id)
    
    // const res = await updateProject({modaltitle,modaldescription,modaltags,live,demo},props.cardinfo._id)
    // if(res.data.success) {
    //   setUpdate(false)
    //   setModal(false)
    // }
  }
  
  const handleDelete = async() => {
    setPopup(true)
}

  const togglePopup = () =>{
    setPopup(!popup)
  }
  
  return (
   <>
   {
    popup ? <Popup changeParentState= {togglePopup} cardid={props.cardinfo._id} /> : null
   }

   {modal ? 
   <div className='w-screen h-screen top-0 left-0 fixed flex justify-center items-center bg-blur/30 backdrop-blur-sm z-30'
   id='wrapper'
   onClick={(e : any) => {
    // console.log(e.currentTarget.id)
      if(e.target.id === 'wrapper'){
        setModal(false)
      }
    }
   }
   >
      <motion.div className='bg-drk01 text-sm sm:text-lg rounded-2xl text-white font-urbanist w-[95%] sm:w-1/2 h-[70%] overflow-y-auto flex justify-center items-baseline scrollbar-hide border border-gray-700'
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
            <input className='rounded-lg font-poppins text-sm sm:text-lg py-3 px-5 hidden' placeholder = 'Image' type="file" id='fileupload-btn'/>
            <button onClick={() => {document.getElementById('fileupload-btn')!.click()}} className='text-sm sm:text-lg py-3 px-5 font-poppins font-semibold rounded-lg bg-drk00 max-w-max'>Upload</button>
          </div>
          <div className="w-full flex justify-start items-baseline flex-col"> 
            <p>Title</p>
            <input className='rounded-sm  border-b-1 bg-inherit font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none w-2/3' value={modaltitle} placeholder = 'Edit Title' type="text" 
            onChange={(e) => setModaltitle(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-start items-baseline flex-col">
            <p className=''>Desctiption</p>
            <input className='rounded-sm  border-b-1  bg-inherit font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none w-2/3' value={modaldescription} placeholder = 'Edit Description' type="text" 
            onChange={(e) => setModaldescription(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center flex-col gap-2 w-full'>
            <div className="flex justify-start items-center gap-2 w-full">
              <input className='rounded-sm font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none bg-inherit border-b-1 w-2/3' value={taginp} onChange={(e) => setTanginp(e.target.value)} placeholder = 'Edit Tags' type="text" />
              <button onClick={handletags} className='rounded-lg py-2 px-4 bg-drk00 text-sm sm:text-lg text-white font-poppins font-semibold'>Add</button>
            </div>
            <div className="flex gap-3 jsutify-start items-center w-full flex-wrap">
              {modaltags.map(tag => (
                <div className='bg-drk00 py-2 px-4 rounded-lg flex justify-center items-center gap-2'>{tag}
                <div className='rounded-full' onClick={removetag}><Cross width={16} height={16} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full flex gap-2 justify-between items-center flex-col sm:flex-row'>
            <div className='flex flex-col justify-center items-center'>Live
              <input type="text" className='rounded-sm  border-b-1 bg-inherit  font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none w-full' value={live} onChange={(e) => setLive(e.target.value)}/>
            </div>
            <div className='flex flex-col justify-center items-center'>Source
              <input type="text" className='rounded-sm  border-b-1 bg-inherit font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none w-full' value={demo} onChange={(e) => setDemo(e.target.value)}/>
            </div>
          </div>
          {
            update ? (<ModalLoader />) : (<button className='text-white py-3 px-5 font-poppins bg-drk00 rounded-lg hover:bg-gray-500' onClick={handleformupadate}>Update</button>)
          }
        </div>
      </motion.div>
   </div>
    : null}
   
 <motion.div className='border-1 border-gray-800 relative rounded-lg md:rounded-xl h-[600px] bg-[#1d2128] sm:p-5 md:p-5 p-3 text-white text-sm md:text-sm sm:text-lg font-urbanist w-full md:w-2/3 mobile-l:w-[90%] lg:w-[45%] xl:w-[30%] flex flex-col justify-start items-center gap-4 '
    initial={{opacity:0,
      translateX: props.cardno % 2 ===0 ? -150 : 150
    }}
      transition = {{
        delay:props.cardno * 0.2,
        duration:0.6,
        type:"spring",
        stiffness:120,
      }}
     whileInView={{
      opacity:1,
      translateX:0
     }}

     >
      <div className='overflow-hidden h-52 rounded-lg w-full flex-2'>
        <motion.img src={props.cardinfo.imgurl} alt="" className='border-gray-900 border-1 transition-all duration-75 ease-in hover:rotate-6 hover:scale-100'
        initial={{opacity: 0.8}}
        whileHover={{
          scale:1.05,
          transition:{duration:0.1}
        }}
        exit={{opacity:1}}
        />
      </div> 
      <div className='text-xl md:text-2xl font-Enriqueta flex-1 p-0'>
        {props.cardinfo.title}
      </div>
      <p className='flex align-baseline flex-1 flex-wrap w-full overflow-hidden text-sm sm:text-lg  font-varela text-center'>
        {props.cardinfo.description}
      </p>
      <div className='flex flex-1 gap-1 sm:gap-2 justify-start items-center w-full flex-wrap text-sm  sm:text-lg font-semibold'>
        {
          props.cardinfo.tags && props.cardinfo.tags.map((tag,ind) => (
            <div className={`rounded-lg  py-[1px] px-[1px] class-b-${ind%3}`}>
              <p className='bg-drk00 rounded-lg  py-2 px-2' key={ind}>{tag}</p>
            </div>
          )
          )
        }
      </div>
      <div className='w-full flex-1 flex justify-between items-end'>
        <button className='border-gray-500 border-2 rounded-lg font-semibold font-poppins md:rounded-xl px-4 py-2 sm:px-5 sm:py-3'><a href={props.cardinfo.live} target='_blank' rel='noreferrer'>Live</a></button>
        {verified ? (
        <>
        <div className='cursor-pointer' onClick={handleEditProject}><Edit width={25} height={25}/></div> 
         <div className='cursor-pointer' onClick={handleDelete}><Bin /></div>
        </>
        )
        : null}
        <button className='border-gray-500 border-2 rounded-lg font-semibold font-poppins md:rounded-xl px-4 py-2 sm:px-5 sm:py-3'><a href={props.cardinfo.source} target='_blank' rel='noreferrer'>Source</a></button>
      </div>
    </motion.div>
   </>
  )
}

export default Card