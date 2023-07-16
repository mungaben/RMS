





// delete request api



import { clerkClient } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next"

type UserId={
    id:string
}


export  async function DELETE(req:NextApiRequest,res:NextApiResponse,{params}:{params:UserId}){



    // get id 
    const id=params.id

  

    //  check if id
    try {
        if(!id){
            return res.status(400).json({
                message:"id required",
                statusbar:"error"
            })
        }
      
         const user = await clerkClient.users.deleteUser(id);
         console.log(user);
         

            if(!user){
                return res.status(400).json({
                    message:"user does not exists",
                    redirect:"true",
                    statusbar:"error"
                })
            }
            return res.status(200).json({
                message:"user deleted successfully",
                statusbar:"success"

            })

        
    } catch (error) {
        return res.status(400).json({
            message:"something went wrong",
            statusbar:"error"
        })
        
    }
}