




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
                statusbar:'error'
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
                statusbar:'error'
            });
        }else if(!region){
            const result = await prismaDb.region.create({
                data: {
                    name,
                },
            });
            return NextResponse.json({
                message: 'Region created successfully',
                statusbar:'success',
                result,
            });
        }

    }catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar:'error'
        });
    }


   



    
}



export async function GET(req: NextRequest, res: NextResponse) {
//    get regions and their zones

    const regions = await prismaDb.region.findMany({
        include: {
            zones: true,
        },
    });
    return NextResponse.json({
        message: 'Regions fetched successfully',
        statusbar: 'success',
        regions,
    });
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

    
    return NextResponse.json(result);
}




