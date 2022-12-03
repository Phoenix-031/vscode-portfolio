import React from 'react'
import Bell from '../icons/Bell'
import Branch from '../icons/Branch'
import ricon from '../icons/png/react.png'
import ticon from '../icons/png/tick1.png'

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-drk00 px-4 row-start-3 border-t-2 border-t-drk01'>
      <div className='flex gap-4 justify-center items-center'>
        <p className='flex gap-2 justify-center items-center'>
          <Branch />
          <p className='text-sm text-white font-poppins'>master</p>
        </p>
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <p className='flex justify-center items-center text-sm text-white font-poppins gap-2'>
          <img src={ricon} alt="" height={16} width={16} />
          <p>React Js</p>
        </p>
        <p className='flex justify-center items-center text-sm text-white font-poppins gap-1'>
          <img src={ticon} alt="" width={16} height={16} color="white"/>
          <p>Prettier</p>
        </p>
        <Bell />
      </div>
    </div>
  )
}

export default Footer