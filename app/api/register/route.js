import bcrypt from "bcrypt"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (req)=>{
    const body = await req.json();
    const {name,email, password, confirmPassword} = body;

    if(!name || !email || !password || !confirmPassword){
        return new NextResponse("Missing required fields", {status:400});
    }


    const exist = await prisma.user.findUnique({
        where:{
            email
        }
    });

    if(exist) {
        throw new Error("Email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10) 

    const user = await prisma.user.create({
        data:{
           name,
           email,
           password: hashedPassword,
           confirmPassword: hashedPassword
        }
    });

    return NextResponse.json(user) 

}