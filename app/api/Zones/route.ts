





import prismaDb from "@/prisma/prismacli";



import { NextRequest, NextResponse } from "next/server";



// create a zone with region id

export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json();

    const { name, regionId } = body;

    const data = await prismaDb.zone.create({
        data: {
            name,
            regionId
        }
    });

    return NextResponse.json(data);
}