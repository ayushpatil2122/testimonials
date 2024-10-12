import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest, {params} : {params : {id : string}}) {
    const {id} = params;

    try {
        const space = await prisma.testimonialSpace.findMany({
            where : {
                id : id
            }
        })

        return NextResponse.json(space);
    } catch (error) {
        console.error("error while fetching a space", error);
        NextResponse.json({
            error : "error while fetching a space"
        }, {
            status : 500
        })
    }
}