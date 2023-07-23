




import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";

type positionprops = {
    id: string
}
// delete position
export async function DELETE(req: NextRequest, { params }: { params: positionprops }, res: NextResponse) {

    const { id } = params;

    try {
        // if position is empty
        if (!id) {
            return NextResponse.json({
                error: "position id is required",
                message: "position id is required",
                statusbar: "error",

            });
        }
        // check if position exists
        const position = await prismaDb.position.findUnique({
            where: {
                id,
            }
        });
        // console.log("user",position);

        if (!position) {
            return NextResponse.json({
                error: "position does not exists",
                message: "position does not exists",
                statusbar: "error",

            });
        }


        const positionAvailable = await prismaDb.position.findUnique({
            where: {
                id,
            }
        });
        // console.log("user available",positionAvailable);

        if (positionAvailable) {
            const deleteposition = await prismaDb.position.deleteMany({
                where: {
                    id: id
                }
            });


            return NextResponse.json({
                message: "position deleted"
                , statusbar: "success",
            });
        } else {
            return NextResponse.json({
                error: "position not found"
                , statusbar: "error",
            });
        }



    } catch (error) {
        return NextResponse.json({
            error: "error in deleting user"
            , statusbar: "error",
        });
    }

}




// update position

export async function PUT(req: NextRequest, { params }: { params: positionprops }, res: NextResponse) {

    const body = await req.json();
    const { id } = params;
    const { name } = body;
  
    try {
        // if position is empty
        if (!id) {
            return NextResponse.json({
                error: "position id is required",
                message: "position id is required",
                statusbar: "error",

            });
        }
        // check if position exists
        const position = await prismaDb.position.findUnique({
            where: {
                id,
            }
        });
        // console.log("user",position);

        if (!position) {
            return NextResponse.json({
                error: "position does not exists",
                message: "position does not exists",
                statusbar: "error",

            });
        }

        // check if position already exists
        const positionexist = await prismaDb.position.findFirst({
            where: {
                name: name,
            },
        });
        if (positionexist) {
            return NextResponse.json({
                error: "position already exists",
                message: "position already exists",
                statusbar: "error",

            });
        }

        const updateposition = await prismaDb.position.update({
            where: {
                id: id,
            },
            data: {
                name: name,
            },
        }
        );
        return NextResponse.json({
            message: `position updated successfully for ${updateposition?.name}`
            , statusbar: "success",
        });
    } catch (error) {
        return NextResponse.json({
            error: "error in updating user"
            , statusbar: "error",
        });
    }
}


