import React, { useContext,FormEvent } from 'react'
import { useState } from 'react'
// import {LoginAdmin} from '../api/user'
import ModalLoader from '../components/utils/ModalLoader'
import {useNavigate} from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { AdminLogin } from '../context/Actions'
import { useLazyQuery } from '@apollo/client'
import { LOGIN_ADMIN } from '../services/api-v2/Queries/adminQuery.graphql'

const ProfileLogin = () => {

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [login,{loading,error,data}] = useLazyQuery(LOGIN_ADMIN,{
      // pollInterval:200,
      fetchPolicy: "network-only",
      onCompleted: (data) => {
            if(data?.loginAdmin.success){
          dispatch(AdminLogin(data.loginAdmin.accessToken))
          navigate('/')
            } else {
              if(!data?.loginAdmin.success){
                alert('Login failed')
              }
            }
      }
  })
  // console.log(loading)
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [secret,setSecret] = useState("")
  // const [logging,setLogging] = useState(false)
  const navigate = useNavigate()

  const {dispatch} = useContext(AdminContext)

  const handleAdminLogin = async(e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // setLogging(true)  
    // const res =  await LoginAdmin({email, password, secret}
        // if(!loading) 
    // console.log(data)
 
    await login( {variables : {email:email,password:password}})

    // if(res.data.success){
    //   setLogging(false)
    //   dispatch(AdminLogin(res.data.accessToken))
    //   navigate('/')
    // } else {
    //   setLogging(false)
    //   alert(res.data.msg)
    // }
  }
  
  return (
    <div className=' bg-drk00 w-screen h-screen  text-white text-sm lg:text-xl font-poppins flex justify-center items-center '>
        <div className='border-white border-2 py-20 px-10 flex flex-col gap-4 justify-center items-center rounded-lg'>
          <div>Dashboard</div>
          <form className='flex flex-col gap-3 w-full' onSubmit={handleAdminLogin}>
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
            <div className=' w-full flex justify-center'>
              {
                loading ? <ModalLoader /> : <button className='py-3 px-16 bg-drk01 font-poppins text-sm lg:text-lg rounded-lg font-semibold'>Login</button>
              }
            </div>
          </form>
        </div>
    </div>
  )
}

export default ProfileLogin