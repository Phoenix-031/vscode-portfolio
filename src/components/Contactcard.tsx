/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { deleteContactMsg } from '../services/api-v1/contact'
import Bin from '../icons/Bin'
import { useMutation } from '@apollo/client'
import { DELETE_MESSAGE } from '../services/api-v2/Mutations/contactMutation.graphql'

interface ContactProps {
    contact : {
            _id:string,
            name:string,
            email:string,
            message:string,
            subject:string
    }
}

const Contactcard : FC<ContactProps>= (props) => {

    // console.log(props.carddata)
    // eslint-disable-next-line no-unused-vars
    const [delcon,delres] = useMutation(DELETE_MESSAGE,{
        fetchPolicy: "network-only",
        onCompleted: (data) => {
            if(data?.deleteMessage.success) {
                navigate('/admin/contacts')
            } else {
                console.log("could not delete message")
            }
        },
    })

    const navigate = useNavigate()

    const deleteContact = async() => {
        // const res =await deleteContactMsg(props.contact._id)
        delcon({
            variables:{
                id: props.contact._id,
                token: localStorage.getItem('user')
            }
        })
        // if(res.data.success) {
        //     navigate('/admin/contacts')
        // }

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