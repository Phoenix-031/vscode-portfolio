import React from 'react'
import { Link } from 'react-router-dom'

import Code from '../icons/Code'
import Contact from '../icons/Contact'
import Edit from '../icons/Edit'
import FileIcon from '../icons/File'
import Github from '../icons/Github' 
import Profile from '../icons/Profile'
import Settings from '../icons/Settings'

const Sidenav = () => {
  return (
      <div className=' flex flex-col justify-between items-center bg-drk00'>
        <div className='bg-drk00 row-start-2 pt-4 flex flex-col justify-start items-center w-full'>
          <div className="cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01 focus-within:border-l-2 border-l-skin">
            <FileIcon />
          </div>
          <div  className="cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
            <a href="https://github.com/Phoenix-031" target="blank"><Github /></a>
          </div>
          <div className="cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
            <Link to='/blogs'><Edit /></Link>
          </div>
          <div className="cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
            <Link to='/contact'><Contact /></Link>
          </div>
         <div className="cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
           <Link to='/projects'><Code /></Link>
         </div>
       </div>

       <div className="flex flex-col justify-end items-center bg-drk00   row-start-5 cursor-pointer pb-3 w-full">
        <div className='cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01'>
          <Link to='/dashboardlogin'><Profile /></Link>
        </div>
        <div className='cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01'>
          <Link to='/settings'><Settings /></Link>
        </div>
       </div>
      </div>
  )
}

export default Sidenav