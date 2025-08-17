import React, { useState } from 'react'
import Navbar from '../component/container/navbar/Navbar'
import { FcGoogle } from "react-icons/fc";
import Container from '../component/container/Container'
import { FaMicrosoft } from "react-icons/fa";
import registration from '../assets/registration.svg'
import { TbEyeClosed } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { HashLoader } from "react-spinners";
import toast, { Toaster } from 'react-hot-toast'
import { sendEmailVerification } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";


const Registration = () => {
    const auth = getAuth();
    const db = getDatabase();
    const nevigate = useNavigate("")
    const [loading, setLoading] = useState(false);
    const provider = new GoogleAuthProvider();
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")

    const [fullNameErr, setFullNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPaswordErr] = useState("")
    const [showRegister, setShowRegister] = useState(false)
    const [showPass, setshowPass] = useState(false)
    const handleFullname = (e) => {
        setFullName(e.target.value);
        setFullNameErr("")
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")

    }
    const handlePassword = (e) => {
        setPasword(e.target.value);
        setPaswordErr("")
    }
    const handleCreate = () => {

        if (!fullName) {
            setFullNameErr("Enter your Fullname")

        }
        if (!email) {
            setEmailErr("Enter Your Email")

        } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)) {
            setEmailErr("Enter your Proper Email")
        }
        if (!password) {
            setPaswordErr("Enter your Password")

        }
        if (fullName && email && password && /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/) {
            setLoading(true)
            createUserWithEmailAndPassword(auth, email, password)

                .then((user) => {
                    console.log(user.user.uid,"userid");
                    sendEmailVerification(auth.currentUser)
                    toast.success("Registration successfully done..Please verify your email");
                    setTimeout(() => {
                        nevigate("/signin")

                    }, 3000);
                    setLoading(false)
                    setEmail("")
                    setFullName("")
                    setPasword("")
                    set(ref(db, 'users/' +user.user.uid ), {
                        username: "nabil",
                        email: email,
                     
                    });
                })
              
                .catch((error) => {
                    console.log(error);
                    const err = error.message
                    console.log(error.message);
                    
                    if (err.includes("auth/email-already-in-use")) {
                        setEmailErr("This Email is already exists");
                    }
                    if (err.includes("auth/weak-password")) {
                        setPaswordErr("This Password is weak passsword/at least 6 characters");
                    }
                    setLoading(false)
                    toast.error("You have not registered successfully")
                });

        }
    }
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((user) => {

            }).catch((error) => {
                const errorCode = error.code;

            });
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
                <div className="flex pt-7">
                    {showRegister ? (

                        <div className=" w-[50%] flex flex-col  gap-y-20  ">
                            <h3 className=' font-semibold  font-sans text-[25px]'> Make the most of your professional life</h3>
                            <div className="w-[400px] bg-gray-100 p-[35px] flex flex-col gap-y-5 rounded-2xl shadow-2xl">
                                <div className=" ">
                                    <h1 className='font-medium font-sans text-[20px]'>Fullname</h1>
                                    <input value={fullName} onChange={handleFullname} className='outline-none border-2 px-[10px] py-2 rounded-[7px] w-[95%] ' type="text" placeholder='Enter your Fullname' />
                                    <h1 className='font-normal  font-sans text-red-500 text-[20px]'>{fullNameErr}</h1>
                                </div>
                                <div className=" ">
                                    <h1 className='font-medium font-sans text-[20px]'>Emile</h1>
                                    <input value={email} onChange={handleEmail} className='outline-none border-2 px-[10px] py-2 rounded-[7px] w-[95%] ' type="email" placeholder='Enter your Email' />
                                    <h1 className='font-normal  font-sans text-red-500 text-[20px]'>{emailErr}</h1>
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
                                <div className="flex items-center justify-center ">
                                    {
                                        loading ?
                                            <HashLoader
                                                color="#1A72E9"
                                                size={40}
                                            />
                                            :
                                            <button onClick={handleCreate} className='bg-[#1a72e9] px-[10px] py-2 rounded-[7px] w-[95%] text-white font-medium font-sans text-[18px]'>Create Account</button>
                                    }
                                </div>

                                <button onClick={() => setShowRegister(!showRegister)} className='bg-[#1a72e9] w-[50%] mx-auto px-[10px] py-2 rounded-[10px]  text-white font-medium font-sans text-[18px]'>Return</button>


                            </div>
                        </div>
                    )
                        :
                        <div className=" w-[50%] flex flex-col gap-y-2.5">
                            <h1 className='font-medium font-sans text-5xl w-[550px] pb-[50px] text-[#536b6e] '>Welcome to your professional community</h1>
                            <div className=" flex items-center h-[40px] w-[370px] justify-center gap-x-2 rounded-3xl bg-[#1a72e9] hover:bg-blue-400 transition-all duration-300 cursor-pointer ">
                                <div className="py-2 px-2 rounded-full bg-white ">
                                    <FcGoogle size={20} />
                                </div>
                                <button onClick={handleGoogle} className='font-sans font-medium text-[18px] text-white '> Continue with Google </button>
                            </div>
                            <div className=" flex items-center h-[40px] w-[370px]  justify-center gap-x-2 rounded-3xl  border-1 transition-all duration-300 hover:bg-gray-200  cursor-pointer">
                                <div className=" ">
                                    <FaMicrosoft size={20} />
                                </div>
                                <button className=' font-sans font-medium text-[18px] text-black   '> Continue with Microsolf </button>
                            </div>
                            <div className=" flex items-center h-[40px] w-[370px] justify-center gap-x-2 rounded-3xl  border-1 transition-all duration-300 hover:bg-gray-200  cursor-pointer">

                                <Link to={"/Signin"} className=' font-sans font-medium text-[18px] text-black   '> Sign in </Link>
                            </div>
                            <p className='font-normal font-sans text-[14px] w-[400px] pt-[25px] text-center '>By clicking Continue to join or sign in, you agree to LinkedIn’s User Agreement, Privacy Policy, and Cookie Policy.</p>
                            <p className='font-normal font-sans text-[17px] w-[400px] pt-[25px] text-center'>New to LinkedIn?  <samp onClick={() => setShowRegister(!showRegister)} className='font-normal font-sans text-[17px] text-blue-600 cursor-pointer '>Join now</samp> </p>
                        </div>
                    }
                    <div className="w-[50%] ">
                        <img src={registration} alt="" />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Registration