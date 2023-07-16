
"use client"
import React from 'react'
import { SignUp } from "@clerk/nextjs";

const page = () => {
    // after sign up post data to db and check if user is admin if admin take to admin page else take to user page{"/"}
  return (
    <div className='flex items-center justify-center '>
         <SignUp afterSignUpUrl={'/'}/>
    </div>
  )
}

export default page