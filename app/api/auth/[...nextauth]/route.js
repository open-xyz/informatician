import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectedToDB } from "@/utils/database";
import User from "@/model/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });

        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }

        return session;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    async signIn({ profile }) {
      try {
        await connectedToDB();

        const userExists = await User.findOne({
          email: profile.email,
        });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});

export {handler as GET, handler as POST};