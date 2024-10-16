





import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";




// create position
export async function POST(req: NextRequest, res: NextResponse) {
    
        const body = await req.json();
    
        const { name } = body;
    
  
    try {
        // check if is empty
        if (!name) {
            return NextResponse.json({
                error: 'Position name is required',
                statusbar: 'error',
            });
        }
        // check if position already exists
  
        const positionexists = await prismaDb.position.findFirst({
            where: {
                name,
            },
        });
        if (positionexists) {
            return NextResponse.json({
                error: 'Position already exists',
                statusbar: 'error',
            });
        }



        const position = await prismaDb.position.create({
            data: {
                name,
                
            },
        });
    
        return NextResponse.json({
            message: 'Position created successfully',
            statusbar: 'success',
            position,
        });
    



        
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error',
            message: error,
        });
        
    }
     
}





// get all positions
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const positions = await prismaDb.position.findMany({
            orderBy: {
                name: 'asc',
            },
        });
        return NextResponse.json({
            message: 'Positions fetched successfully',
            statusbar: 'success',
            positions,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error',
            message: error,
        });
    }
}



// update position
export async function PUT(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, id } = body;
    try {
        // check if is empty
        if (!name) {
            return NextResponse.json({
                error: 'Position name is required',
                statusbar: 'error',
            });
        }
        // check if position already exists
     
        const positionexists = await prismaDb.position.findFirst({
            where: {
                name,
            },
        });
        if (positionexists) {
            return NextResponse.json({
                error: 'Position already exists',
                statusbar: 'error',
            });
        }
        const position = await prismaDb.position.update({
            where: {
                id,
            },
            data: {
                name,
            },
        });
        return NextResponse.json({
            message: 'Position updated successfully',
            statusbar: 'success',
            position,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error',
            message: error,
        });
    }
}