/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { removeProject } from '../api/projects'

const Popup = (props) => {

    const handledelete = async(e) => {

            
    const res = await removeProject(props.cardinfo)

    if(res.data.success) {
        props.changeParentState()
    }
        // console.log("asrgh")    
    }

    const handledeny = () => {
        props.changeParentState()
    }
    
  return (

    <motion.div
        initial={{ opacity: 0,translateY:-150 }}
        animate={{ opacity: 1,translateY:0 }}
        transition={{
        duration: 0.5,
        ease: 'easeInOut',
        type:'spring',
        stiffness:100
        }}
        className="flex flex-col justify-center items-center gap-4 z-30 fixed top-20 w-full sm:max-w-max py-3 bg-drk00"
    >
        <p className='text-white font-poppins'>Delete this entry?</p>
        <div className='flex justify-center gap-16 items-center w-full'>
            <button className='rounded-lg text-lg sm:text-xl bg-drk01 font-poppins py-3 px-5 font-normal text-white' onClick={handledelete}>Confirm</button>
            <button className='rounded-lg text-lg sm:text-xl bg-drk01 font-poppins py-3 px-5 font-normal text-white' onClick={handledeny} >Deny</button>
        </div>
    </motion.div>

  )
}

export default Popup