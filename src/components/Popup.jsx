/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { removeProject } from '../api/projects'

const Popup = (props) => {

    const handledelete = async(e) => {

            
    // const res = await removeProject(props.cardinfo)

    // if(res.data.success) {
    //     alert("deleted successfully")
    // }
        console.log("asrgh")    
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
        className="flex flex-col justify-center items-center gap-4 z-30 fixed top-20"
    >
        <p>Delete this entry?</p>
        <div className='flex justify-between items-center w-full'>
            <button className='rounded-lg text-xl bg-drk01 font-poppins py-3 px-5 font-semibold' onClick={handledelete}>Confirm</button>
            <button className='rounded-lg text-xl bg-drk01 font-poppins py-3 px-5 font-semibold' >Deny</button>
        </div>
    </motion.div>

  )
}

export default Popup