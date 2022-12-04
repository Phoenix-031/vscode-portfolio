import React from 'react'
import Sidefilestab from '../components/Sidefilestab'
import Sidenav from '../components/Sidenav'
import Window from './Window'

const Content = () => {
  return (
    <div className='row-start-2 row-end-3 grid grid-cols-collayout h-full overflow-hidden'>
        <Sidenav />
        <Sidefilestab />
        <Window />

    </div>
  )
}

export default Content