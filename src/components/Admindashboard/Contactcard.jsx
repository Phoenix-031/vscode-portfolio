import React from 'react'

const Contactcard = (props) => {

    // console.log(props.carddata)
    
  return (
    <div className='bg-drk01 rounded-lg flex flex-col gap-4 w-[40%] max-h-max justify-center items-center px-4 py-4'>
        <div className='flex flex-col gap-4 py-4 px-4 self-start items-baseline'>
            <div className='w-full text-xl font-normal font-poppins '>
                Name: {props.contact.name}
            </div>
            <div className='w-full text-xl font-normal font-poppins '>
                Subject : {props.contact.subject}
            </div>
            <div className='w-full text-xl font-normal font-poppins '>
                Message :{props.contact.message}
            </div>
            <div className='w-full text-xl font-normal font-poppins '>
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