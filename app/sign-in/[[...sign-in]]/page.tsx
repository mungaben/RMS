


"use client"
import React from 'react'
import { SignIn } from "@clerk/nextjs";

const page = () => {
    // after sign in check if user is admin if admin take to admin page else take to user page{"/"}
  return (
    <div className='flex items-center justify-center '>
            <SignIn  afterSignInUrl={"/"} />
    </div>
  )
}

export default page