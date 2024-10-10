import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request : NextRequest){
    const { userId } = auth();

    if(!userId){
        return NextResponse.json({
            error : "Unauthorized User"
        }, {
            status : 401
        })
    }

    const {spaceName, customMessage, questions, spaceLogo} = await request.json();
    try {
        const space = await prisma.testimonialSpace.create({
            data : {
                spaceName : spaceName,
                spaceLogo : spaceLogo,
                customMessage : customMessage,
                questions : questions,
                userId : userId
            }
        })

        console.log(space)

        return NextResponse.json(space)
    } catch (error : any) {
        console.error("error while creating a space", error)
        return NextResponse.json({
            error : "error while creating a space"
        }, {
            status : 500
        })
    }
}

export async function GET(request : NextRequest) {
    const {userId} = auth();

    if(!userId){
        return NextResponse.json({
            error : "Unauthorized User"
        }, {
            status : 401
        })
    }

    try {
        const space = await prisma.testimonialSpace.findMany({
            where : {
                userId : userId
            }
        })
    
        return NextResponse.json(space);
    } catch (err : any) {
        console.error("Error fetching Json", err);

        return NextResponse.json({
            error : "Error fetching Json"
        }, {
            status: 500
        })
    }

    
}

