import React from 'react';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Profile from '../../assets/profile.jpg'
import { LuPlus } from 'react-icons/lu';
import Followers from '../followers/followers';
const Peopleknow = () => {
    const db = getDatabase();
    const [userlist, setUserlist] = useState([]);
      const [follower, seFollowerlist] = useState([]);
         const [friendlist,seFriendlist] = useState([]);
    const data = useSelector(state => state.userlogInfo.value?.user)
    useEffect(() => {
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
    const handleFollow = (item) => {
        set(push(ref(db, 'addfollow/')), {
            receiverid: item.id,
            receivername: item.username,
            senderid: data.uid,
            sendername: data.displayName,
        });
    }
    
    useEffect(() => {
        const addfollowRef = ref(db, 'addfollow/');
        onValue(addfollowRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                
                    arr.push(item.val().receiverid +item.val().senderid )
            
            })
            seFollowerlist(arr)
        });
    }, [])
     useEffect(() => {
            const friendRef = ref(db, 'friend/');
            onValue(friendRef, (snapshot) => {
                let arr = [];
                snapshot.forEach((item) => {
                
                        arr.push(item.val().receiverid +item.val().senderid )
    
                })
                seFriendlist(arr)
            });
        }, [])

    return (
        <div>
            <div className="w-[70%] h-[5%] bg-white  rounded-2xl ">
                <h2 className='font-sans font-semibold text-[24px]   py-3 '>Populer people to follow</h2>
                <div className=" overflow-x-scroll h-[40vh] ">
                    {
                        userlist.map((item) => (
                            <div className="flex justify-between  gap-x-3.5">
                                <div className="flex gap-x-3.5">
                                    <div className=" ">
                                        <img className='w-[60px] h-[60px] rounded-full object-cover ' src={Profile} alt="" />
                                    </div>
                                    <div className="">
                                        {/* Name__par */}
                                        <p className='font-sans font-normal text-[17px]'>{item?.username} </p>
                                        {/* Bio__part */}
                                        <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>{item.bio} </p>

                                    </div>
                                </div>
                                {
                                      friendlist.includes(data.uid + item.id ) ||
                                      friendlist.includes( item.id + data.uid  ) ?(
                                        <div className="flex gap-x-2 py-0 px-3 items-center border-2 rounded-full   ">
                                    <p  className='font-sans font-normal text-[17px]'>Friend</p>
                                </div> 
                                      )
                                      :
                                                        follower.includes(data.uid + item.id ) ||
                                      follower.includes( item.id + data.uid  ) ?
                                         <div className="flex gap-x-2 py-0 px-3 items-center border-2 rounded-full   ">
                                         
                                    <p onClick={() => handleReject(item)} className='font-sans font-normal text-[17px]'>Cancle</p>
                                </div>
                                :
                                <div className="flex gap-x-2 py-0 px-3 items-center border-2 rounded-full   ">
                                         <LuPlus />
                                    <p onClick={() => handleFollow(item)} className='font-sans font-normal text-[17px]'>Follow</p>
                                </div> 
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Peopleknow

