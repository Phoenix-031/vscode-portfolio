import React from 'react'
import Dropdown from './Dropdown'

const Sidefilestab = () => {
  return (
    <div className='sm:bg-drk01 sm:border-black sm:flex sm:flex-col sm:justify-start sm:items-baseline sm:col-start-2 sm:visible hidden'>
        <div className='text-lg font-serif text-white px-2 py-3'>Explorer</div>
        <Dropdown />
    </div>
  )
}

export default Sidefilestab