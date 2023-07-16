import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";




// craete a new user
export default async function POST(req:NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, email, password, role ,region,clerkid,position} = body;
    try {
        if (!name) {
            return NextResponse.json({
                error: 'Name is required',
                statusbar: 'error',
            });
        }
        if (!email) {
            return NextResponse.json({
                error: 'Email is required',
                statusbar: 'error',
            });
        }
        if (!password) {
            return NextResponse.json({
                error: 'Password is required',
                statusbar: 'error',
            });
        }
        if (!role) {
            return NextResponse.json({
                error: 'Role is required',
                statusbar: 'error',
            });
        }
        if (!region) {
            return NextResponse.json({
                error: 'Region is required',
                statusbar: 'error',
            });
        }
        if (!clerkid) {
            return NextResponse.json({
                error: 'Clerk id is required',
                statusbar: 'error',
            });
        }
        const user = await prismaDb.user.findFirst({
            where: {
                email,
            },
        });
        if (user) {
            return NextResponse.json({
                error: 'User already exists',
                statusbar: 'error',
            });
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await prismaDb.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                region,
                clerkid,
                position

            },
        });
        return NextResponse.json({
            message: 'User created successfully',
            statusbar: 'success',
            result,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error',
        });
    }

}

// get all users
export async function GET(req:NextRequest, res: NextResponse) {
    try {
        const users = await prismaDb.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                role:true,
                region:true,
                clerkid:true,
                createdAt:true,
                updatedAt:true


            }

        });
        return NextResponse.json({
            message: 'Users fetched successfully',
            statusbar: 'success',
            users,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error',
        });
    }
}