import React from 'react'
import { IoPeople } from "react-icons/io5";
import { FaLaptop, FaLinkedin, FaRocket } from "react-icons/fa";
import {  PiBagSimple } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
const Navbar = () => {
  return (
    <div className='flex justify-between py-8'>
        <div className="w-[20%] flex   cursor-pointer  items-center">
            <h1 className='font-sans font-bold text-4xl text-[#0a67c3]   ' >Link</h1>
            <a href=""><FaLinkedin  className=' text-[#0a67c3] cursor-pointer ' size={40} /></a>

        </div>
        <div className="w-[70%] flex gap-x-3 ">
            {/* <div className=" flex flex-col items-center">
                <FaRocket />
                <p className='font-sans font-medium text-[18px] '>Top Content</p>
            </div> */}
            <ul className='flex  items-center gap-x-6'>
                <li className='flex flex-col items-center'> <a href=""><FaRocket  size={25} /></a>
                <p className='font-sans font-medium text-[18px] '>Top Content</p>
                </li>
                <li className='flex flex-col items-center'> <a href=""><IoPeople  size={25} /></a>
                <p className='font-sans font-medium text-[18px] '>People</p>
                </li>
                <li className='flex flex-col items-center'> <a href=""><GoVideo  size={25} /></a>
                <p className='font-sans font-medium text-[18px] '>Learning</p>
                </li>
                <li className='flex flex-col items-center'> <a href=""><PiBagSimple  size={25} /></a>
                <p className='font-sans font-medium text-[18px] '>Jobs</p>
                </li>
                <li className='flex flex-col items-center'> <a href=""><FaGamepad size={25}  /></a>
                <p className='font-sans font-medium text-[18px] '>Games</p>
                </li>
                <li className='flex flex-col items-center border-x-2 border-gray-300 px-[15px] '> <a href=""><FaLaptop size={25}  /></a>
                <p className='font-sans font-medium text-[18px] '>Get the app </p>
                </li>
            </ul >
            <div className="   flex gap-x-2">
                <button className='py-[10px] px-[17px] rounded-3xl cursor-pointer  hover:bg-gray-100 transition-all duration-300  '>Join now</button>
                <button className=' py-[10px] px-[17px] rounded-3xl  border-2 border-[#0a67c3] text-[#0a67c3] hover:bg-blue-100  cursor-pointer   transition-all duration-300 '>Sing in</button>
            </div>


        </div>

    </div>
  )
}

export default Navbar