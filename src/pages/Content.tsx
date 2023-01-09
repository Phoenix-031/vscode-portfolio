import React from 'react'
import Sidefilestab from '../components/Sidefilestab'
import Sidenav from '../components/Sidenav'
import Window from './Window'

const Content = () => {
  return (
    <div className='row-start-2 row-end-3 grid h-full overflow-hidden sm:grid-cols-collayout grid-cols-mobilr-s-grid'>
        <Sidenav />
        <Sidefilestab />
        <Window />

    </div>
  )
}

export default Content

// mobile:grid-cols-mobilr-s-grid