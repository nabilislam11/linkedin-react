
import React, { useEffect } from 'react'
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import {  useState } from 'react'
import Profile from '../../assets/profile.jpg'
import { useSelector } from 'react-redux';
const Block = () => {
    const db = getDatabase();
      const [blocklist, setblocklist] = useState([]);
        const data = useSelector(state => state.userlogInfo.value?.user)
     useEffect(() => {
        const blockRef = ref(db, 'block/');
        onValue(blockRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (data?.uid == item.val().blockerId ||
            data?.uid == item.val().blockeredId) {

                    arr.push({ ...item.val(), id: item.key })
                }

            })
            setblocklist(arr)
        });
    }, [])
    console.log(blocklist,"shdjkfhjksfhkshfj");
    
  return (
    <div className='block ' >
      
            <div className="w-[50vh] h-[10%] bg-white rounded-2xl ">
                <h2 className='font-sans font-semibold text-[24px] py-3  text-black '>blocklist</h2>
                <div className=" overflow-y-scroll  h-[50vh] ">
                    {
                        blocklist.map((item) => (
                            <div className="flex justify-between  gap-x-3.5">
                                <div className="flex gap-x-3.5">
                                    <div className=" ">
                                        <img className='w-[60px] h-[60px] rounded-full object-cover ' src={Profile} alt="" />
                                    </div>
                                    <div className="">
                                        {/* Name__par */}
                                        <p className='font-sans font-normal text-[17px]'>
                                            {
                                                data?.uid == item.blockerId?
                                                item.blockeredName
                                                :
                                                item.blockerName
                                            }
                                            </p>
                                        {/* Bio__part */}
                                        <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>{item.bio} </p>

                                    </div>
                                </div>
                                <div className="flex gap-x-2 py-0 px-3 items-center   ">
                                    <p className='font-sans font-normal text-[17px] border-2 rounded-full '> {
                                                data?.uid == item.blockerId&& <button>Unblock</button>
                                            }
                                         </p>
                            
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
    </div>
  )
}

export default Block
