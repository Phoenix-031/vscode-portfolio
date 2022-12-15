import React, { useContext} from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Filestab from '../components/Filestab'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Blogs from './Blogs'
import Githubview from "./Githubview"
import Settings from './Settings'
import { useLocation } from 'react-router-dom'
import { TabContext } from '../context/TabContext'

import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import ContactView from './ContactView'
import { AdminContext } from '../context/AdminContext'
import Lol from '../components/Lol'
import Open from './Open'


const Window = () => {

      const location = useLocation()
      const navigate = useNavigate()
      const {user} = useContext(AdminContext)

      const {terminal} = useContext(TabContext)

      
      const {tabs,} = useContext(TabContext)

      useEffect(() => {
        if(tabs[tabs.length-1] !== location.pathname) {
          console.log(tabs[tabs.length-1])
          navigate(tabs[tabs.length-1])
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[tabs])
  
  return (
    
    <div className={` grid overflow-auto h-full sm:col-start-3 col-start-2 ${terminal ? 'grid-rows-terminal' : 'grid-rows-windiv'}`}>
        <Filestab className="sticky" />

        <AnimatePresence>
          <Routes  location={location} key={location.pathname}>
              <Route exact path="" element={ <Home /> } />
              <Route exact path="about" element={ <About /> } />
              <Route exact path="blogs" element={ <Blogs /> } />
              <Route exact path="contact" element={ <Contact /> } />
              <Route exact path="projects" element={ <Projects /> } />
              <Route exact path="github" element={ <Githubview /> } />
              <Route exact path="settings" element={ <Settings /> } />
              <Route exact path="contacts" element={ <ContactView /> } />   
              <Route exact path="open" element={ <Open /> } />   
              <Route exact path="admin/contacts" element={
                    user ? <ContactView /> : <Lol />
                  } />  
          </Routes>
        </AnimatePresence>
      
    </div>
  )
}

export default Window