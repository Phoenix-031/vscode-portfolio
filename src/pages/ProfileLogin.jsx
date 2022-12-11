import React, { useContext } from 'react'
import { useState } from 'react'
import {LoginAdmin} from '../api/user'
import ModalLoader from '../components/ModalLoader'
import {useNavigate} from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { AdminLogin } from '../context/Actions'

const ProfileLogin = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [secret,setSecret] = useState("")
  const [logging,setLogging] = useState(false)
  const navigate = useNavigate()

  const {dispatch} = useContext(AdminContext)

  const handleAdminLogin = async(e) => {
    e.preventDefault()
    setLogging(true)

    const res =  await LoginAdmin({email, password, secret})

    if(res.data.success){
      setLogging(false)
      dispatch(AdminLogin(res.data.accessToken))
      navigate('/')
    } else {
      setLogging(false)
      alert(res.data.msg)
    }
  }
  
  return (
    <div className=' bg-drk00 w-screen h-screen  text-white text-sm lg:text-xl font-poppins flex justify-center items-center '>
        <div className='border-white border-2 py-20 px-10 flex flex-col gap-4 justify-center items-center rounded-lg'>
          <div>Dashboard</div>
          <form className='flex flex-col gap-3 w-full' onSubmit={handleAdminLogin} type="submit">
            <div className='flex flex-col justify-start items-baseline gap-2'>
              <label htmlFor="email">Email</label>
              <input required type="email" value={email} id = "email" className='bg-drk00 h-15 py-2 px-4 text-sm lg:text-xl text-white flex justify-center items-center border-b-2 border-b-gray-400 font-Enriqueta font-medium  focus:outline-none'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              />
            </div>
            <div className='flex flex-col justify-start items-baseline gap-2'>
              <label htmlFor="password">Password</label>
              <input required type="password" value={password} id = "password" className='bg-drk00 h-15 py-2 px-4 text-sm lg:text-xl text-white flex justify-center items-center border-b-2 border-b-gray-400 font-Enriqueta font-medium  focus:outline-none'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              />
            </div>
            <div className='flex flex-col justify-start items-baseline gap-2'>
              <label htmlFor="secret">Secret phrase</label>
              <input required type="text" value={secret} id = "secret" className='bg-drk00 h-15 py-2 px-4 text-sm lg:text-xl text-white flex justify-center items-center border-b-2 border-b-gray-400 font-Enriqueta font-medium  focus:outline-none'
              onChange={(e) => {
                setSecret(e.target.value)
              }}
              />
            </div>
            <div className='border-white border-2 w-full flex justify-center'>
              {
                logging ? <ModalLoader /> : <button className='py-3 px-5 font-poppins text-sm lg:text-lg rounded-lg font-semibold'>Login</button>
              }
            </div>
          </form>
        </div>
    </div>
  )
}

export default ProfileLogin