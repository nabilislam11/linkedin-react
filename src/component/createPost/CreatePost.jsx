import React, { useState } from 'react'
import { MdEmojiEmotions, MdEventAvailable, MdOutlineCancel, MdOutlinePhoto } from 'react-icons/md'
import profile from '../../assets/profile.jpg'
import { SlCalender } from 'react-icons/sl'
import { FiPlus } from 'react-icons/fi'
import { LuPlus } from 'react-icons/lu'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useSelector } from 'react-redux'

const CreatePost = ({ setCreatpost }) => {
    const [postInput, setpostInput] = useState("")
    const db = getDatabase();
    const data = useSelector(state => state.userlogInfo.value.user)
    const handleSubmit = () => {
        if (postInput) {
            set(push(ref(db, 'post/')), {
                username: data.displayName,
                profile_picture: "",
                post: postInput,
                time: "",

            });

        }

    }
    console.log(data, "data");


    return (
        <div className=' flex justify-center  absolute top-0 left-0  w-full h-full bg-white/10  backdrop-blur-xs    '>
            <div className=" w-[650px] h-[480px] bg-white mt-[150px]  relative p-5 rounded-[10px] ">
                <button onClick={() => setCreatpost(false)} className='  text-red-500 absolute top-[5px] right-[15px]   '><MdOutlineCancel size={30} />
                </button>
                <div className="flex   items-center gap-x-4 gap-y-4 pb-5 ">
                    <img className='w-[60px] h-[60px] rounded-full  object-cover ' src={profile} alt="" />
                    <div className="">
                        <h3 className='font-sans font-bold text-[20px]  '>Nabil islam hamja</h3>
                        <p className='font-sans font-medium text-[17px] '>Post to anyone</p>
                    </div>
                </div>
                <div className=" ">
                    <textarea onChange={(e) => setpostInput(e.target.value)} type="text" className=' pl-[10px] text-[35px] w-[550px] h-[220px] overflow-hidden outline-none border ' placeholder='What do you want to talk about?' />
                </div>
                <MdEmojiEmotions size={30} />
                <div className="flex items-center gap-x-3 pt-3.5">
                    <MdOutlinePhoto size={30} />
                    <SlCalender size={27} />
                    <MdEventAvailable size={30} />
                    <FiPlus size={30} />
                </div>
                <div className="border-t-2 border-gray-200 pt-[20px] items-end">
                    <div onClick={handleSubmit} className="flex gap-x-2 py-1 px-3 justify-center  items-center  w-[100px] bg-gray-200 rounded-full   ">

                        <p className='font-sans font-normal text-[17px] text-gray-800 '>Post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost