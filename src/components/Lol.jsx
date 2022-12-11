import React from 'react'
import { Link } from 'react-router-dom'
import lol from '../assets/lolimg.jpeg'

const Lol = () => {
  return (
    <div className='w-full h-full bg-drk00 flex flex-col justify-center items-center'>
        <div className='object-contain rounded-lg w-[40%] h-[50%]'>
            <img src={lol} alt="" className='rounded-lg'/>
        </div>
        <Link to='/'><button className='py-3 px-5 bg-drk01 rounded-lg text-white font-poppins font-semibold'>Go Back</button></Link>
    </div>
  )
}

export default Lol