import React from 'react'
import Dropdown from './Dropdown'

const Sidefilestab = () => {
  return (
    <div className='bg-drk01 col-start-2 border-black flex flex-col justify-start items-baseline'>
        <div className='text-lg font-serif text-white px-2 py-3'>Explorer</div>
        <Dropdown />
    </div>
  )
}

export default Sidefilestab