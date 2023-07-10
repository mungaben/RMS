





import prismaDb from "@/prisma/prismacli";



import { NextRequest, NextResponse } from "next/server";



// create a zone with region id

export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json();

    const { name, regionname } = body;

    try {
        // check if is empty
        if (!name) {
            return NextResponse.json({
                error: 'Zone name is required',
                statusbar: 'error',
            });
        }
        if (!regionname) {
            return NextResponse.json({
                error: 'Region name is required',
                statusbar: 'error',
            });
        }
        // check if zone already exists
        const zone = await prismaDb.zone.findFirst({
            where: {
                name,
            },
        });

        // get region id from region name
        const region = await prismaDb.region.findFirst({
            where: {
                name: regionname,
            },
        });
        if (!region) {
            return NextResponse.json({
                error: 'Region does not exist',
                statusbar: 'error',

            });
        }
        const regionId = region.id;

        if (zone) {
            return NextResponse.json({
                error: 'Zone already exists',
                statusbar: 'error',
                
            });
        }

        // create zone
        const result = await prismaDb.zone.create({
            data: {
                name,
                regionId
            },
        });
        return NextResponse.json({
            message: 'Zone created successfully',
            result,
            statusbar: 'success',
        });





        
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong in zone creation',
            statusbar: 'error',
        });
        
    }

   

}