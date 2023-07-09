

import prismaDb from "@/prisma/prismacli";

import { NextRequest, NextResponse } from "next/server";

type Idtype={
    id:string
}

export async function DELETE(req: NextRequest,{params}:{params:Idtype}, res: NextResponse) {

    const {id}= params;
   
    try{
        const RegionAvailable= await prismaDb.region.findUnique({
            where:{
                id,
            }
        });
        // console.log("user available",RegionAvailable);
        
        if(RegionAvailable){
        const deleteRegion= await prismaDb.region.deleteMany({
            where:{
                id:id
            }
        });
       
        
        return NextResponse.json({message: "user deleted"});
    }else{
        return NextResponse.json({error: "user not found"});
    }

  
    

    }catch(error){
        return NextResponse.json({error: "error in deleting user"});
    }

}