import Dashboard from "@/components/dashboard/Dashboard";
import prisma from "@/lib/db";
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

export default async function dashboard() {
    const user = await currentUser()

    if(!user){
        redirect('/')
    } 

    const loggedInUser = await prisma.user.findUnique({
        where : {
            clerkUserId : user.id
        }
    })

    if(!loggedInUser){
        await prisma.user.create({
          data : {
            clerkUserId : user.id,
            name :`${user.firstName} ${user.lastName}`,
            imageUrl : user.imageUrl,
            email : user.emailAddresses[0].emailAddress
          }
        })
    }
    return <>
       <Dashboard/>
    </>
}