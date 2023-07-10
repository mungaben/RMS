





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
        console.log("posted data", name, regionname);


        // get region id from region name
        const region = await prismaDb.region.findFirst({
            where: {
                name: regionname,
                zones: {
                    some: {
                        name: name,
                    },
                },
            },
        });
        console.log("region", region);


        if (region) {
            return NextResponse.json({
                error: 'Region does exist',
                statusbar: 'error',

            });
        }
        // get region id from region name
        const regiondata = await prismaDb.region.findFirst({
            where: {
                name: regionname,
            },
        });
        console.log("regiondata", regiondata);

        if (!regiondata) {
            return NextResponse.json({
                error: 'Region does not exist',
                statusbar: 'error',
            });
        }





        // create zone
        const result = await prismaDb.zone.create({
            data: {
                name,
                regionId: regiondata.id,
            },
        });
        console.log("result", result);


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



// put zone with region id

export async function PUT(req: NextRequest, res: NextResponse) {

    const body = await req.json();

    const { name, regionname, id } = body;



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
        console.log("posted data", name, regionname);

        // get region id from region name
        const region = await prismaDb.region.findFirst({
            where: {
                name: regionname,
                zones: {
                    some: {
                        name: name,
                    },
                },
            },
        });
        console.log("region", region);

        if (region) {
            return NextResponse.json({
                error: 'Region has that zone already',
                statusbar: 'error',

            });
        }
        // get region id from region name
        const regiondata = await prismaDb.region.findFirst({
            where: {
                name: regionname,
            },
        });
        console.log("regiondata", regiondata);

        if (!regiondata) {
            return NextResponse.json({
                error: 'Region does not exist',
                statusbar: 'error',
            });
        }

        // update zone
        const result = await prismaDb.zone.update({
            where: {
                id,
            },
            data: {
                name,
                regionId: regiondata.id,
            },
        });
        console.log("result", result);


        return NextResponse.json({
            message: 'Zone updated successfully',
            result,
            statusbar: 'success',
        });



    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong in zone update',
            statusbar: 'error',
        });

    }




}


// get zone with region and zonenames

export async function GET(req: NextRequest, res: NextResponse) {

    // get regions and their zones

    try {
        const result = await prismaDb.zone.findMany({
            include: {
                region: true,
                zoneNames: true,
            },
        });


        console.log("result", result);
        return NextResponse.json({
            result,
            statusbar: 'success',
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong in zone get',
            statusbar: 'error',
        });

    }

}




