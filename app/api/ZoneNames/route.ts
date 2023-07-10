


import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";



// create zonename with Zoneid

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, zonename } = body;
    // find region name

    try {
        if (!name) {
            return NextResponse.json({
                error: 'Zone name is required',
            });
        }
        if (!zonename) {
            return NextResponse.json({
                error: 'Zone id is required',
                statusbar: 'error',
            });
        }
        const zone = await prismaDb.zone.findFirst({
            where: {
                name:zonename,
            },
        });
        if (!zone) {
            return NextResponse.json({
                error: 'Zone does not exists',
                statusbar: 'error',

            });
        }

        if (zone) {
            const result = await
                prismaDb.zoneNames.create({
                    data: {
                        name,
                        zoneId: zone.id
                    },
                });
            return NextResponse.json({
                message: 'Zone created successfully',
                statusbar: 'success',
                result,
            });
        }
    } catch (error) {
        return NextResponse.json({
            error: 'Error creating zone',
            statusbar: 'error',
        });
    }


}