import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminnav from '../components/Admindashboard/Adminnav'
import Inbox from './Inbox'


const Admin = () => {
  return (
    <div className='flex flex-col w-full h-full flex-2'>
        <Adminnav />                                                                  

        <Routes>
          <Route exact path='/inbox' component={<Inbox />} />
        </Routes>
        
    </div>
  )
}

export default Admin