import {React,useState} from 'react'
import profileimg from '../assets/profile2.jpg'
import  {motion} from 'framer-motion'
import { AdminContext } from '../context/AdminContext'
import { TabContext } from '../context/TabContext'
import { useContext } from 'react'
import Terminal from '../components/Terminal'
import Edit from '../icons/Edit'

const About = () => {

  // const [loaded,setLoaded] = useState(false)

    const {terminal} = useContext(TabContext)
    const {user,} = useContext(AdminContext)
    const [modal,setModal] = useState(false)
    const [aboutext,setAboutext] = useState("        I'm a computer Science and Engineering student and an aspiring software Engineer. I love to solve or atleast try to come up with a solution to real world problems with the help of Technolodgy, the new technolodgies rolling out everyday keeps me on edge. I'm a keen learner spending most of my time working on projects involving various tech stacks. I love competitve programming it's and i have a particular interest towards malware analysis and design. I love Open Source and have been contributer in various events thereby addying to my learning experiences.")

    const handleEdit = () => {
      setModal(!modal)

    }
  
  return (
    <>
    {
      modal ? 
      (
        // <div className='w-screen blur-sm h-screen z-10 fixed border-white border-2'>
          <motion.div className='bg-drk01 text-lg rounded-2xl  text-white font-urbanist w-1/2 h-[50%] overflow-y-auto top-[20%] left-[30%] -translate-y-[50%] fixed flex justify-center items-baseline z-10'
          initial={{opacity:0,translateY:-150}}
          animate = {{opacity:1,translateY:0}}
          transition = {{
            delay:0.1,
            duration:0.5,
            type:"spring",
            stiffness:120,
          }}
          >
            <form className='flex flex-col gap-4 justify-center items-center w-full py-10 px-10 h-full'>
              <textarea placeholder='Edit About' name="" id=""  className='w-full h-[70%] scroll-m-2  rounded-lg py-3 px-3 focus:outline-none bg-drk00' value={aboutext}></textarea>
              <button className='bg-drk00 text-lg text-white font-poppins py-3 px-5 rounded-lg'>Update</button>
            </form>
          </motion.div>
        // </div>
      )
       :null
    }
  <motion.div className='row-start-2 bg-drk00 h-full overflow-auto' 
    initial={{opacity:0}}
    animate = {{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration:0.2,
      ease:'easeIn'
    }}
    >
      <div className='w-full flex sm:flex-row flex-col justify-center items-center text-lg sm:text-2xl text-white font-varela font-medium h-40'>
        <h1 className=''>
          <span className='relative block before:block before:absolute before:bottom-10 before:font-Enriqueta before:text-xl sm:before:text-3xl before:right-32 sm:before:right-36 before:content-["<h1>"]  after:block after:absolute after:top-10 after:left-32 sm:after:left-36 after:font-Enriqueta after:text-xl sm:after:text-3xl after:content-["</h1>"]' >About Me</span>
        </h1>
      </div>
      <div className=" flex flex-wrap flex-col sm:flex-col xl:flex-row sm:flex-nowrap gap-2 sm:gap-4 justify-between items-center px-5 py-5 xl:px-10 xl:py-10">
        <div className=' rounded-lg sm:rounded-xl overflow-hidden sm:h-96 w-full flex justify-center xl:w-2/3'>
          <img src={profileimg} alt="" className='object-contain sm:rounded-xl' />
        </div>
        <div className='w-full h-full text-poppins text-white text-lg sm:text-xl md:text-lg'>
          <div className='flex flex-col gap-2'>
            {
              user ? 
              <div className='flex w-full justify-end items-center pr-5 pt-2'>
                <div onClick={handleEdit}><Edit width={20} height={20} /></div>
              </div> : 
              null
            }
          <p> 
            {aboutext}
          </p>
          </div>
          <motion.ul className='flex gap-2 sm:gap-4 justify-start items-center pt-5 flex-wrap'>
            <motion.li className='border-gray-700 py-3 px-4 sm px-4:sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
            initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.1,
              type:"spring",
              stiffness:100
            }}
            >Competitve Programming</motion.li>
            <motion.li className='border-gray-700 py-3 px-4 sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.1,
              type:"spring",
              stiffness:100
            }}
            >FullStack(Backend Heavy)</motion.li>
            <motion.li className='border-gray-700 py-3 px-4 sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.2,
              type:"spring",
              stiffness:100
            }}
            >Open source</motion.li>
            <motion.li className='border-gray-700 py-3 px-4 sm:px-8 border-2 rounded-lg sm:rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.3,
              type:"spring",
              stiffness:100
            }}
            >Malware analysis</motion.li>
            <motion.li className='border-gray-700 py-3 px-8 border-2 rounded-xl hover:shadow-lg'
                        initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{
              duration:0.5,
              delay:0.4,
              type:"spring",
              stiffness:100
            }}
            >Devops</motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>

    {
      terminal ? <Terminal /> :null
    }
    </>
  )
}

export default About