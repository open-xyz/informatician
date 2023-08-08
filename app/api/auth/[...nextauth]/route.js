import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/libs/prismadb"
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt"

export const authOptions = {
      adapter: PrismaAdapter(prisma),
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
           name: "credentials",
           credentials:{
               email: {label: "Email", type:"text", placeholder:"Enter your Email"},

               password: { label: "Password", type: "Enter your Password" },

              confirmPassword: { label: "Confirm Password", type: "Confirm your Password" },
           },

           async authorize(credentials){
              // Check if email and password is there
              if(!credentials.email || !credentials.password){
                throw new Error("Please Enter your Email & Password");
              }

              // check if user exist
              const user = await prisma.user.findUnique({ 
                where:{
                  email: credentials.email
                }
              });

              // if no user exist or user not found
              if(!user || !user?.hashedPassword){
                throw new Error("User Not Found!"); 
            }

            // Check Password Matches
            const passwordMatches = await bcrypt.compare(credentials.password, user.hashedPassword);

            // if password does not match
            if(!passwordMatches){
              throw new Error("Incorrect Password!")
            }
             
            return user;
          }
        })
      ],

      secret: process.env.SECRET,
      session:{
        strategy:'jwt'
      },
      debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}