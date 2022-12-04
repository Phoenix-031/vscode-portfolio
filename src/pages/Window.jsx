import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Filestab from '../components/Filestab'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Blogs from './Blogs'
import Githubview from "./Githubview"
import Settings from './Settings'
import { useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'


const Window = () => {

      const location = useLocation()
  
  return (
    
    <div className='col-start-3 grid grid-rows-windiv overflow-hidden h-full'>
        <Filestab className="sticky" />

        <AnimatePresence>
          <Routes  location={location} key={location.pathname}>
              <Route exact path="home" element={ <Home /> } />
              <Route exact path="about" element={ <About /> } />
              <Route exact path="blogs" element={ <Blogs /> } />
              <Route exact path="contact" element={ <Contact /> } />
              <Route exact path="projects" element={ <Projects /> } />
              <Route exact path="github" element={ <Githubview /> } />
              <Route exact path="settings" element={ <Settings /> } />
              
          </Routes>
        </AnimatePresence>
      
    </div>
  )
}

export default Window