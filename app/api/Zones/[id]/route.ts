
import prismaDb from '@/prisma/prismacli';
import { NextRequest, NextResponse } from 'next/server';






// delete zone
type Zoneprops = {
    id: string
}


export async function DELETE(req: NextRequest, { params }: { params: Zoneprops }, res: NextResponse) {
    const { id } = params;
    const zoneId = id;
    try {
        const zone = await prismaDb.zone.findUnique({
            where: {
                id: zoneId,
            },
        });
        if (!zone) {
            return NextResponse.json({
                error: 'Zone does not exist',
                statusbar: 'error',
            });
        }
        const result = await prismaDb.zone.delete({
            where: {
                id: zoneId,
            },
        });
        return NextResponse.json({

            message: 'Zone deleted successfully',
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
// get zone with region id
export async function GET(req: NextRequest, { params }: { params: Zoneprops }, res: NextResponse) {
    const { id } = params;
    const zoneId = id;
    try {
        const zone = await prismaDb.zone.findUnique({
            where: {
                id: zoneId,
            },
        });
        if (!zone) {
            return NextResponse.json({
                error: 'Zone does not exist',
                statusbar: 'error'
            });
        }
        return NextResponse.json({
            message: 'Zone fetched successfully',
            statusbar: 'success',
            zone,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error'
        });
    }
}

// update zone with region id
export async function PUT(req: NextRequest, { params }: { params: Zoneprops }, res: NextResponse) {
    const { id } = params;
    const body = await req.json();
    const { name } = body;
    const zoneId = id;
    try {
        //  id exists
        if (!name) {
            return NextResponse.json({
                error: 'Zone name is required',
                statusbar: 'error'
            });
        }



        const zone = await prismaDb.zone.findUnique({
            where: {
                id: zoneId,
            },
        });
        if (!zone) {
            return NextResponse.json({
                error: 'Zone does not exist',
                statusbar: 'error'
            });
        }
        const result = await prismaDb.zone.update({
            where: {
                id: zoneId,
            },
            data: {
                name,
            },
        });
        return NextResponse.json({
            message: 'Zone updated successfully',
            statusbar: 'success',
            result,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong',
            statusbar: 'error'
        });
    }
}


