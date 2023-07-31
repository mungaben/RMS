
"use client"
import React from 'react'
import { SignUp } from "@clerk/nextjs";

const page = () => {
    // after sign up post data to db and check if user is admin if admin take to admin page else take to user page{"/"}
  return (
    <div className='flex items-center justify-center w-full h-screen pt-10 group'>
    <div className="flex items-center justify-center w-full p-4 mx-5 my-auto bg-transparent h-96 group-hover:opacity-80 group-hover:scale-110">
    <SignUp afterSignInUrl={"/"} />
    </div>
          
  </div>
  )
}

export default page