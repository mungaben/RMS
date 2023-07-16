// delete single user

import prismaDb from "@/prisma/prismacli"

import { NextResponse } from "next/server"



type UserId = {
    id: string
}



export async function DELETE(res: NextResponse, { params }: { params: UserId }) {


    // get id 
    const id = params.id



    //  check if id
    try {



        if (!id) {
            return NextResponse.json({
                message: "id required",
                statusbar: "error"
            })
        }
        // check if user do exist
        const userExists = await prismaDb.user.findUnique({
            where: {
                id: id
            }
        })

        if (!userExists) {
            return NextResponse.json({
                message: " user does not exists",
                redirect: "true",
                statusbar: "error"
            })
        }
        // if user then  delete the user
        const DeleteUser = await prismaDb.user.delete({
            where: {
                id: userExists.id
            }
        })
        if (!DeleteUser) {
            return NextResponse.json({
                message: "user deelete unsucessfull",
                statusbar: "error"

            })
        }
        if (DeleteUser) {
            return NextResponse.json({
                message: "user deleted successfully",
                statusbar: "success"
            })
        }





    } catch (error) {
        return NextResponse.json({
            message: " error in deleting user",
            statusbar: "error"
        })

    }


}


// get sigle user by id
export async function GET(res: NextResponse, { params }: { params: UserId }) {
    // get id 
    const id = params.id

    //  check if id
    try {
        if (!id) {
            return NextResponse.json({
                message: "id required",
                statusbar: "error"
            })
        }
        // check if user do exist
        const userExists = await prismaDb.user.findUnique({
            where: {
                id: id
            }
        })

        if (!userExists) {
            return NextResponse.json({
                message: " user does not exists",
                redirect: "true",
                statusbar: "error"
            })
        }
        return NextResponse.json({
            message: "user found",
            statusbar: "success",
            result: userExists
        })



    } catch (error) {
        return NextResponse.json({
            message: " error in getting user",
            statusbar: "error"
        })

    }



}


// put single user
