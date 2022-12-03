import React from 'react'

import Topnav from '../components/Topnav'
import Footer from '../components/Footer'
import Content from '../pages/Content'

const Portfoliocontent = () => {
  return (
    <>
    <div className='grid grid-rows-flaybout h-screen'>
      <Topnav />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default Portfoliocontent