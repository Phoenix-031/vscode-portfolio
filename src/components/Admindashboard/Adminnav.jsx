import React from 'react'

const Adminnav = () => {
  return (
    <div className='w-full flex justify-center items-center gap-4 text-xl text-white font-medium font-Enriqueta'>
        <div className='cursor-pointer'>Admin</div>
        <div className='cursor-pointer'>Dashboard</div>
        <div className='cursor-pointer'>Inbox</div>
        <div className='cursor-pointer'>Logout</div>
    </div>
  )
}

export default Adminnav