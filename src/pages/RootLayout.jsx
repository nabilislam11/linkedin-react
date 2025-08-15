import React from 'react'
import { Outlet } from 'react-router'
import Container from '../component/container/Container'
import { FaLinkedin } from 'react-icons/fa'
import { IoIosSearch, IoMdNotifications } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { GoPeople } from 'react-icons/go'
import { RiShoppingBag4Fill } from 'react-icons/ri'
import { BiSolidMessageDots } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { PiDotsNineBold } from 'react-icons/pi'
import { BsBox } from 'react-icons/bs'

const RootLayout = () => {
    return (
        <div className="">


            <Container>
        <div className=''>
            <div className="flex bg-white pt-1.5">
                <div className="w-[30%] flex items-center gap-x-2.5  ">
                    <a href=""><FaLinkedin  className=' text-[#0a67c3] cursor-pointer ' size={30} /></a>

                    <div className=" relative">
                        <input className='pr-[5px] pl-[35px] py-[5px] bg-gray-100 rounded-3xl w-[90%]  ' type="text"  placeholder='Search'/>
                        <IoIosSearch className='absolute top-[8px] left-[9px] size-5 ' />
                    </div>
                </div>
                <div className="w-[70%] flex gap-x-4  ">
                    <ul className='flex gap-x-5'>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><IoHome size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>Home</p></li>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><GoPeople size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>My Network</p></li>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><RiShoppingBag4Fill size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>Jobs</p></li>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><BiSolidMessageDots size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>Messeging</p></li>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><IoMdNotifications size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>Notification</p></li>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><MdOutlineManageAccounts size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>Me</p></li>
                    </ul>
                    <div className="h-[95%] w-1 bg-gray-200 "></div>
                    <ul className='flex gap-x-5'>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><PiDotsNineBold size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>For Bussiness</p></li>
                        <li className='flex flex-col items-center justify-center'>
                            <a href=""><BsBox size={30} /></a>
                        <p className='font-sans font-medium text-[17px]   '>Try Premium BDT</p></li>
                        </ul>
                </div>
                
            </div>

        
            <div className="w-[100%] h-[80%] flex flex-col justify-between  gap-y-3 ">
                <Outlet></Outlet>
            </div>
        </div>
            </Container>
        </div>
    )
}

export default RootLayout