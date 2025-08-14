import React, { useState } from 'react'
import Navbar from '../component/container/navbar/Navbar'
import { FcGoogle } from "react-icons/fc";
import Container from '../component/container/Container'
import { FaMicrosoft } from "react-icons/fa";
import registration from '../assets/registration.svg'


const Registration = () => {
    const [showRegister,setShowRegister] =useState (false)
  return (
    <div>
       <Container>
        <Navbar/>
        {/* main__div */}
        <div className="flex">

                { showRegister ?(
                   <div className=" w-[50%] flex flex-col gap-y-2.5">
                    <h1 className='font-medium font-sans text-5xl w-[550px] pb-[50px] text-[#536b6e] '>Welcome to your professional community</h1>
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
        </div>


  
        )
        :
                 <div className=" w-[50%] flex flex-col  gap-y-20  ">
           <h3 className=' font-semibold  font-sans text-[25px]'> Make the most of your professional life</h3>
           <div className="w-[400px] bg-gray-100 p-[35px] flex flex-col gap-y-5 rounded-2xl shadow-2xl">
                        <div className=" ">
                <h1 className='font-medium font-sans text-[20px]'>Emile</h1>
                <input className='outline-none border-2 px-[10px] py-2 rounded-[7px] w-[95%] ' type="emile" placeholder='Enter your Email'/>
            </div>
            <div className="">
                <h1 className='font-medium font-sans text-[20px]'>Passoword</h1>
                <input className='outline-none border-2 px-[10px] py-2 rounded-[7px] w-[95%] ' type="emile" placeholder='Enter your Email'/>
            </div>
            <button className='bg-[#1a72e9] px-[10px] py-2 rounded-[7px] w-[95%] text-white font-medium font-sans text-[18px]'>Create Account</button>
           </div>
           </div> 


        }
        <div className="w-[50%] ">
            <img src={registration} alt="" />
        </div>
        </div>
<p className='font-normal font-sans text-[16px] w-[400px] pt-[25px] text-center'>New to LinkedIn?  <samp onClick={()=>setShowRegister(!showRegister) } className='font-normal font-sans text-[16px] text-blue-600 cursor-pointer '>Join now</samp> </p>

       </Container>
    </div>
  )
}

export default Registration