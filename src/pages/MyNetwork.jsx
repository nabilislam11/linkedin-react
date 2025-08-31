import React from "react";
import Followers from "../component/followers/followers";
import Peopleknow from "../component/peopleknow/peopleknow";
import Friend from "../component/friend/Friend";
import Block from "../component/block/Block";

const MyNetwork = () => {

 
    return (
        <>
        <div className='bg-[#F4F2EE]  '>
            <div className=" mt-5 ">
            
            <Peopleknow></Peopleknow>
        </div>
         <div className="flex justify-around items-center mt-7 ">
               <Followers></Followers>
               <Friend/>
              <Block/>
         </div>
            </div>

        </>
    )
}

export default MyNetwork
