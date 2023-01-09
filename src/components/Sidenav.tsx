// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Code from '../icons/Code'
import Plus from '../icons/Plus'
import Messages from '../icons/Messages'
import Logout from '../icons/Logout'
import Contact from '../icons/Contact'
import Edit from '../icons/Edit'
import FileIcon from '../icons/File'
import Github from '../icons/Github' 
import Profile from '../icons/Profile'
import Settings from '../icons/Settings'
import AddProjectModal from './AddProjectModal'
// import { verfiyAdmin } from '../api/user'
import { AdminContext } from '../context/AdminContext'
import { AdminLogout } from '../context/Actions'
import { useMutation, useQuery } from '@apollo/client'
import { UPDATE_PROJECT } from '../Mutations/projectMutation'
import { VERIFY_ADMIN } from '../Queries/adminQuery'

const Sidenav = () => {

  const [modal,setModal] = useState<boolean>(false)
  const [verified,setVerified] = useState<boolean>(false)
  const {user,dispatch} = useContext(AdminContext)
  const navigate = useNavigate()

  const changeModalState = () => {
    setModal(!modal)
  }


  const handleAddProject = () => {
    setModal(!modal)
  }

    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const {loading,data} = useQuery(VERIFY_ADMIN,{
    variables:{
        token : user.User
      },
    onCompleted:(data) => {
      if(data?.success)
        setVerified(true)
    },
    onError:(error)=>{
      console.log(error)
      setVerified(false)
    }
  })
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [updateProj,upres] = useMutation(UPDATE_PROJECT,{
    fetchPolicy:"network-only",
    onCompleted: (data) => {
      if(data?.updateProject._id){
        setModal(true)
      } 
    },
    onError: (error) => {
          console.log(error)
          console.log("could not update project")
          setModal(false)
    }
  })


  // useEffect(() => {
    // const verifyAdminPriviledge = async () => {

    //     const res = await verfiyAdmin(user.User)
    //       if(res.data.success){
    //         setVerified(true)
    //         } else {
    //           setVerified(false)
    //         }
    //   }

    // verifyAdminPriviledge()
//  console.log(user.User)
//     Adminverification({
      // variables:{
      //   token : user.User
      // }
//     })
    
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[user.User])
  

  const handleLogout = () => {
    dispatch(AdminLogout(false))
    alert("logged out successfully")
    navigate('/')
  }

  // const handleMessages = () => {
  //   console.log("asfkgjh")
  //   // Navigate('/contacts')
  // }
  
  return (
     <>
     {console.log(verified)}

     {
      modal ? <AddProjectModal changeParentState = {changeModalState} /> : null
     }
     
 <div className=' flex flex-col justify-between items-center bg-drk00 '>
        <div className='bg-drk00 row-start-2 pt-4 flex flex-col justify-start items-center sm:w-full'>
          <div className="cursor-pointer sm:w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01 focus-within:border-l-2 border-l-skin">
            <FileIcon />
          </div>
          <div  className="cursor-pointer sm:w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
            <a href="https://github.com/Phoenix-031" target="blank"><Github /></a>
          </div>
          <div className="cursor-pointer sm:w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
            <Link to='/blogs'><Edit width={20} height={20} /></Link>
          </div>
          <div className="cursor-pointer sm:w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
            <Link to='/contact'><Contact /></Link>
          </div>
         <div className="cursor-pointer sm:w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01">
           <Link to='/projects'><Code /></Link>
         </div>
         {user.User ? (
          <div className="flex flex-col gap-3 justify-center items-center">
          <div onClick={handleAddProject} className='relative'><Plus width={20} height={20} /></div>
          {/* <div onClick={handleMessages}><Messages width={20} height={20} /></div> */}
          <Link to='/admin/contacts'><Messages width={20} height={20} /></Link>
          </div>
         ): null
         }
       </div>

       <div className="flex flex-col justify-end items-center bg-drk00   row-start-5 cursor-pointer pb-3 w-full">
        <div className='cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01'>
          {
            user.User ? (<div onClick={handleLogout}><Logout width={20} height={20} /></div>) :(
              <Link to='/dashboardlogin'><Profile /> </Link>
            )
          }
        </div>
        <div className='cursor-pointer w-full bg-drk00 flex justify-center items-center py-2  hover:bg-drk01'>
          <Link to='/settings'><Settings /></Link>
        </div>
       </div>
      </div>
     </>
  )
}

export default Sidenav

