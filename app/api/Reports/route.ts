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
      const { value, time, systemName, TimeNow, disabled } = body[i];
      dataToCreate.push({
        value,
        time,
        systemName,
        TimeNow: new Date(TimeNow),
        disabled,
      });
    }
  
    try {
      const result = await prismaDb.tableData.createMany({
        data: dataToCreate,
      });
      console.log("result", result);
     return NextResponse.json({
        message:"sucess",
        result
     })
    } catch (error) {
      console.error("Error creating records:", error);
    
    }
  }



//   query all data
export async function GET(req:NextRequest,res:NextResponse){
    const result= await prismaDb.tableData.findMany()
    console.log("result",result);
    
    return NextResponse.json( {message:"sucesss",result})
}

  
  
  
  
  
  
  
  