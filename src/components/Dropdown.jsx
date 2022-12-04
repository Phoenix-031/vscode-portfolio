import React from 'react'
import { useState } from 'react'
import Expandmore from '../icons/Expandmore'
import List from './List'



const Dropdown = () => {

    const [open,setOpen] = useState(false)

    const handledropdown = () => {
        setOpen(!open)
    }
     
    
  return (
    <div className='w-full'>
        <div className='text-white font-varela text-sm pl-3 flex flex-col justify-start items-center gap-1' >
            <div className={`flex gap-1 justify-start items-center w-full`} onClick={handledropdown}>
                <Expandmore />
                <p className='cursor-pointer hover:bg-drk00 w-full'>Portfolio</p>
            </div>
            {
                open && (<List toggle={`${open}`} />)
            }
        </div>

    </div>
  )
}

export default Dropdown