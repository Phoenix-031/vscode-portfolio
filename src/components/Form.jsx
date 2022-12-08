import React from 'react'
import { useState,useEffect } from 'react'
import {sendMessage} from '../api/contact'
import { motion } from 'framer-motion'
import Msgsend from './Msgsend'
import sicon from '../icons/png/success.png'
// import Progress from './Progress'

const Form = () => {

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [message,setMessage]= useState("")
  const [subject,setSubject]= useState("")
  const [sent,setSent] = useState(false)
  const [sending,setSending] = useState(false)
  // const [progress, setProgress] = useState(0)
  // const [running, setRunning] = useState(false)

  // useEffect(()=>{

  //   let interval = undefined
    
  //   if(running) {
  //     interval = setInterval(()=>{
  //       setProgress((progress) => progress+1)
  //     },30)
  //   } else {
  //     clearInterval(interval)
  //   }
  // },[running])

  // useEffect(()=>{
  //   if(progress === 100) {
  //     setProgress(0)
  //     setRunning(false)
  //   }
  // },[progress])
  
  const handleformsubmit = async(e) => {
    e.preventDefault()
    // console.log({name,email,subject,message})
    setSending(true)
    const res = await  sendMessage({name,email,subject,message})

    if(res.data.success) {
      setSending(false)   //loader
      setSent(true)       //popup

      //form related
      setSubject("")
      setName("")
      setEmail("")
      setMessage("")
    }

  }

  useEffect(()=>{
    if(sent) {
      setTimeout(() => {
        setSent(false)
      },1500)
    } else {
      setSent(false)
    }
  },[sent])
  
  
  return (
      <div className='w-1/2 mobile:w-full lg:flex lg:items-center lg:justify-center xl'>
        {
          sent ? (
            <motion.div className='h-16 w-72 flex flex-col justify-between items-centerright-6 text-xl font-Enriqueta text-medium text-white fixed top-5 right-10 bg-gray-600'
            initial={{opacity:0,translateX:200}}
            animate={{opacity:1,translateX:0}}
            transition ={{
              duration:0.4,
              ease:'easeInOut',
              type:"spring",
              stiffness:150
            }}
            >
              <div className='w-full  pt-3 sm:px-5 px-2 flex justify-between items-center'>
                <p>Sent Successfully</p>
                <button  className=' cursor-pointer'>
                  <img src={sicon} alt="" height={30} width={30}/>
                </button>
              </div>
              {/* <Progress progwidth = {progress} /> */}
            </motion.div>
          ) : ("")
        }
        
      <form className='w-full h-full flex flex-col gap-8 justify-start items-center sm:px-16 sm:py-8 px-4 py-4 lg:w-2/3 xl:w-full' onSubmit={handleformsubmit}>
              <div className='text-xl md:text-3xl text-white font-medium font-Enriqueta '>Get In Touch</div>
        <div className='w-full flex flex-col gap-2'>
          <input placeholder='Name' required type="text" id='name' className='mt-5 h-10 rounded-lg px-5 font-urbanist text-white font-medium text-sm sm:text-lg md:text-sm  bg-inherit border-b-2 border-b-gray-500 focus:outline-none focus:bg-inherit' value={name} onChange={(e) => {
            setName(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2 '>
          <input placeholder='Email' required type="email" id='email' className='mt-5 h-10 rounded-lg px-5 font-urbanist text-white font-medium text-sm sm:text-lg md:text-sm  bg-inherit border-b-2 border-b-gray-500 focus:outline-none' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2 '>
          <input placeholder='Subject' type="text" id='subject' className='mt-5 h-10 rounded-lg px-5 font-urbanist text-white font-medium text-sm sm:text-lg md:text-sm  bg-inherit border-b-2 border-b-gray-500 focus:outline-none' value={subject} onChange={(e) => {
            setSubject(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2'>
          <textarea placeholder='Message...' required name="" id="" cols="30" rows="5" className='text-white text-sm sm:text-lg md:text-sm  font-urbanist font-medium border-b-2 border-b-gray-500 px-3 py-3 rounded-xl bg-inherit focus:outline-none' value={message} onChange={(e) => {
            setMessage(e.target.value)
          }}></textarea>
        </div>

        <div>
          {
            sending ? (<Msgsend />) : (<button className='border-white border-2 bg-gray-500 text-sm sm:text-xl md:text-lg text-gray-900 font-Enriqueta sm:py-3 sm:px-5 px-3 py-2 rounded-lg font-semibold transition-colors duration-100 ease-in hover:bg-gray-600 hover:text-white' 
             >Send Message</button>)
          }
        </div>
      </form>
    </div>
  )
}

export default Form