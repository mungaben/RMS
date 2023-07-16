"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
// `use client` required for app router
import { useUser } from "@clerk/nextjs";
import MainDash from "./DashBoard2/components/MainDash";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
// if(user){
//   const {fullName,lastName,emailAddresses,id,username }=user
//   console.log( "full name",fullName,"last name",lastName,"email",emailAddresses[0].emailAddress,"id",id,"username",username);
  
// }
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     <MainDash/>
    </main>
  );
}
