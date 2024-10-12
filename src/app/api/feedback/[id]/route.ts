import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest, {params} : {params : {id : string}}) {
    const {id} = params;
    
    try {
        const response = await prisma.feedBack.findMany({
            where : {
                TestimonialSpaceId : id
            }
        })

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error while fetching feedback:", error);
        NextResponse.json({
            error : "Error while fetching feedback"
        }, {
            status : 500
        })
    }
}