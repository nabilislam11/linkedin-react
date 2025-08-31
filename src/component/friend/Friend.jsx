import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Profile from '../../assets/profile.jpg'

const Friend = () => {
          const db = getDatabase();
    const [friendlist,seFriendlist] = useState([]);
    const data = useSelector(state => state.userlogInfo.value?.user)

    useEffect(() => {
        const friendRef = ref(db, 'friend/');
        onValue(friendRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (data.uid == item.val().receiverid ||
            data.uid == item.val().senderid ) {

                    arr.push({...item.val(),id: item.key} )
                }

            })
            seFriendlist(arr)
        });
    }, [])
    const handleUnfollow =(item)=>{
         remove(ref(db, 'friend/' + item.id))

    }
  return (
 <div>
       <div className="w-[50vh] h-[10%] bg-white rounded-2xl ">
                     <h2 className='font-sans font-semibold text-[24px] py-3  text-black '>Frineds</h2>
                     <div className=" overflow-y-scroll  h-[50vh] ">
                         {
                             friendlist.map((item) => (
                                 <div className="flex justify-between  gap-x-3.5">
                                     <div className="flex gap-x-3.5">
                                         <div className=" ">
                                             <img className='w-[60px] h-[60px] rounded-full object-cover ' src={Profile} alt="" />
                                         </div>
                                         <div className="">
                                             {/* Name__par */}
                                             <p className='font-sans font-normal text-[17px]'>
                                                {
                                                    data.uid == item.senderid ?
                                                    item.receivername
                                                    :
                                                    item.sendername
                                                } </p>
                                             {/* Bio__part */}
                                             <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>{item.bio} </p>
 
                                         </div>
                                     </div>
                                     <div className="flex gap-x-2 py-0 px-3 items-center   ">
                                         <p onClick={()=>handleUnfollow(item)} className='font-sans font-normal text-[17px] border-2 rounded-full '>Unfollow</p>
                                         <p  className='font-sans font-normal text-[17px] border-2 rounded-full '>Block</p>
                                     </div>
                                 </div>
                             ))
                         }
                     </div>
 
                 </div>
     </div>
  )
}

export default Friend
