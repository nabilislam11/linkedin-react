import React from 'react'
import { LiaUserPlusSolid } from 'react-icons/lia'

const MynetworkTitle = () => {
  return (
    <div className='w-full h-[120px] rounded-[10px] bg-white p-[15px] border-1 border-gray-100'>
      <div className=" pb-[15px] ">
        <h2 className='font-sans font-medium  text-[17px] '>View all analytics</h2>
      </div>
      <div className="flex justify-between  items-center ">
        <div className="">
          <p className='font-sans font-medium  text-[17px] '>Connections</p>
          <p className='font-sans font-medium  text-[15px] text-gray-500  '>Grow your network
          </p>
        </div>
        <LiaUserPlusSolid size={20} />
      </div>

    </div>
  )
}

export default MynetworkTitle