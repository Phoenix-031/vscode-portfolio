import {React} from 'react'
import './dist/style.css'
import { Routes,Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ProfileLogin from './pages/ProfileLogin'

// import Topnav from './components/Topnav'
// import Footer from './components/Footer'
// import Content from './pages/Content'
import Portfoliocontent from './pages/Portfoliocontent'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Githubview from "./pages/Githubview"
import Settings from './pages/Settings'
import Animatedroutes from './components/Animatedroutes'

import {AnimatePresence}  from 'framer-motion'

const App = () => {

      // const location = useLocation
  
  return (
    <Animatedroutes />
    // <AnimatePresence>
    // <Routes location={location} key={location.pathname}>
    //   <Route exact path="/dashboard" element={ <ProfileLogin /> } />
    //   <Route exact path="/" element={ <Portfoliocontent /> } >
    //       <Route exact path="home" element={ <Home /> } />
    //       <Route exact path="about" element={ <About /> } />
    //       <Route exact path="blogs" element={ <Blogs /> } />
    //       <Route exact path="contact" element={ <Contact /> } />
    //       <Route exact path="projects" element={ <Projects /> } />
    //       <Route exact path="github" element={ <Githubview /> } />
    //       <Route exact path="settings" element={ <Settings /> } />
    //   </Route>
    // </Routes>
    // </AnimatePresence>
  )
}

export default App;