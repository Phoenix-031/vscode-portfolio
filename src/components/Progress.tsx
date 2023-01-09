import React from 'react'


const Progress = (props: any) => {
    console.log(props.progwidth)

    
  return (
    <div className='w-full h-1 bg-white'>
        <p className={`bg-red-500 h-1 w-[${props.progwidth}%]`}></p>

    </div>
  )
}

export default Progress