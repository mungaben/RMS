




import { NextRequest, NextResponse } from 'next/server';
import prismaDb from '../../../prisma/prismacli';





export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name } = body;


    const result = await prismaDb.region.create({
        data: {
            name,
        },
    });



    return NextResponse.json(result);
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
    return NextResponse.json(result);
}




