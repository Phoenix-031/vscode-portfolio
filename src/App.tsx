import {useContext,FC} from 'react'
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
import ContactView from './pages/ContactView'
import { AdminContext } from './context/AdminContext'
import Lol from './components/utils/Lol'
 
const App :FC = () => {

  const {user} = useContext(AdminContext)  
  // const navigate = useNavigate()

  return (
    <div className='overflow-auto w-screen h-screen'>
           <Routes >
              <Route path="/dashboardlogin" element={ <ProfileLogin /> } />
              <Route path="/admin/contacts" element={
                user ? <ContactView /> : <Lol />
              } />
              <Route path="/*" element={ <Portfoliocontent /> } >
                  <Route path="" element={ <Home /> } />
                  <Route path="about" element={ <About /> } />
                  <Route path="blogs" element={ <Blogs /> } />
                  <Route path="contact" element={ <Contact /> } />
                  <Route path="projects" element={ <Projects /> } />
                  <Route path="github" element={ <Githubview /> } />
                  <Route path="settings" element={ <Settings /> } />
                  <Route path="admin/contacts" element={
                    user ? <ContactView /> : <Home />
                  } />
              </Route>
          </Routes> 
    </div>
  )
}

export default App;