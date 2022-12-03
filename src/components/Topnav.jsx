import React from 'react'

const Topnav = () => {
  return (
    <div className='flex justify-between text-white px-2 items-center  w-100 bg-drk00 border-black row-start-1 row-span-1'>
            <div>
              <ul className='font-normal text-sm flex justify-start items-center gap-3'>
                <li className='cursor-pointer'>File</li>
                <li className='cursor-pointer'>Edit</li>
                <li className='cursor-pointer' >Selection</li>
                <li className='cursor-pointer'>View</li>
                <li className='cursor-pointer'>Run</li>
                <li className='cursor-pointer'>Terminal</li>
                <li className='cursor-pointer'>Help</li>
              </ul> 
            </div>
            <div className=''>Visual Studio Code</div>
            <div className='flex gap-2'>
              <div className='w-4 h-4 bg-yellow-300 rounded-full'></div>
              <div className='w-4 h-4 bg-green-400 rounded-full'></div>
              <div className='w-4 h-4 bg-red-600 rounded-full'></div>
            </div>
    </div>
  )
}

export default Topnav