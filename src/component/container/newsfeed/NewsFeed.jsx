import React from 'react'
import profile from '../../../assets/profile.jpg'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import cover from '../../../assets/cover.jpg'
import { FcLike } from 'react-icons/fc'
import { BiRepost, BiSolidLike } from 'react-icons/bi'
import { FaComment } from 'react-icons/fa'
import { CgArrowTopRightR } from 'react-icons/cg'
const NewsFeed = () => {
    return (
        <div className='w-full h-screen rounded-[10px] bg-white border-1 border-gray-100'>
            <div className="flex justify-between  px-[15px] pt-[15px]   ">
                <div className="flex gap-x-3.5">
                    <div className=" ">
                        <img className='w-[60px] h-[60px] rounded-full object-cover ' src={profile} alt="" />
                    </div>
                    <div className="">
                        {/* Name__par */}
                        <p className='font-sans font-semibold  text-[19px]'>Nabil islam</p>
                        {/* followers__part */}
                        <p className='font-sans text-gray-500  font-normal text-[15px] '>12570 followers</p>
                        <p className='font-sans text-gray-500  font-normal text-[15px]'>time</p>

                    </div>
                </div>
                <div className="flex gap-x-2.5">
                    <BsThreeDots size={25} />
                    <MdOutlineCancel size={25} />
                </div>
            </div>
            {/* Content__part */}
            <div className="  p-[10px] ">
                <p className='font-sans font-normal   text-[17px]'>New Opportunity with Visa Sponsorship in the UK
                    Role: Social Worker (Working Age)
                    Salary - £40,109 - £45,850 per annum +Pension scheme</p>
            </div>
            {/* pic&vidoe__part */}

            <img className='w-full h-[690px] object-cover' src={cover} alt="" />
            <div className="flex justify-between border-b-1 border-gray-200 ">
                <div className="flex gap-x-1.5 items-center">
                    <FcLike />
                    <p className='font-sans font-normal   text-[15px]'>12k</p>
                </div>
                <div className="flex gap-x-1.5">
                    <p className='font-sans font-normal   text-[15px]'>18</p>
                    <p className='font-sans font-normal   text-[15px]'>comment</p>
                </div>
            </div>
            <div className="flex justify-around ">
                <div className="flex gap-x-1.5 items-center py-1.5">
                    <BiSolidLike size={20} />
                    <p className='font-sans font-semibold  text-[17px]'>Like</p>
                </div>
                <div className="flex gap-x-1.5 items-center py-1.5">
                    <FaComment size={20} />
                    <p className='font-sans font-semibold  text-[17px]'>Comment</p>
                </div>
                <div className="flex gap-x-1.5 items-center py-1.5">
                    <BiRepost size={25} />
                    <p className='font-sans font-semibold  text-[17px]'>
                        Repost
                    </p>
                </div>
                <div className="flex gap-x-1.5 items-center py-1.5">
                  <CgArrowTopRightR size={20} />
                    <p className='font-sans font-semibold  text-[17px]'>
                      Sent
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed