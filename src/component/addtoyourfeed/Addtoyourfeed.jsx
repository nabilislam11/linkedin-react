import React, { useEffect, useState } from 'react'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import profile from '../../assets/profile.jpg'
import { LuPlus } from 'react-icons/lu'
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';


const Addtoyourfeed = () => {
    const db = getDatabase();
    const [userlist, setUserlist] = useState([]);
    const data = useSelector(state => state.userlogInfo.value.user)

    useEffect(() => {
        // const userRef = ref(db, 'users/');
        // onValue(userRef, (snapshot) => {
        //     let arr = [];
        //     snapshot.forEach((item) => {
        //         arr.push({ ...item.val(), id: item.key });


        //     })
        //     setUserlist(arr);

        // },
        //     []);
        const usersRef = ref(db, 'users/');
        onValue(usersRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (data.uid !== item.key) {
                   arr.push({ ...item.val(), id: item.key }) 
                    
                }
            })
            setUserlist(arr)
        });

    }, [])
    return (
        <div>
            <div className='w-full   py-5 rounded-[10px] bg-white p-[10px]  border-1 border-gray-100 '>
                <div className="flex flex-col gap-y-2.5">
                    <div className="flex justify-between items-center ">
                        <p className='font-sans font-semibold  text-[17px]'>Add to your feed</p>
                        <BsFillInfoSquareFill />
                    </div>
                    <div className="h-[50%] ">
                        { 
                            userlist.slice (0,3).map((item) => (
                                <div className="flex gap-x-3.5">
                                    <div className=" ">
                                        <img className='w-[60px] h-[60px] rounded-full object-cover ' src={profile} alt="" />
                                    </div>
                                    <div className="">
                                        {/* Name__par */}
                                        <p className='font-sans font-normal text-[17px]'>{item.username} </p>
                                        {/* Bio__part */}
                                        <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>{item.bio} </p>
                                        <div className="flex gap-x-2 py-1 px-3 items-center border-2 w-[100px] rounded-full   ">
                                            <LuPlus />
                                            <p className='font-sans font-normal text-[17px]'>Follow</p>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Addtoyourfeed