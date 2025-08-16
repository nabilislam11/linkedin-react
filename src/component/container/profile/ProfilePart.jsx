import React from 'react'
import profile from '../../../assets/profile.jpg'
import { LiaUniversitySolid } from 'react-icons/lia'
const ProfilePart = () => {
  return (
    <div className=' h-[400px] rounded-[10px]  '>
      <div className="w-full  h-full bg-white  rounded-[10px]   border-1 border-gray-100 ">
        <div className="w-full h-[30%] rounded-[10px] bg-cover bg-center bg-no-repeat bg-[url(assets/cover.jpg)]">
        </div>
        {/* Profile__pic */}
        <div className="relative ">
          <img className='w-[60px] h-[60px] rounded-full absolute top-[-28px] left-[23px] object-cover ' src={profile} alt="" />
        </div>
        {/* Name__part */}
       <div className=" flex flex-col gap-y-2.5 pl-[15px] ">
         <p className=' font-sans font-semibold text-[25px] pt-[40px] '>Nabil islam</p>
         {/* Bio__part */}
         <p className=' font-sans font-normal text-[17px]  '>Student at National University of Bangladesh</p>
         {/* Location_part */}
         <p className=' font-sans font-normal text-[17px]  '>Uttara, Dhaka</p>
         {/* Academic__name */}
         <div className="flex gap-x-1.5">
          <LiaUniversitySolid size={25} />
          <p className='font-sans font-medium  text-[17px]'>
National University of Bangladesh</p>
         </div>
       </div>
          
      </div>
        
    </div>
  )
}

export default ProfilePart