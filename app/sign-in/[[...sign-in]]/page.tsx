


"use client"
import React from 'react'
import { SignIn } from "@clerk/nextjs";

const page = () => {
    // after sign in check if user is admin if admin take to admin page else take to user page{"/"}
  return (
    <div className='flex items-center justify-center w-full h-screen pt-10 group'>
      <div className="flex items-center justify-center w-full p-4 mx-5 my-auto bg-transparent h-96 group-hover:opacity-80 group-hover:scale-110">
      <SignIn  afterSignInUrl={"/"} />
      </div>
            
    </div>
  )
}

export default page