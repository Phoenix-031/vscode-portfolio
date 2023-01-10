import React, { useContext } from 'react'
import { TerminalToggle } from '../context/Actions'
import { TabContext } from '../context/TabContext'

const Topnav = () => {

  const {terminal,dispatch}  = useContext(TabContext)

  const handleTerminalToggle = () => {
    dispatch(TerminalToggle(!terminal))
  }
  
  return (
    <div className='flex justify-between text-white sm:px-2 px-1 items-center  w-100 bg-drk00 border-black row-start-1 row-span-1'>
            <div>
              <ul className='font-normal sm:text-sm text-xs flex justify-start items-center sm:gap-3 gap-2'>
                <li className='cursor-pointer'>File</li>
                <li className='cursor-pointer'>Edit</li>
                <li className='cursor-pointer' >Selection</li>
                <li className='cursor-pointer'>View</li>
                <li className='cursor-pointer'>Run</li>
                <li className='cursor-pointer' onClick={handleTerminalToggle}>Terminal</li>
                <li className='cursor-pointer'>Help</li>
              </ul> 
            </div>
            <div className='sm:text-lg text-xs md:text-sm hidden sm:visible sm:block'>c</div>
            <div className='sm:flex sm:gap-2 gap-1 hidden'>
              <div className='w-4 h-4 bg-yellow-300 rounded-full'></div>
              <div className='w-4 h-4 bg-green-400 rounded-full'></div>
              <div className='w-4 h-4 bg-red-600 rounded-full'></div>
            </div>
    </div>
  )
}

export default Topnav