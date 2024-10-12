import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { noOfStars, content, name, email, TestimonialSpaceId } = await request.json();

    try {
        const response = await prisma.feedBack.create({
            data: {
                noOfStars,
                content,
                name,
                email,
                TestimonialSpaceId
            }
        });
        console.log(response);
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error while creating feedback:", error);
        return NextResponse.json(
            { error: "Error while creating feedback" },
            { status: 500 }
        );
    }
}

