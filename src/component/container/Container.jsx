import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full mx-auto px-[20px] lg:w-[1200px] lg:mx-auto  lg:px-[0px]'>
        {children}
    </div>
  )
}

export default Container