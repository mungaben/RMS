import React from 'react'
import MainDash from './components/MainDash'
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

const page = () => {


 
  return (
    <MainDash/>
  )
}


export default page;
