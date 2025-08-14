import React from 'react'
import Navbar from '../component/container/navbar/Navbar'
import { FcGoogle } from "react-icons/fc";
import Container from '../component/container/Container'
import { FaMicrosoft } from "react-icons/fa";
import registration from '../assets/registration.svg'
import Registrationpic from '../assets/registration2.png'

const Registration = () => {
  return (
    <div>
       <Container>
        <Navbar/>
        {/* main__div */}
        <div className="flex">
                   <div className=" w-[50%] flex flex-col gap-y-2.5">
                    <h1 className='font-medium font-sans text-5xl w-[550px] pb-[20px] text-[#536b6e] '>Welcome to your professional community</h1>
        <div className=" flex items-center h-[40px] w-[370px] justify-center gap-x-2 rounded-3xl bg-[#1a72e9] hover:bg-blue-400 transition-all duration-300 cursor-pointer ">
            <div className="py-2 px-2 rounded-full bg-white ">
                <FcGoogle size={20} />
            </div>
            <button className=' font-sans font-medium text-[18px] text-white '> Continue with Google </button>
        </div>
        <div className=" flex items-center h-[40px] w-[370px]  justify-center gap-x-2 rounded-3xl  border-1 transition-all duration-300 hover:bg-gray-200  cursor-pointer">
            <div className=" ">
                <FaMicrosoft size={20} />
            </div>
            <button className=' font-sans font-medium text-[18px] text-black   '> Continue with Microsolf </button>
        </div>
        <div className=" flex items-center h-[40px] w-[370px] justify-center gap-x-2 rounded-3xl  border-1 transition-all duration-300 hover:bg-gray-200  cursor-pointer">
        
            <button className=' font-sans font-medium text-[18px] text-black   '> Sing in </button>
        </div>
        <p className='font-normal font-sans text-[16px] w-[400px] pt-[25px] text-center '>By clicking Continue to join or sign in, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p>
        <p className='font-normal font-sans text-[16px] w-[400px] pt-[25px] text-center'>New to LinkedIn?  <samp className='font-normal font-sans text-[16px] text-blue-600 cursor-pointer '>Join now</samp> </p>
        </div>
        <div className="w-[50%] ">
            <img src={registration} alt="" />
        </div>
        </div>
 
       </Container>
    </div>
  )
}

export default Registration