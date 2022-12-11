import {React,useContext} from 'react'
import { Link,useLocation } from 'react-router-dom'


import ricon from '../icons/png/react.png'
import hicon from '../icons/png/html.png'
import cicon from '../icons/png/css.png'
import micon from '../icons/png/md.png'
import jicon from '../icons/png/js.png'
import jsonicon from '../icons/png/json.png'
import { TabContext } from '../context/TabContext'
import Cross from '../icons/Cross'
import { RemoveTab } from '../context/Actions'

const Filestab = () => {
  
  const location = useLocation()
  const returnElement = (item) => {
        if(item === '/') {
          return(
              <div key={0} className={`flex gap-2 justify-center items-center text-green-500 sm:text-sm text-xs border-gray-800 px-6 cursor-pointer h-full border-1   hover:bg-drk00 ` + (location.pathname === '/home' ? 'bg-drk00' : 'bg-drk01')}>
                <p>
                  <img src={ricon} alt="" width={18} height={18} />
                </p>
                <Link to='/'>home.jsx</Link>
                {/* <span onClick={handleclose} className="cursor-pointer hover:bg-drk01" id='/'><Cross/></span> */}
              </div>
          )
      } else if (item === '/projects') {
        return(
                  <div key={1} className={`flex gap-2 justify-center items-center text-green-500 sm:text-sm text-xs border-gray-800 px-6 cursor-pointer h-full border-1   hover:bg-drk00 `+ (location.pathname === '/projects' ? 'bg-drk00' : 'bg-drk01')} >
                    <p>
                      <img src={jicon} alt="" width={20} height={20} />
                    </p>
                    <Link to='/projects'>projects.js</Link>
                    <span onClick={handleclose} className="cursor-pointer hover:bg-drk01" id='/projects'><Cross/></span>
                  </div>
        )
      } else if(item === '/about') {
        return(
                  <div key={2} className={`flex gap-2 justify-center items-center text-green-500 sm:text-sm text-xs border-gray-800 px-6 cursor-pointer h-full border-1   hover:bg-drk00 `+ (location.pathname === '/about' ? 'bg-drk00' : 'bg-drk01')} >
                    <p>
                      <img src={hicon} alt="" width={20} height={20} />
                    </p>
                    <Link to='/about'>about.html</Link>
                    <span onClick={handleclose} className="cursor-pointer hover:bg-drk01" id='/about'><Cross/></span>
                  </div>
        )
      } else if(item === '/contact') {
        return(
                <div key={3} className={`flex gap-2 justify-center items-center text-green-500 sm:text-sm text-xs border-gray-800 px-6 cursor-pointer h-full border-1   hover:bg-drk00 `+ (location.pathname === '/contact' ? 'bg-drk00' : 'bg-drk01')} >
                  <p>
                    <img src={cicon} alt="" width={20} height={20} />
                  </p>
                  <Link to='/contact'>contact.css</Link>
                  <span onClick={handleclose} className="cursor-pointer hover:bg-drk01" id='/contact'><Cross/></span>
                </div>
        )
  } else if(item === '/github') {
    return (
            <div key={4} className={`flex gap-2 justify-center items-center text-green-500 sm:text-sm text-xs border-gray-800 px-6 cursor-pointer h-full border-1   hover:bg-drk00 `+ (location.pathname === '/github' ? 'bg-drk00' : 'bg-drk01')} >
              <p>
                <img src={micon} alt="" width={20} height={20} />
              </p>
              <Link to='/github'>github.md</Link>
              <span onClick={handleclose} className="cursor-pointer hover:bg-drk01" id='/github'><Cross/></span>
            </div> 
    )
  } else if(item === '/blogs') {
    return (
      <div key={5} className={`flex gap-2 justify-center items-center text-green-500 sm:text-sm text-xs border-gray-800 px-6 cursor-pointer h-full border-1   hover:bg-drk00 `+ (location.pathname === '/blogs' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={jsonicon} alt="" width={20} height={20} />
        </p>
        <Link to='/blogs'>blogs.json</Link>
        <span onClick={handleclose} className="cursor-pointer hover:bg-drk01" id='/blogs'><Cross/></span>
      </div>
    )
  }
}
  

  const {tabs,dispatch} = useContext(TabContext)


    const handleclose = (e) => {
    // console.log(e.target.parentElement.attributes.id.value)
    dispatch(RemoveTab(e.target.parentElement.attributes.id.value))
  }
  
  
  return (
    <>
<div className='bg-drk01 sm:flex justify-start items-center overflow-auto hidden  '>

      {
        tabs?.map(tab => (returnElement(tab)))
      }
    </div>
    <div className='bg-drk01 flex justify-start items-center overflow-auto sm:hidden  '>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-xs sm:text-sm border-gray-800 px-4 sm:px-6 cursor-pointer h-full border-1 hover:bg-drk00 ` + (location.pathname === '/home' ? 'bg-drk00' : 'bg-drk01')}>
        <p>
          <img src={ricon} alt="" width={18} height={18} />
        </p>
        <Link to='/'>home.jsx</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-xs sm:text-sm border-gray-800 px-4 sm:px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/about' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={hicon} alt="" width={20} height={20} />
        </p>
        <Link to='/about'>about.html</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-xs sm:text-sm border-gray-800 px-4 sm:px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/projects' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={jicon} alt="" width={20} height={20} />
        </p>
        <Link to='/projects'>projects.js</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-xs sm:text-sm border-gray-800 px-4 sm:px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/blogs' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={jsonicon} alt="" width={20} height={20} />
        </p>
        <Link to='/blogs'>blogs.json</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-xs sm:text-sm border-gray-800 px-4 sm:px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/contact' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={cicon} alt="" width={20} height={20} />
        </p>
        <Link to='/contact'>contact.css</Link>
      </div>
      <div className={`flex gap-2 justify-center items-center text-green-500 text-xs sm:text-sm border-gray-800 px-4 sm:px-6 cursor-pointer h-full border-1 hover:bg-drk00 `+ (location.pathname === '/github' ? 'bg-drk00' : 'bg-drk01')} >
        <p>
          <img src={micon} alt="" width={20} height={20} />
        </p>
        <Link to='/github'>github.md</Link>
      </div>
    </div>
    </>
  )
}

export default Filestab