import React from 'react';
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import { useEffect, useState } from 'react'
import Profile from '../../assets/profile.jpg'
import { LuPlus } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const Followers = () => {
    const db = getDatabase();
    const [follower, seFollowerlist] = useState([]);
    const data = useSelector(state => state.userlogInfo.value?.user)

    useEffect(() => {
        const addfollowRef = ref(db, 'addfollow/');
        onValue(addfollowRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (data.uid == item.val().receiverid) {

                    arr.push({ ...item.val(), id: item.key })
                }

            })
            seFollowerlist(arr)
        });
    }, [])
    console.log(follower, "friend");
    const handleAccept = (item) => {
        set(push(ref(db, 'friend/')), {
            ...item
        }).then(() => {
            remove(ref(db, 'addfollow/' + item.id))

        })
    }
    const handleReject =(item)=>{
         remove(ref(db, 'addfollow/' + item.id))

    }

    return (
        <div>
            <div className="w-[50vh] h-[10%] bg-white rounded-2xl  n">
                <h2 className='font-sans font-semibold text-[24px] py-3  text-black '>followers</h2>
                <div className=" overflow-y-scroll  h-[50vh] ">
                    {
                        follower.map((item) => (
                            <div className="flex justify-between  gap-x-3.5">
                                <div className="flex gap-x-3.5">
                                    <div className=" ">
                                        <img className='w-[60px] h-[60px] rounded-full object-cover ' src={Profile} alt="" />
                                    </div>
                                    <div className="">
                                        {/* Name__par */}
                                        <p className='font-sans font-normal text-[17px]'>{item?.sendername} </p>
                                        {/* Bio__part */}
                                        <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>{item.bio} </p>

                                    </div>
                                </div>
                                <div className="flex gap-x-2 py-0 px-3 items-center   ">
                                    <p onClick={() => handleAccept(item)} className='font-sans font-normal text-[17px] border-2 rounded-full '>Accept</p>
                                    <p onClick={() => handleReject(item)} className='font-sans font-normal text-[17px] border-2 rounded-full '>Reject</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Followers
