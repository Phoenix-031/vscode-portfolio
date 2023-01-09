// import {React} from 'react'
import { Routes,Route } from 'react-router-dom'
import ProfileLogin from '../pages/ProfileLogin'
import { useLocation } from 'react-router-dom'


import Portfoliocontent from '../pages/Portfoliocontent'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Blogs from '../pages/Blogs'
import Githubview from "../pages/Githubview"
import Settings from '../pages/Settings'

import {AnimatePresence}  from 'framer-motion'

const Animatedroutes = () => {

    const location = useLocation()
    
    
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/dashboard" element={ <ProfileLogin /> } />
        <Route path="/" element={ <Portfoliocontent /> } >
            <Route path="home" element={ <Home /> } />
            <Route path="about" element={ <About /> } />
            <Route path="blogs" element={ <Blogs /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="projects" element={ <Projects /> } />
            <Route path="github" element={ <Githubview /> } />
            <Route path="settings" element={ <Settings /> } />
        </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default Animatedroutes