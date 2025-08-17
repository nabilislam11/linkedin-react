import React, { useState } from 'react'
import Navbar from '../component/container/navbar/Navbar';
import Container from '../component/container/Container'
import signin from '../assets/signin.svg'
import { TbEyeClosed } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
import { HashLoader } from "react-spinners";
import { useDispatch } from 'react-redux';
import { userlogInfo } from '../slice/Userslice';
const Signin = () => {
    const auth = getAuth();
    const navigator=useNavigate("")
    const dispatch =useDispatch()
     const [showforgotpassword,setshowForgotPassword] =useState(false)
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPaswordErr] = useState("")
    const [showPass, setshowPass] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }
    const handlePassword = (e) => {
        setPasword(e.target.value);
        setPaswordErr("")
    }
    const handleSignin = () => {
        if (!email) {
            setEmailErr("Enter Your Email")
        } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)) {
            setEmailErr("Enter your Proper Email")
        }
        if (!password) {
            setPaswordErr("Enter your Password")
        }
        if (email && password && /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/) {
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password)

                .then((user) => {
                    console.log(user);
                    dispatch(userlogInfo(user))
                    localStorage.setItem("userlogInfo",JSON.stringify(user))
                    // Signed in 
                    setTimeout(() => {
                        navigator("/")
                    }, 2000);

                    toast.success("Sign in successfully done");
                    setEmail("")
                    setPasword("")
                    setLoading(false)
                    toast.success==setshowForgotPassword(false)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode.includes("auth/invalid-credential")) {
                        toast.error("Please give your right email & password");
                        toast.error==setshowForgotPassword(true)

                    }
                    setLoading(false)

                });



        }
    }
    return (

        <div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <Container>
                <Navbar />
                {/* main__div */}
                <div className="flex  items-center justify-between   pt-40 ">
                    <div className=" w-[70%] flex flex-col  gap-y-10  ">
                        <h3 className=' font-semibold  font-sans text-[25px]'> Make the most of your professional life</h3>
                        <div className="w-[600px] bg-gray-100 p-[35px] flex flex-col gap-y-5 rounded-2xl shadow-2xl">
                            <div className=" ">
                                <h1 className='font-medium font-sans text-[20px]'>Emile</h1>
                                <input value={email} onChange={handleEmail} className='outline-none border-2 px-[10px] py-2 rounded-[7px] w-[95%] ' type="email" placeholder='Enter your Email' />
                                <h1 className='font-normal  font-sans text-red-500   text-[20px]'>{emailErr}</h1>
                            </div>
                            <div className="relative  ">
                                <h1 className='font-medium font-sans text-[20px]'>Passoword</h1>

                                <input value={password} onChange={handlePassword} className=' outline-none border-2 px-[10px] py-2 rounded-[7px] w-[95%] ' type={showPass ? "text" : "password"} placeholder='Enter your Password' />
                                {
                                    !showPass ?
                                        <TbEyeClosed onClick={() => setshowPass(!showPass)} className='absolute top-[38px]  right-[30px]  size-7 ' />
                                        :
                                        <AiOutlineEye onClick={() => setshowPass(!showPass)} className='absolute top-[38px]  right-[30px]  size-7 ' />
                                }
                                <h1 className='font-normal  font-sans text-red-500   text-[20px]'>{passwordErr}</h1>
                            </div>
                            <div className="flex justify-center items-center">


                            {
                                loading ?
                                    <HashLoader 
                                        color="#1A72E9"
                                        size={40}
                                    />
                                    :
                                    <button onClick={handleSignin} className='bg-[#1a72e9] px-[10px] py-2 rounded-[7px] w-[95%] text-white font-medium font-sans text-[18px]'>Sign in</button>

                            }
                            </div>

                         <div className="flex justify-center text-center">
                               {
                                showforgotpassword ?
                                <Link to={"/ForgotPassword"} className=' mx-auto font-normal font-sans text-[16px] w-[400px]  text-red-600 '>Forget passsword ?</Link>
                                :
                                toast.error
                               }
                         </div>
                        </div>
                    </div>


                    <div className="w-[30%] ">
                        <img src={signin} alt="" />
                    </div>
                </div>
                <div className="text-center pt-14 ">
                    <Link to={"/Registration"} className='font-normal font-sans text-[16px] w-[400px] pt-[25px] text-[#1a72e9] '>Back to Registration ?</Link>
                </div>

            </Container>
        </div>
    )
}

export default Signin