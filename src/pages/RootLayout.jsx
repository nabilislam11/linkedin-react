import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
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
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import profile from '../assets/profile.jpg'
import { signOut } from "firebase/auth";
import { userlogInfo } from '../slice/Userslice'
import { HashLoader } from 'react-spinners'

const RootLayout = () => {
    const auth = getAuth();
    const dispatch = useDispatch("")
    const [verify, setVerify] = useState(false)
    const [loading, setLoading] = useState(true);
    const navigator = useNavigate("")
    const [showprofileNav, setShowProfileNav] = useState(false)
    const data = useSelector(state => state.userlogInfo.value?.user)

    useEffect(() => {
        if (!data) {
            navigator("/signin")
        }
    }, [])
    onAuthStateChanged(auth, (user) => {
        if (user) {

            if (user.emailVerified) {
                setVerify(true)


            }
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }
    });
    const handleExit = () => {
        signOut(auth).then((user) => {

            localStorage.removeItem("userlogInfo")
            dispatch(userlogInfo(null))
            navigator("/registration")


        }).catch((error) => {
            // An error happened.
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        });


    }
    if (loading) {
        return (
            <div className="flex justify-center mx-auto w-full items-center h-screen  ">
                <HashLoader
                    color="#1A72E9"
                    height={70}
                    margin={3}
                    radius={12}
                    width={12}
                />
            </div>
        )
    }


    return (
        <>
            {
                verify ?
                    <div className=" ">
                            <div className='bg-gray-200 '>
                        <Container >
                            <div className="">
                                      <div className="flex ">
                                    <div className="w-[30%] flex items-center gap-x-2.5  ">
                                        <a href=""><FaLinkedin className=' text-[#0a67c3] cursor-pointer ' size={30} /></a>

                                        <div className=" relative">
                                            <input className='pr-[5px] pl-[35px] py-[5px] bg-gray-100 rounded-3xl w-[90%]  ' type="text" placeholder='Search' />
                                            <IoIosSearch className='absolute top-[8px] left-[9px] size-5 ' />
                                        </div>
                                    </div>
                                    <div className="w-[70%] flex gap-x-4  ">
                                        <ul className='flex gap-x-5'>
                                            <NavLink to={"/"} className='flex flex-col items-center justify-center'>
                                                <IoHome size={30} />
                                                <p className='font-sans font-medium text-[17px]   '>Home</p></NavLink>
                                            <NavLink to={"/mynetwork"} className='flex flex-col items-center justify-center'>
                                                 <GoPeople size={30} />
                                                <p className='font-sans font-medium text-[17px]   '>My Network</p></NavLink>
                                            <li className='flex flex-col items-center justify-center'>
                                                <a href=""><RiShoppingBag4Fill size={30} /></a>
                                                <p className='font-sans font-medium text-[17px]   '>Jobs</p></li>
                                            <li className='flex flex-col items-center justify-center'>
                                                <a href=""><BiSolidMessageDots size={30} /></a>
                                                <p className='font-sans font-medium text-[17px]   '>Messeging</p></li>
                                            <li className='flex flex-col items-center justify-center'>
                                                <a href=""><IoMdNotifications size={30} /></a>
                                                <p className='font-sans font-medium text-[17px]   '>Notification</p></li>
                                            <li className='flex flex-col items-center justify-center relative'>
                                                <a href=""><MdOutlineManageAccounts size={30} /></a>
                                                <p onClick={() => setShowProfileNav(!showprofileNav)} className='font-sans font-medium text-[17px]  cursor-pointer '>Me</p></li>
                                        </ul>
                                        {showprofileNav &&

                                            <div className="w-[300px] h-[560px] absolute top-[69px] right-[1001px] bg-white p-[15px] rounded-2xl ">
                                                <div className="border-b-1 border-gray-200 ">
                                                    <div className="flex gap-x-3.5">
                                                        <div className="  ">
                                                            <img className='w-[60px] h-[60px] rounded-full object-cover ' src={profile} alt="" />
                                                        </div>
                                                        <div className="">
                                                            {/* Name__par */}
                                                            <p className='font-sans font-semibold  text-[19px]'>{data.displayName} </p>
                                                            {/* Bio__part */}
                                                            <p className='font-sans text-gray-500  font-normal text-[15px] pb-2 w-[174px] '>Student at National University of Bangladesh</p>

                                                        </div>
                                                    </div>
                                                    <p className='font-sans font-semibold   text-[17px]  py-1 px-3 border-2 rounded-full text-center text-blue-600 w-[150px]  mx-auto  mb-2  '>View Profile</p>

                                                </div>
                                                <div className="pt-[15px] pb-[10px] flex flex-col gap-y-2.5 border-b-1 border-gray-200  ">
                                                    <h2 className='font-sans font-bold  text-[20px] '>Account</h2>

                                                    <div className='flex items-center gap-x-1.5'>
                                                        <a href=""><BsBox size={15} /></a>
                                                        <p className='font-sans font-medium text-[17px] text-gray-500'>Try Premium BDT</p>
                                                    </div>
                                                    <p className='font-sans font-medium text-[17px] text-gray-500 '>Settings & Privacy</p>
                                                    <p className='font-sans font-medium text-[17px] text-gray-500 '>Help</p>
                                                    <p className='font-sans font-medium text-[17px] text-gray-500 '>Language</p>
                                                </div>
                                                <div className="pt-[15px] pb-[10px] flex flex-col gap-y-2.5 border-b-1 border-gray-200   ">
                                                    <h2 className='font-sans font-bold  text-[20px] '>Manage</h2>


                                                    <p className='font-sans font-medium text-[17px] text-gray-500 '>Posts & Activity</p>
                                                    <p className='font-sans font-medium text-[17px] text-gray-500 '>Job Posting Account</p>
                                                    <p className='font-sans font-medium text-[17px] text-gray-500 '>Language</p>
                                                </div>
                                                <div className="pt-[15px] ]   ">
                                                    <p onClick={handleExit} className='font-sans font-medium text-[17px] text-gray-500 '>Sign Out</p>
                                                </div>
                                            </div>
                                        }
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
                            </div>
                          
                        </Container>


                            </div>
                        <div className="w-[100%] h-[80%] flex flex-col justify-between  gap-y-3">
                            <Outlet></Outlet>
                        </div>
                    </div>
                    :
                    <p>Please verify your Account</p>
            }
        </>

    )
}

export default RootLayout