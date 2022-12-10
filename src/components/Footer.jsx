import React from 'react'
import Bell from '../icons/Bell'
import Branch from '../icons/Branch'
import ricon from '../icons/png/react.png'
import ticon from '../icons/png/tick1.png'

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-drk00 sm:px-4a px-2 row-start-3 border-t-2 border-t-drk01'>
      <div className='flex sm:gap-4 gap-2 justify-center items-center'>
        <div className='flex sm:gap-2 gap-1 justify-center items-center'>
          <Branch />
          <p className='sm:text-sm text-xs text-white font-poppins'>master</p>
        </div>
      </div>
      <div className='flex sm:gap-4 gap-2 justify-center items-center'>
        <div className='flex justify-center items-center text-sm text-white font-poppins sm:gap-2 gap-1'>
          <img src={ricon} alt="" height={16} width={16} />
          <p>React Js</p>
        </div>
        <div className='flex justify-center items-center text-xs sm:text-sm text-white font-poppins sm:gap-1'>
          <img src={ticon} alt="" width={16} height={16} color="white"/>
          <p>Prettier</p>
        </div>
        <Bell />
      </div>
    </div>
  )
}

export default Footer