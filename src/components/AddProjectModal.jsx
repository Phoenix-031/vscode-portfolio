import React from 'react'
import { motion} from 'framer-motion'
import { useState } from 'react'
import ModalLoader from './ModalLoader'
import Cross from '../icons/Cross'
// eslint-disable-next-line no-unused-vars
// import { addProject } from '../api/projects'
import { ADD_PROJECT } from '../Mutations/projectMutation'
import { useMutation } from '@apollo/client'

const AddProjectModal = (props) => {

    const [modaltitle,setModaltitle] = useState("")
    const [modaldescription,setModaldescription] = useState("")
    const [taginp,setTanginp] = useState("")
    const [modaltags,setModaltags] = useState([])
    const [live,setLive] = useState("")
    const [demo,setDemo] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [update,setUpdate] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const [addProj,{loading,error,data}] = useMutation(ADD_PROJECT,
      {
        fetchPolicy: "network-only",
        onCompleted:(data) => {
          if(data?.addProject._id.length > 0) {
            setUpdate(false)
          }else {
            console.log("Project could not be added")
            setUpdate(false)
          }
        }
      }
    )

    
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
    

   const handleformupadate =  (e) => {
    e.preventDefault()
    setUpdate(true)
    // const res = await addProject({modaltitle,modaldescription,modaltags,live,demo})
    addProj({
        variables: {
          title:modaltitle,
          description:modaldescription,
          tags:modaltags,
          live:live,
          source:demo
    }})
    if(error) 
      console.log(error)
    // if(!loading)
    //   console.log(data)
    // if(data?.addProject._id.length > 0) {
    //   setUpdate(false)
    // }
  }
    
  return (
    <motion.div className='bg-drk01 text-sm sm:text-lg rounded-2xl border-gray-600 border-2 text-white font-urbanist w-[90%] sm:w-1/2 lg-[60%] h-[70%] overflow-y-auto left-5 sm:left-40 top-30 z-20 absolute flex justify-center items-baseline'
      initial={{opacity:0,translateX:-120,height:0}}
      animate = {{opacity:1,translateX:0,height:`${70}%`}}
      transition = {{
        delay:0.1,
        duration:0.5,
        type:"spring",
        stiffness:120,
      }}
      exit={{opacity:0,translateX:-120,height:0}}
      >
         <div className='max-h-max flex flex-col gap-6 justify-center items-center w-full px-10 py-3 mb-10 mt-5'>
          <div className='w-full flex justify-end' onClick={() => props.changeParentState()}>
            <Cross width={25} height={25} />
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            {/* <img src={} alt="" /> */}
            <input className='rounded-lg font-poppins text-sm sm:text-lg py-3 px-5 hidden' placeholder = 'Image' type="file" id='fileupload-btn'/>
            <button onClick={() => {document.getElementById('fileupload-btn').click()}} className='text-sm sm:text-lg py-3 px-5 font-poppins font-semibold rounded-lg bg-drk00'>Upload</button>
          </div>
          <div className="w-full flex justify-start items-baseline flex-col"> 
            <p>Title</p>
            <input className='rounded-sm  border-b-1 bg-inherit font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none w-full sm:w-2/3' value={modaltitle} placeholder = 'Edit Title' type="text" 
            onChange={(e) => setModaltitle(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-start items-baseline flex-col">
            <p className=''>Desctiption</p>
            <input className='rounded-sm  border-b-1  bg-inherit font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none w-full sm:w-2/3' value={modaldescription} placeholder = 'Edit Description' type="text" 
            onChange={(e) => setModaldescription(e.target.value)}
            />
          </div>
          <div className='flex justify-center items-center flex-col gap-2 w-full'>
            <div className="flex justify-start items-center gap-2 w-full flex-col sm:flex-row">
              <input className='rounded-sm font-poppins text-sm sm:text-lg py-3 px-5 text-gray-600 focus:outline-none bg-inherit border-b-1 w-full sm:w-2/3' value={taginp} onChange={(e) => setTanginp(e.target.value)} placeholder = 'Edit Tags' type="text" />
              <button onClick={handletags} className='rounded-lg py-2 px-4 bg-drk00 text-sm sm:text-lg text-white font-poppins font-semibold'>Add</button>
            </div>
            <div className="flex gap-3 jsutify-start items-center w-full flex-wrap">
              {modaltags.map(tag => (
                <div className='bg-drk00 py-2 px-4 rounded-lg flex justify-center items-center gap-2'>{tag}
                <div className='rounded-full' onClick={removetag}><Cross width={16} height={16}/></div>
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
            update ? (<ModalLoader />) : (<button className='text-white py-3 px-5 font-poppins bg-drk00 rounded-lg hover:bg-gray-500' onClick={handleformupadate} >Add</button>)
          }
        </div>
      </motion.div>
  )
}

export default AddProjectModal