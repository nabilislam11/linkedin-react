import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router';

const ForgotPassword = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("")
  }
  const handleForgot = () => {
    if (!email) {
      setEmailErr("Enter Your Email")

    } else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)) {
      setEmailErr("Enter your Proper Email")
    }
      if (email && /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/) {
        sendPasswordResetEmail(auth, email)
        .then((user) => {
        
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      }
      
  }
  return (

    <div class="bg-black   h-screen ">
      <div className="flex flex-col justify-center items-center  ">
        <h2 className='font-semibold font-sans text-[33px] text-white mt-[400px] ' >Forgot Password</h2>
        <div className="w-[400px] h-[220px]  mx-auto bg-white items-center pl-10  rounded-[7px] py-2 ">
          <div className="flex flex-col gap-y-2.5 ">

            <p className='font-medium font-sans text-[20px] '>Email</p>
            <input value={email} onChange={handleEmail} className='outline-none border-2 px-2.5 py-2  w-[300px] ' type="email" placeholder='Enter your Email' />
               <h1 className='font-normal  font-sans text-red-500   text-[20px]'>{emailErr}</h1>
            <div className="flex items-center gap-x-5 ">
              <button onClick={handleForgot} className='bg-[#1a72e9] px-[10px] py-1.5 rounded-[7px]  cursor-pointer text-white font-medium font-sans text-[18px]'>Forgot Password</button>
              <Link to={"/Signin"} className='bg-[#1a72e9] px-[10px] py-1.5 rounded-[7px]  text-white font-medium font-sans text-[18px] cursor-pointer'>Back to Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ForgotPassword