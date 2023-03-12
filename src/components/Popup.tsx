//TO CHANGE

/* eslint-disable no-unused-vars */
import {FC, MouseEvent} from 'react'
import { motion } from 'framer-motion'
// import { removeProject } from '../api/projects'
import { DELETE_PROJECT } from '../services/api-v2/Mutations/projectMutation.graphql'
import { useMutation } from '@apollo/client'

interface PopupProps {
    changeParentState():void,
    cardid:string
}

const Popup : FC<PopupProps> = (props) => {
    // console.log(props.cardid)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [delProj,{loading,data}] = useMutation(DELETE_PROJECT,{
        fetchPolicy:"network-only",
        onCompleted:(data)=>{
            if(data?.deleteProject.success){
               props.changeParentState()
            }
            else {
                console.log("Project could not be deleted")
                props.changeParentState()
            }

        }
    })

    const handledelete = async(e : MouseEvent<HTMLButtonElement, MouseEvent> | any) => {

            
    // const res = await removeProject(props.cardinfo)
    delProj({
    variables:{
            id:props.cardid,
            token: localStorage.getItem('user')
        }
    })

    // if(!loading &&  data?.deletepProject._id.length > 0) {
    //     props.changeParentState()
    // }

    }

    const handledeny = () => {
        props.changeParentState()
    }
    
  return (

    <div className='w-screen h-screen top-0 left-0 fixed flex justify-center items-center bg-blur/30 backdrop-blur-sm z-10'
    id='wrapper'
    onClick={(e : any) => {
        if(e.target.id === 'wrapper') {
            props.changeParentState()
        }
    }}
    >
        <motion.div
            initial={{ opacity: 0,translateY:-150 }}
            animate={{ opacity: 1,translateY:0 }}
            transition={{
                duration: 0.5,
                // ease: 'easeInOut',
                type:'spring',
                stiffness:100
            }}
            className="flex flex-col justify-center items-center gap-4 sm:max-w-max py-3 bg-drk00 px-3 rounded-lg"
            id='not-wrapper'
        >
            <p className='text-white font-poppins'>Delete this entry?</p>
            <div className='flex justify-center gap-16 items-center w-full'>
                <button className='rounded-lg text-lg sm:text-xl bg-drk01 font-poppins py-3 px-5 font-normal text-white' onClick={handledelete}>Confirm</button>
                <button className='rounded-lg text-lg sm:text-xl bg-drk01 font-poppins py-3 px-5 font-normal text-white' onClick={handledeny} >Deny</button>
            </div>
        </motion.div>
    </div>

  )
}

export default Popup