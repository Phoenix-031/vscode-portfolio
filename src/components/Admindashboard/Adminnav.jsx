import React from 'react'
import { Link } from 'react-router-dom'

const Adminnav = () => {
  return (
    <div className='w-full flex flex-2 justify-between px-6 py-4 items-center gap-4 text-xl text-white font-medium font-Enriqueta border-white border-2'>
      <div className='flex justify-start items-center gap-4'>
        <div className='cursor-pointer text-2xl font-poppins'>Admin</div> 
        <div className='cursor-pointer'>
          <Link to='/admin/inbox'>Inbox</Link>
        </div>
        <div className='cursor-pointer'>Projects</div>
        <div className='cursor-pointer'>Blogs</div>
        <div className='cursor-pointer'>General Info</div>
      </div>
        <div className='cursor-pointer'>Logout</div>
    </div>
  )
}

export default Adminnav