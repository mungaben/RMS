import prismaDb from '@/prisma/prismacli';
import { NextRequest, NextResponse } from 'next/server';






export default async function POST(req:NextRequest, res:NextResponse) {
  const  body = await req.json
    const { name } = body;
  const result = await prismaDb.region.create({
    data: {
      name,
    },
  });
  
    return NextResponse.json(result);
}