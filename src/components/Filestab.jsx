import React from 'react'
import { Link,useLocation } from 'react-router-dom'


import ricon from '../icons/png/react.png'
import hicon from '../icons/png/html.png'
import cicon from '../icons/png/css.png'
import micon from '../icons/png/md.png'
import jicon from '../icons/png/js.png'
import jsonicon from '../icons/png/json.png'
import { useState } from 'react'

const Filestab = () => {

  const location = useLocation()

  // const [tabs,setTabs] = useState(JSON.parse(localStorage.getItem('tabs')))

  // const returnElement = (item) => {
  //       if(item === '/') {
  //         return(
  //             <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 ` + (location.pathname === '/home' ? 'bg-drk00' : 'bg-drk01')}>
  //             <p>
  //               <img src={ricon} alt="" width={18} height={18} />
  //             </p>
  //             <Link to='/'>home.jsx</Link>
  //           </div>
  //         )
  //     } else if (item === '/projects') {
  //       return(
  //                 <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/projects' ? 'bg-drk00' : 'bg-drk01')} >
  //       <p>
  //         <img src={jicon} alt="" width={20} height={20} />
  //       </p>
  //       <Link to='/projects'>projects.js</Link>
  //     </div>
  //       )
  //     } else if(item === '/about') {
  //       return(
  //                 <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/about' ? 'bg-drk00' : 'bg-drk01')} >
  //       <p>
  //         <img src={hicon} alt="" width={20} height={20} />
  //       </p>
  //       <Link to='/about'>about.html</Link>
  //     </div>
  //       )
  //                 }
  // }

  
  return (
    <div className='bg-drk01 flex justify-start items-center'>

      {/* {
        tabs.map(item => (
          returnElement(item)
        ))
      } */}

      
      <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 ` + (location.pathname === '/home' ? 'bg-drk00' : 'bg-drk01')}>
        <p>
          <img src={ricon} alt="" width={18} height={18} />
        </p>
        <Link to='/'>home.jsx</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/about' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={hicon} alt="" width={20} height={20} />
        </p>
        <Link to='/about'>about.html</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/projects' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={jicon} alt="" width={20} height={20} />
        </p>
        <Link to='/projects'>projects.js</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/blogs' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={jsonicon} alt="" width={20} height={20} />
        </p>
        <Link to='/blogs'>blogs.json</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/contact' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={cicon} alt="" width={20} height={20} />
        </p>
        <Link to='/contact'>contact.css</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-sm border-gray-800 px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/github' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={micon} alt="" width={20} height={20} />
        </p>
        <Link to='/github'>github.md</Link>
      </div>
    </div>
  )
}

export default Filestab