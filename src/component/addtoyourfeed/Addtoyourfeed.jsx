import React from 'react'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import profile from '../../assets/profile.jpg'
import { LuPlus } from 'react-icons/lu'

const Addtoyourfeed = () => (
    <div className='w-full h-[200px] rounded-[10px] bg-white p-[10px]  border-1 border-gray-100 '>
        <div className="flex flex-col gap-y-2.5">
            <div className="flex justify-between items-center ">
                <p className='font-sans font-semibold  text-[17px]'>Add to your feed</p>
                <BsFillInfoSquareFill />
            </div>
            <div className="overflow-y-scroll h-[70%vh] ">
                <div className="flex gap-x-3.5">
                    <div className=" ">
                        <img className='w-[60px] h-[60px] rounded-full object-cover ' src={profile} alt="" />
                    </div>
                    <div className="">
                        {/* Name__par */}
                    <p className='font-sans font-normal text-[17px]'>Nabil islam</p>
                    {/* Bio__part */}
                    <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>Student at National University of Bangladesh</p>
                    <div className="flex gap-x-2 py-1 px-3 items-center border-2 w-[100px] rounded-full   ">
                        <LuPlus />
                        <p className='font-sans font-normal text-[17px]'>Follow</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default Addtoyourfeed