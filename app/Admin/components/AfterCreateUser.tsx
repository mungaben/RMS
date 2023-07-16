"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AfterCreateUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (isSignedIn) {
    // and user.emaildaress is mungaben and name is munga
    // take to admin page add  role as admin ad take to admin page
    // else take to user page

    if (user) {
      if (
        user.emailAddresses[0].emailAddress === "mungaben@gmail.com" &&
        user.username === "munga"
      ) {
        redirect("/Admin");
      } else {
        redirect("/");
      }
    }
  }

  return <div>AfterCreateUser</div>;
};

export default AfterCreateUser;
