import React, { useState } from 'react'
import { useEffect } from 'react'
import { getMessages } from '../../api/contact'
import Loading from './Loading'
import Contactcard from './Contactcard'

const Inbox = () => {

    const [fetching,setFetching] = useState(true)
    const [contactdata,setContactdata] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const data = await getMessages()

            console.log(data.data.con)
            setContactdata(data.data.con)
            setFetching(false)
        }
        fetchData()
    },[])
    
  return (
    <div className='border-white border-2 text-white font-Enriqueta w-full flex-1 gap-4 flex flex-wrap justify-center items-center px-5 py-5 bg-drk00'>
        {fetching ? (<Loading />) : (
            contactdata?.map((data,ind) => (
                <Contactcard key={ind} carddata = {data}/>
            ))
        )}
    </div>
  )
}

export default Inbox