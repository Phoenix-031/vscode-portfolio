/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useMemo, useState } from 'react'
import {motion} from 'framer-motion'
import Terminal from '../components/Terminal'
import { TabContext } from '../context/TabContext'
import Contactcard from '../components/Admindashboard/Contactcard'
import { getMessages } from '../api/contact'
import { AdminContext } from '../context/AdminContext'


const ContactView = () => {

    const {terminal} = useContext(TabContext)
    const {user} = useContext(AdminContext)
    const [conlist,setConList] = useState([])
    const [empty,setEmpty] = useState(false)

    useMemo(() => {
      const getAllContacts = async() => {
        const con = await getMessages(user)

        if(con.data.success) {
          // console.log(con.data.con)
          setConList(con.data.con)
        } else {
          setEmpty(true)
    
        }
      }

      getAllContacts()
    },[])
    
  return (
    <>
    <motion.div className=' bg-drk00 row-start-2 text-white text-sm md:text-xl font-poppins relative md:overflow-y-auto overflow-x-hidden justify-center items-start h-full flex gap-4 py-5 px-5 flex-wrap'
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    >
      {
        conlist.map((contact) => {
          return <Contactcard key={contact._id} contact={contact} />
        })
      }
    </motion.div>

      {
        terminal ? <Terminal /> : null
      }
    </>
  )
}

export default ContactView