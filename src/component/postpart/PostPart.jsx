import React, { useState } from 'react'
import profile from '../../assets/profile.jpg'
import { MdOutlineAddPhotoAlternate, MdOutlineOndemandVideo } from 'react-icons/md'
import { PiArticleNyTimesLight } from 'react-icons/pi'
import CreatePost from '../createPost/CreatePost'

const PostPart = () => {
  const [creatPost,setCreatpost] =useState(false)

  return (
    <div className='w-full h-[140px] rounded-[10px] bg-white p-[10px]  border-1 border-gray-100 '>
        <div className="flex gap-x-2 items-center pb-[20px]">
            <div className="">
          <img className='w-[60px] h-[60px] rounded-full  object-cover ' src={profile} alt="" />
        </div>
        <button  onClick={()=>setCreatpost(true)} className='font-sans font-medium text-start   px-4 py-2 border-1 border-gray-400 bg-gray-100 w-[85%] rounded-4xl  text-[17px]'>Start a post</button>
        </div>
        { creatPost &&
          <CreatePost setCreatpost={setCreatpost} />}
        <div className="flex justify-around ">
            <div className="flex gap-x-1.5 items-center">
                <MdOutlineOndemandVideo size={30} />
                <p className='font-sans font-semibold  text-[17px]'>Vidoe</p>
            </div>
            <div className="flex gap-x-1.5 items-center">
               <MdOutlineAddPhotoAlternate size={30} />
                <p className='font-sans font-semibold  text-[17px]'>Photo</p>
            </div>
            <div className="flex gap-x-1.5 items-center">
               <PiArticleNyTimesLight size={30} />
                <p className='font-sans font-semibold  text-[17px]'>Write article</p>
            </div>
        </div>
    </div>
  )
}

export default PostPart