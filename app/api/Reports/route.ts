import prismaDb from "@/prisma/prismacli";
import { NextRequest, NextResponse } from "next/server";

// post data in db
// export async function POST(req:NextRequest,res:NextResponse){
//     const body= await req.json()
//     // frombody get TimeNow,systemName,value,time,disabled

//     // use create many
//     console.log("body",body);

//     const result= await prismaDb.tableData.createMany({
//         data:body
//     })
//     console.log("result",result);

// }

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const dataToCreate = [];

  for (let i = 0; i < body.length; i++) {
    const { value, time, systemName, TimeNow, region: Region } = body[i];
    if (!value) {
      return NextResponse.json({
        message: "Missing value required fields",
        statusbar: "error",
      });
    } else if (!time) {
      return NextResponse.json({
        message: "Missing time required fields",
        statusbar: "error",
      });
    } else if (!systemName) {
      return NextResponse.json({
        message: "Missing sytemName required fields",
        statusbar: "error",
      });
    } else if (!TimeNow) {
      return NextResponse.json({
        message: "Missing timenow required fields",
      });
    } else if (!Region) {
      return NextResponse.json({
        message: "Missing region required fields",
      });
    }

    dataToCreate.push({
      value,
      time,
      systemName,
      TimeNow: new Date(TimeNow),
      Region,
    });
  }

  try {
    const result = await prismaDb.tableData.createMany({
      data: dataToCreate,
    });

    return NextResponse.json({
      message: "success",
      result,
    });
  } catch (error) {
    console.error("Error creating records:", error);
    return NextResponse.json({
      message: "Error creating records",
      statusbar: "error",
    });
  }
}

//   query all data
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const result = await prismaDb.tableData.findMany();

    return NextResponse.json({
      message: "success",
      statusbar: "success",
      result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error creating records",
      statusbar: "error",
    });
  }
}
