import React from 'react'

const ProfileLogin = () => {
  return (
    <div className=' bg-drk00 w-screen h-screen  text-white text-xl font-poppins flex justify-center items-center '>
        <div className='border-white border-2 py-20 px-10 flex flex-col gap-4 justify-center items-center rounded-lg'>
          <div>Dashboard</div>
          <form className='flex flex-col gap-3 w-full'>
            <div className='flex flex-col justify-start items-baseline gap-2'>
              <label htmlFor="email">Email</label>
              <input required type="email" id = "email" className='rounded-lg h-15 py-2 px-4 text-xl text-gray-800 flex justify-center items-center bg-gray-400 font-Enriqueta font-medium  focus:outline-none'/>
            </div>
            <div className='flex flex-col justify-start items-baseline gap-2'>
              <label htmlFor="password">Password</label>
              <input required type="password" id = "password" className='rounded-lg h-15 py-2 px-4 text-xl text-gray-800 flex justify-center items-center bg-gray-400 font-Enriqueta font-medium  focus:outline-none'/>
            </div>
            <div className='flex flex-col justify-start items-baseline gap-2'>
              <label htmlFor="secret">Secret phrase</label>
              <input required type="text" id = "secret" className='rounded-lg h-15 py-2 px-4 text-xl text-gray-800 flex justify-center items-center bg-gray-400 font-Enriqueta font-medium  focus:outline-none'/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default ProfileLogin