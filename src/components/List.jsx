import React, { useContext } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import ricon from '../icons/png/react.png'
import hicon from '../icons/png/html.png'
import cicon from '../icons/png/css.png'
import micon from '../icons/png/md.png'
import jicon from '../icons/png/js.png'
import jsonicon from '../icons/png/json.png'
import { TabContext } from '../context/TabContext'
import { AddTab } from '../context/Actions'


const List = (props) => {
    const location = useLocation()
    const {dispatch} = useContext(TabContext)

    // const [state,dispatch] = useReducer(Reducer,INITIAL_STATE)
    
    const handleclick = (e) => {
        // console.log(e.target.attributes[0].nodeValue)
        console.log(e.target.attributes.id.value)
        dispatch(AddTab(e.target.attributes.id.value))
    }
    
  return (
    <>
            <motion.ul className={`w-full pl-4 text-green-500 flex flex-col transition-all duration-100 ease-in-out`}>
                <Link to='/'>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 ` + (location.pathname === '/home' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-100}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.2
                }}
                exit={{
                    opacity:0,
                    translateY:-100
                }}

                onClick={handleclick}
                id='/'

                >
                    <img src={ricon} alt=""  height={16} width={16}/>
                    {/* <Link to="/">home.jsx</Link> */}
                    home.jsx
                </motion.li>
                </Link>


                <Link to='/about'>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/about' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-100}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.3
                }}
                onClick={handleclick}
                id='/about'
                >
                    <img src={hicon} alt=""  height={16} width={16}/>
                     {/* <Link to='/about'>about.html</Link> */}
                     about.html
                </motion.li>
                </Link>


                <Link to='/projects'>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/projects' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-90}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.4
                }}
                onClick={handleclick}
                id='/projects'
                >
                    <img src={jicon} alt="" height={16} width={16} />
                    {/* <Link to='/projects'>projects.js</Link> */}
                    projects.js
                </motion.li>
                </Link>


                <Link to='/blogs'>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/blogs' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-80}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.5
                }}
                onClick={handleclick}
                id='/blogs'
                >
                    <img src={jsonicon} alt="" height={16} width={16}/>
                    {/* <Link to='/blogs'>blogs.json</Link> */}
                    blogs.json
                </motion.li>
                </Link>

                <Link to='/contact'>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/contact' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-75}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.6
                }}
                onClick={handleclick}
                id='/contact'
                >
                    <img src={cicon} alt=""  height={16} width={16}/>
                    {/* <Link to='/contact'>contact.css</Link> */}
                    contact.css
                </motion.li>
                </Link>


                <Link to={'/github'}>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/github' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-70}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.7
                }}
                onClick={handleclick}
                id='/github'
                >
                    <img src={micon} alt=""  height={16} width={16}/>
                    {/* <Link to='/github'>github.md</Link> */}
                    github.md
                </motion.li>
                </Link>
            </motion.ul>
    </>
  )
}

export default List