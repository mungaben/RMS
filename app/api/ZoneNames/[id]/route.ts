import { type } from 'os';
import prismaDb from '../../../../prisma/prismacli';
import { NextRequest, NextResponse } from 'next/server';

type ZoneName = {
    id: string;
}


// delete  zone name with zonenameid
export async function DELETE(req: NextRequest, { params }: { params: ZoneName }, res: NextResponse) {
    const { id } = params;
  
    try {
        // check if is empty
        if (!id) {
            return NextResponse.json({
                error: 'ZoneName id is required',
                statusbar:'error'
            });
        }
        // check if zonename already exists
        const zonenameexist = await prismaDb.zoneNames.findFirst({
            where: {
                id: id,
            },
           
        });

        if (!zonenameexist) {
            return NextResponse.json({
                error: 'ZoneName does not exists',
                statusbar:'error'

            });
        }




        const zonename = await prismaDb.zoneNames.delete({
            where: {
                id: id,
            },
        });
        // check zoneid 
        const zoneid = await prismaDb.zone.findFirst({
            where: {
                id: zonename?.zoneId,
            },
        });
        // if no zone
        if (!zoneid) {
            return NextResponse.json({
                error: 'Zone does not exists',
                statusbar:'error'
            });
        }

        return NextResponse.json({
            message: `ZoneName ${zonename?.name}  deleted successfully for ${zoneid?.name} `,
            statusbar:'success',
            zonename,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar:'error'

        });
    }
}


// update zonename with zonenameid
export async function PUT(req: NextRequest, { params }: { params: ZoneName }, res: NextResponse) {
    const body = await req.json();
    const { id } = params;
    const { name } = body;
;
    try {
        // check if is empty
        if (!id) {
            return NextResponse.json({
                error: 'ZoneName id is required',
            });
        }
        if (!name) {
            return NextResponse.json({
                error: 'ZoneName name is required',
            });
        }
        // check if zonename already exists
        const zonenameexist = await prismaDb.zoneNames.findFirst({
            where: {
                id: id,
            },
            include: {
                zone: true,
            }
        });
        if (!zonenameexist) {
            return NextResponse.json({
                error: 'ZoneName does not exists',
            });
        }
        const zonename = await prismaDb.zoneNames.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        });
        return NextResponse.json({
            message: `ZoneName  name updated successfully for ${zonename?.name}`,
            zonename,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
        });
    }
}







// get request for single item
export async function GET(req: NextRequest, { params }: { params: ZoneName }, res: NextResponse) {
    const { id } = params;
  
    try {
        // check if is empty
        if (!id) {
            return NextResponse.json({
                error: 'ZoneName id is required',
                statusbar:'error'
            });
        }
        // check if zonename already exists
        const zonenameexist = await prismaDb.zoneNames.findFirst({
            where: {
                id: id,
            },
            include: {
                zone: true,
            }
        });
        if (!zonenameexist) {
            return NextResponse.json({
                error: 'ZoneName does not exists',
                statusbar:'error'
            });
        }
        const zonename = await prismaDb.zoneNames.findFirst({
            where: {
                id: id,
            },
          
        });
        return NextResponse.json({
            message: `ZoneName  name fetched successfully for ${zonename?.name}`,
            statusbar:'success',
            zonename,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar:'error'
        });
    }
}
