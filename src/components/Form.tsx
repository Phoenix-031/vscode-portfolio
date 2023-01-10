//TO CHANGE

import React from 'react'
import { useState,useEffect,FormEvent } from 'react'
// eslint-disable-next-line no-unused-vars
// import {sendMessage} from '../api/contact'
import { motion } from 'framer-motion'
import Msgsend from './utils/Msgsend'
import { useMutation } from '@apollo/client'
import { SEND_MESSAGE } from '../services/api-v2/Mutations/contactMutation.graphql'
const sicon = require('../icons/png/success.png')

// import Progress from './Progress'

const Form = () => {

  const [name,setName]= useState<string>("")
  const [email,setEmail]= useState<string>("")
  const [message,setMessage]= useState<string>("")
  const [subject,setSubject]= useState<string>("")
  const [sent,setSent] = useState<boolean>(false)
  const [sending,setSending] = useState<boolean>(false)
  // const [progress, setProgress] = useState(0)
  // const [running, setRunning] = useState(false)

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [sendmsg,{loading,error,data}] = useMutation(SEND_MESSAGE,{
    fetchPolicy:"network-only",
    onCompleted: (data) => {
      if(data?.saveContact._id.length > 0) {
        setSending(false)   //loader
        setSent(true)       //popup

        //form related
        setSubject("")
        setName("")
        setEmail("")
        setMessage("")
      }
    }
  })

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
  
  const handleformsubmit = async(e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log({name,email,subject,message})
    setSending(true)
    // const res = await  sendMessage({name,email,subject,message})
    sendmsg({
      variables:{
        name:name,
        email:email,
        subject:subject,
        message:message
      }
    })

    // if(res.data.success) {
    //   setSending(false)   //loader
    //   setSent(true)       //popup

    //   //form related
    //   setSubject("")
    //   setName("")
    //   setEmail("")
    //   setMessage("")
    // }

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
              // ease:'easeInOut',
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
          <input placeholder='Name' required type="text" id='name' className='mt-5 h-10  px-5 font-urbanist text-white font-medium text-sm sm:text-lg md:text-sm  bg-inherit border-b-1 border-b-gray-500 focus:outline-none focus:bg-inherit' value={name} onChange={(e) => {
            setName(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2 '>
          <input placeholder='Email' required type="email" id='email' className='mt-5 h-10  px-5 font-urbanist text-white font-medium text-sm sm:text-lg md:text-sm  bg-inherit border-b-1 border-b-gray-500 focus:outline-none' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2 '>
          <input placeholder='Subject' type="text" id='subject' className='mt-5 h-10  px-5 font-urbanist text-white font-medium text-sm sm:text-lg md:text-sm  bg-inherit border-b-1 border-b-gray-500 focus:outline-none' value={subject} onChange={(e) => {
            setSubject(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2'>
          <textarea placeholder='Message...' required name="" id="" cols={30} rows={5} className='text-white text-sm sm:text-lg md:text-sm  font-urbanist font-medium border-b-1 border-b-gray-500 px-3 py-3 bg-inherit focus:outline-none' value={message} onChange={(e) => {
            setMessage(e.target.value)
          }}></textarea>
        </div>

        <div>
          {
            sending ? (<Msgsend />) : (
              <div className='bg-bcol01 rounded-lg py-1px px-1px '>
                <div className="bg-drk00 rounded-lg ">
                  <button className='rounded-lg bg-bcol01 hover:bg-bcol01-right text-transparent bg-clip-text text-sm sm:text-xl md:text-lg  font-Enriqueta sm:py-3 sm:px-5 px-3 py-2  font-semibold' 
             >Send Message</button>
                </div>
              </div>
            )
          }
        </div>
      </form>
    </div>
  )
}

export default Form