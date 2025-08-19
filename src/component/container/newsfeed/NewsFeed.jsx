import React, { useEffect, useState } from 'react'
import profile from '../../../assets/profile.jpg'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import cover from '../../../assets/cover.jpg'
import { FcLike } from 'react-icons/fc'
import { BiRepost, BiSolidLike } from 'react-icons/bi'
import { FaComment } from 'react-icons/fa'
import { CgArrowTopRightR } from 'react-icons/cg'
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { GrEmoji } from "react-icons/gr";
import { MdOutlinePhoto } from "react-icons/md";
import { useSelector } from 'react-redux'
import { LuPlus } from 'react-icons/lu'
const NewsFeed = () => {
    const [post, setPost] = useState([])
    const [clickComment, setClickComment] = useState("")
    const [comments, setcomments] = useState("")
    const [commentInput, setcommentInput] = useState("")
    const [emptyComment, setEmptyComment] = useState("")
    const db = getDatabase();
    const data = useSelector(state => state.userlogInfo.value.user)
    useEffect(() => {
        const postRef = ref(db, 'post/');
        onValue(postRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {

                arr.push({ ...item.val(), id: item.key })
            })

            setPost(arr)
        });
    }, [])
    const handleComment = () => {
        if (!commentInput) {
            console.log();
            setEmptyComment("Type your comment");


        }
        else {
            set(push(ref(db, 'commentInput/')), {
                username: data.displayName,
                comment: commentInput,
                time: "",
                profile_picture: data.displayName?.charAt(0).toUpperCase(),
            });
            setcommentInput("")

        }
    }
    useEffect(() => {
        const commentRef = ref(db, 'commentInput/');
        onValue(commentRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {

                arr.push({ ...item.val(), id: item.key })
            })

            setcomments(arr)
        });
    }, [])


    return (
        <div className='w-full h-screen rounded-[10px] bg-white border-1 border-gray-100'>
            {
                post.map((item) => (
                    <div className="">
                        <div className="flex justify-between  px-[15px] pt-[15px]   ">
                            <div className="flex gap-x-3.5">
                                <div className="flex justify-center items-center w-[60px] h-[54px] bg-blue-200  rounded-full ">
                                    <span className='font-sans font-bold  text-[20px]'>{item.profile_picture}</span>
                                </div>
                                <div className="">
                                    {/* Name__par */}
                                    <p className='font-sans font-semibold  text-[19px]'>{item.username} </p>
                                    {/* followers__part */}
                                    <p className='font-sans text-gray-500  font-normal text-[15px] '>12570 followers</p>
                                    <p className='font-sans text-gray-500  font-normal text-[15px]'>time</p>

                                </div>
                            </div>
                            <div className="flex gap-x-2.5">
                                <BsThreeDots size={25} />
                                <MdOutlineCancel size={25} />
                            </div>
                        </div>
                        {/* Content__part */}
                        <div className="  p-[10px] ">
                            <p className='font-sans font-normal   text-[17px]'>{item.post} </p>
                        </div>
                        {/* pic&vidoe__part */}

                        {/* <img className='w-full h-[690px] object-cover' src={cover} alt="" /> */}
                        <div className="flex justify-between border-b-1 border-gray-200 ">
                            <div className="flex gap-x-1.5 items-center">
                                <FcLike />
                                <p className='font-sans font-normal   text-[15px]'>12k</p>
                            </div>
                            <div className="flex gap-x-1.5">
                                <p className='font-sans font-normal   text-[15px]'>18</p>
                                <p className='font-sans font-normal   text-[15px]'>comment</p>
                            </div>
                        </div>
                        <div className="flex justify-around ">
                            <div className="flex gap-x-1.5 items-center py-1.5">
                                <BiSolidLike size={20} />
                                <p className='font-sans font-semibold  text-[17px]'>Like</p>
                            </div>
                            <div onClick={() => setClickComment(!clickComment)} className="  flex gap-x-1.5 items-center py-1.5">
                                <FaComment size={20} />
                                <p className='font-sans font-semibold  text-[17px]'>Comment</p>
                            </div>
                            <div className="flex gap-x-1.5 items-center py-1.5">
                                <BiRepost size={25} />
                                <p className='font-sans font-semibold  text-[17px]'>
                                    Repost
                                </p>
                            </div>
                            <div className="flex gap-x-1.5 items-center py-1.5">
                                <CgArrowTopRightR size={20} />
                                <p className='font-sans font-semibold  text-[17px]'>
                                    Sent
                                </p>
                            </div>
                        </div>
                        {
                            clickComment &&
                            <div className=" relative w-[full] py-[50px] rounded-[10px] bg-white border-1 border-gray-100 px-[20px] pt-[20px] ">

                                <div className="flex items-center gap-x-3 ">
                                    <div className="flex justify-center items-center w-[60px] h-[54px] bg-blue-200  rounded-full ">
                                        <span className='font-sans font-bold  text-[20px]'>{data?.displayName.charAt(0).toUpperCase()}</span>
                                    </div>
                                    <div className="w-full  ">
                                        <input value={commentInput} onChange={(e) => {
                                            setcommentInput(e.target.value)
                                            setEmptyComment("")
                                        }} className="font-sans font-medium  px-4 py-2 border-1 outline-1 border-gray-400 bg-gray-100 w-full rounded-4xl  text-[17px]" type="text" placeholder={emptyComment ? emptyComment
                                            : "Add a comment.."
                                        } />
                                    </div>



                                </div>
                                <div className="flex gap-x-3.5 absolute top-[40px] right-[60px] ">
                                    <GrEmoji size={20} />
                                    <MdOutlinePhoto size={20} />
                                </div>
                                <div className="w-[20%] ms-auto pb-[15px] ">
                                    <button onClick={handleComment} className='  bg-[#0D3E7C] rounded-full text-white py-[8px] px-3.5  font-sans font-semibold text-[18px]'>Comment</button>
                                </div>

                                {
                                    comments.slice(0, 3).map((item) => (
                                        <div className="">
                                            <div className=" flex justify-between ">
                                               <div className="flex gap-x-2.5 ">
                                                 <div className="flex justify-center items-center w-[60px] h-[54px] bg-blue-200  rounded-full ">
                                                    <span className='font-sans font-bold  text-[20px]'>{item.username.charAt(0).toUpperCase()}</span>
                                                </div>
                                                <div className="">
                                                    {/* Name__par */}
                                                    <p className='font-sans font-semibold  text-[20px]'>{item?.username} </p>
                                                    {/* Bio__part */}
                                                    <p className='font-sans text-gray-500  font-normal text-[15px] pb-2'>{item.bio} </p>

                                                </div>
                                               </div>
                                            </div>
                                            <div className="p-[20px]">
                                                <p className='font-sans text-blackfont-semibold   text-[18px] pb-2'>
                                                    {item?.comment}
                                                </p>
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        }
                    </div>
                ))
            }

        </div>
    )
}

export default NewsFeed