import React from 'react'
import { useState } from 'react'
import {sendMessage} from '../api/contact'

const Form = () => {

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [message,setMessage]= useState("")
  const [subject,setSubject]= useState("")

  const handleformsubmit = async(e) => {
    e.preventDefault()
    const res = await  sendMessage({name,email,subject,message})

    if(res.data.success) {
      setSubject("")
      setName("")
      setEmail("")
      setMessage("")
    }

  }
  
  return (
    
    <div className='w-1/2'>
      <form className='w-full h-full flex flex-col gap-8 justify-start items-center px-16 py-8' onSubmit={handleformsubmit}>
              <div className='text-3xl text-white font-medium font-Enriqueta'>Get In Touch</div>
        <div className='w-full flex flex-col gap-2'>
          <input placeholder='Name' required type="text" id='name' className='mt-5 h-10 rounded-lg px-5 font-urbanist text-white font-medium text-lg bg-inherit border-b-2 border-b-gray-500 focus:outline-none focus:bg-inherit' value={name} onChange={(e) => {
            setName(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2 '>
          <input placeholder='Email' required type="email" id='email' className='mt-5 h-10 rounded-lg px-5 font-urbanist text-white font-medium text-lg bg-inherit border-b-2 border-b-gray-500 focus:outline-none' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2 '>
          <input placeholder='Subject' type="text" id='subject' className='mt-5 h-10 rounded-lg px-5 font-urbanist text-white font-medium text-lg bg-inherit border-b-2 border-b-gray-500 focus:outline-none' value={subject} onChange={(e) => {
            setSubject(e.target.value)
          }}/>
        </div>
        <div className='w-full flex flex-col gap-2'>
          <textarea placeholder='Message...' required name="" id="" cols="30" rows="5" className='text-white text-lg font-urbanist font-medium border-b-2 border-b-gray-500 px-3 py-3 rounded-xl bg-inherit focus:outline-none' value={message} onChange={(e) => {
            setMessage(e.target.value)
          }}></textarea>
        </div>

        <div>
          <button className='border-white border-2 bg-gray-500 text-xl text-gray-900 font-Enriqueta py-3 px-5 rounded-lg font-semibold transition-colors duration-100 ease-in hover:bg-gray-600 hover:text-white' >Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Form