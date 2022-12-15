import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteContactMsg } from '../../api/contact'
import Bin from '../../icons/Bin'

const Contactcard = (props) => {

    // console.log(props.carddata)

    const navigate = useNavigate()

    const deleteContact = async() => {
        const res =await deleteContactMsg(props.contact._id)
        if(res.data.success) {
            navigate('/admin/contacts')
        }

    }
    
  return (
    <div className='bg-drk01 rounded-lg flex flex-col gap-4w-full  sm:w-[40%] max-h-max justify-center items-center sm:px-4 px-2 sm:py-4 py-2'>
        <div className='flex flex-col gap-4 sm:py-4 px-2 sm:px-4 py-2 self-start items-baseline w-full'>
            <div className='w-full flex justify-end' onClick={deleteContact}>
                <Bin />
            </div>
            <div className='w-full text-lg sm:text-xl font-normal font-poppins '>
                Name: {props.contact.name}
            </div>
            <div className='w-full text-lg sm:text-xl font-normal font-poppins '>
                Subject : {props.contact.subject}
            </div>
            <div className='w-full text-lg sm:text-xl font-normal font-poppins '>
                Message :{props.contact.message}
            </div>
            <div className='w-full text-lg sm:text-xl font-normal font-poppins '>
                Email: {props.contact.email}
            </div>
        </div>
        <div className='w-full'>
            <input type="text" placeholder='Reply' className='w-full h-14 bg-drk00 border-white border-1 rounded-lg text-white px-3'/>
        </div>
    </div>
  )
}

export default Contactcard