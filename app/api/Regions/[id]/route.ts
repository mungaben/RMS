



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
        if(!RegionAvailable){
            return NextResponse.json({
                error: "region not found",
                message: "Region not deleted",
                statusbar: "error",
            });
        }
        
        if(RegionAvailable){
        const deleteRegion= await prismaDb.region.deleteMany({
            where:{
                id:id
            }
        });
       
        
        return NextResponse.json({
            message: "Region deleted",
            statusbar: "success",
            deleteRegion,
        });
    }else{
        return NextResponse.json({
            error: "region not found",
            message: "Region not deleted",
            statusbar: "error",

    });
    }

  
    

    }catch(error){
        return NextResponse.json({error: "error in deleting user"});
    }

}