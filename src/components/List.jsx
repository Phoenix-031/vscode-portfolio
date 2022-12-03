import React from 'react'
import { Link } from 'react-router-dom'

import ricon from '../icons/png/react.png'
import hicon from '../icons/png/html.png'
import cicon from '../icons/png/css.png'
import micon from '../icons/png/md.png'
import jicon from '../icons/png/js.png'
import jsonicon from '../icons/png/json.png'

const List = (props) => {
  return (
    <>
            <ul className={`w-full pl-4 text-green-500 flex flex-col transition-all duration-100 ease-in`}>
                <li className='flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00'>
                    <img src={ricon} alt=""  height={16} width={16}/>
                    <Link to="/home">home.jsx</Link>
                </li>
                <li className='flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00'>
                    <img src={hicon} alt=""  height={16} width={16}/>
                     <Link to='/about'>about.html</Link>
                </li>
                <li className='flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00'>
                    <img src={jicon} alt="" height={16} width={16} />
                    <Link to='/projects'>projects.js</Link>
                </li>
                <li className='flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00'>
                    <img src={jsonicon} alt="" height={16} width={16}/>
                    <Link to='/blogs'>blogs.json</Link>
                </li>
                <li className='flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00'>
                    <img src={cicon} alt=""  height={16} width={16}/>
                    <Link to='/contact'>contact.css</Link>
                </li>
                <li className='flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00'>
                    <img src={micon} alt=""  height={16} width={16}/>
                    <Link to='/github'>github.md</Link>
                </li>
            </ul>
    </>
  )
}

export default List