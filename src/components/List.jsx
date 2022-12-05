import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
// import { createContext,useContext,useEffect } from 'react'

import ricon from '../icons/png/react.png'
import hicon from '../icons/png/html.png'
import cicon from '../icons/png/css.png'
import micon from '../icons/png/md.png'
import jicon from '../icons/png/js.png'
import jsonicon from '../icons/png/json.png'

// const ListContext = createContext(JSON.parse(localStorage.getItem('listtabs')))


const List = (props) => {
    const location = useLocation()

    // const handleclick = (e) => {
    //     console.log(e)
    //     // const tabsarr = JSON.stringify((JSON.parse(localStorage.getItem("tabs"))).push(e.target.href))
        
    //     // localStorage.setItem('tabs',tabsarr)
    // }
    
  return (
    <>
            <motion.ul className={`w-full pl-4 text-green-500 flex flex-col transition-all duration-100 ease-in-out`}>
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

                // onClick={handleclick}

                >
                    <img src={ricon} alt=""  height={16} width={16}/>
                    <Link to="/">home.jsx</Link>
                </motion.li>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/about' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-100}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.3
                }}
                // onClick={handleclick}
                >
                    <img src={hicon} alt=""  height={16} width={16}/>
                     <Link to='/about'>about.html</Link>
                </motion.li>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/projects' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-90}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.4
                }}
                // onClick={handleclick}
                >
                    <img src={jicon} alt="" height={16} width={16} />
                    <Link to='/projects'>projects.js</Link>
                </motion.li>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/blogs' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-80}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.5
                }}
                // onClick={handleclick}
                >
                    <img src={jsonicon} alt="" height={16} width={16}/>
                    <Link to='/blogs'>blogs.json</Link>
                </motion.li>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/contact' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-75}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.6
                }}
                // onClick={handleclick}
                >
                    <img src={cicon} alt=""  height={16} width={16}/>
                    <Link to='/contact'>contact.css</Link>
                </motion.li>
                <motion.li  className={`flex justify-start items-center gap-2 cursor-pointer py-1 hover:bg-drk00 `+ (location.pathname === '/github' ? 'bg-drk00' : 'bg-drk01')}
                initial={{opacity:0,translateY:-70}}
                animate={{opacity:1,translateY:0}}
                transition={{
                    delay:0.7
                }}
                // onClick={handleclick}
                >
                    <img src={micon} alt=""  height={16} width={16}/>
                    <Link to='/github'>github.md</Link>
                </motion.li>
            </motion.ul>
    </>
  )
}

export default List