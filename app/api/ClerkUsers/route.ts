



import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
export  async function POST(req:NextRequest, res:NextResponse) {
    const body=await req.json()
  const userId = body.userId;
  console.log(userId);
  
  try {
    await clerkClient.users.deleteUser(userId);
    return NextResponse.json({
        message:"user deleted successfully",
        statusbar:"success"
    })
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"something went wrong",
        statusbar:"error"
    })
  }
}



// get all users
export async function GET(req:NextRequest,res:NextResponse){
    try {
        const users = await clerkClient.users.getUserList();
        return NextResponse.json({
            message:"users fetched successfully",
            statusbar:"success",
            users
        })
    } catch (error) {
        return NextResponse.json({
            message:"something went wrong",
            statusbar:"error"
        })
    }
}
