import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export type EnumRegions = "westernRegion" | "southernRegion" | "northEasternRegion" | "northernRegion" | "easternRegion" | "centralRegion" | "informalSettlements";

const validRegions: string[] = ["westernRegion", "southernRegion", "northEasternRegion", "northernRegion", "easternRegion", "centralRegion", "informalSettlements"];
// craete a new user
export  async function POST(req:NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, email, password, role ,region,clerkid} = body;
    console.log("name",name,"email",email,"password",password,"role",role,"region",region,"clerkid",clerkid);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("hashedPassword",hashedPassword);
    
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
        if (!validRegions.includes(region)) {
            return NextResponse.json({
              error: 'Invalid region value',
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
    //    get the regionid
        const regionid = await prismaDb.region.findFirst({
            where: {
                name: region,
            },
        });
        // checxk if region exists
        if (!regionid) {
            return NextResponse.json({
                error: 'Region does not exists',
                statusbar: 'error',
            });
        }
       
        const result = await prismaDb.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                role: role,
                region:{
                    connect:{
                        id:regionid.id
                    }
                },
                clerkid: clerkid,
            },
        });
        return NextResponse.json({
            message: 'User created successfully',
            statusbar: 'success',
            result,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: 'Something went wrong in catch',
            statusbar: 'error',
        });
    }

}

// get all users
export async function GET(req:NextRequest, res: NextResponse) {
    try {
        const users = await prismaDb.user.findMany({ });
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