import {React, useContext} from 'react'
import './dist/style.css'
import { Routes,Route } from 'react-router-dom'
import ProfileLogin from './pages/ProfileLogin'

import Portfoliocontent from './pages/Portfoliocontent'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Githubview from "./pages/Githubview"
import Settings from './pages/Settings'
// import Admin from './pages/Admin'
// import Inbox from './pages/Inbox'
import ContactView from './pages/ContactView'
import { AdminContext } from './context/AdminContext'

const App = () => {

  const {user,} = useContext(AdminContext)  
  // const navigate = useNavigate()

  return (
    <div className='overflow-auto w-screen h-screen'>
           <Routes >
              <Route exact path="/dashboardlogin" element={ <ProfileLogin /> } />
              <Route exact path="/admin/contacts" element={
                user ? <ContactView /> : <Home />
              } />
              <Route exact path="/*" element={ <Portfoliocontent /> } >
                  <Route exact path="" element={ <Home /> } />
                  <Route exact path="about" element={ <About /> } />
                  <Route exact path="blogs" element={ <Blogs /> } />
                  <Route exact path="contact" element={ <Contact /> } />
                  <Route exact path="projects" element={ <Projects /> } />
                  <Route exact path="github" element={ <Githubview /> } />
                  <Route exact path="settings" element={ <Settings /> } />
                  <Route exact path="admin/contacts" element={
                    user ? <ContactView /> : <Home />
                  } />
              </Route>
          </Routes> 
    </div>
  )
}

export default App;