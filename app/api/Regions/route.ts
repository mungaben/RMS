




import { NextRequest, NextResponse } from 'next/server';
import prismaDb from '../../../prisma/prismacli';






export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name} = body;
    // find region name

    try {
        if (!name) {
            return NextResponse.json({
                error: 'Region name is required',
            });
        }
        const region = await prismaDb.region.findFirst({
            where: {
                name,
            },
        });
        if (region) {
            return NextResponse.json({
                error: 'Region already exists',
            });
        }else if(!region){
            const result = await prismaDb.region.create({
                data: {
                    name,
                },
            });
            return NextResponse.json({
                message: 'Region created successfully',
                result,
            });
        }

    }catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
        });
    }


   



    
}



export async function GET(req: NextRequest, res: NextResponse) {
    const result = await prismaDb.region.findMany();
    return NextResponse.json(result);
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { id, name } = body;
    const result = await prismaDb.region.update({
        where: {
            id,
        },
        data: {
            name,
        },
    });
    console.log(result);
    
    return NextResponse.json(result);
}




