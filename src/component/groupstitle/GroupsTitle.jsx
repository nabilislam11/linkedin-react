import React from 'react'
import { MdEventAvailable, MdGroups } from 'react-icons/md'
import { IoNewspaperOutline } from "react-icons/io5";
import { BsSaveFill } from 'react-icons/bs';
const GroupsTitle = () => {
  return (
    <div className='w-full h-[160px] rounded-[10px] bg-white p-[15px]  border-1 border-gray-100'>
        <div className="flex flex-col gap-y-2.5 ">
            <div className="flex items-center gap-x-3">
              <BsSaveFill size={15}  />
                <p className='font-sans font-semibold  text-[17px] '>Saved items</p>
            </div>
            <div className="flex items-center gap-x-3">
                <MdGroups size={20}  />
                <p className='font-sans font-semibold  text-[17px] '>Groups</p>
            </div>
            <div className="flex items-center gap-x-3">
              <IoNewspaperOutline size={20}  />
                <p className='font-sans font-semibold  text-[17px] '>Newsletters</p>
            </div>
            <div className="flex items-center gap-x-3">
              <MdEventAvailable size={20}  />
                <p className='font-sans font-semibold  text-[17px] '>Events</p>
            </div>
        </div>
    </div>
  )
}

export default GroupsTitle