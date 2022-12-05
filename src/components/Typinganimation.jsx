import React from 'react'
import {Typewriter} from 'react-simple-typewriter'

const Typinganimation = () => {
  return (
    <div>
      <Typewriter words={['Debayan','a Web Developer',"Cyber security Enthusiast","working on MERN stack"]}
        loop={false}
        typeSpeed={70}
        cursorStyle='|'
       />
    </div>
  )
}

export default Typinganimation