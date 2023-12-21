import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/model/user";
import { connect } from "@/utilities/db";
import { NextResponse } from "next/server";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET_KEY ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  //Connect to MongoDB
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;

        try {
          await connect();

          const existingUser = await User.findOne({ email });

          if (!existingUser) {
            const userCreated = await User.create({
              email: email,
              name: name,
              balance: 1,
            });


            return NextResponse.json({
              message: "User created",
              status: 200,
              success: true,
            });
          } else {
            return NextResponse.json({
              message: "User already exists",
              status: 200,
              success: true,
            });
          }
        } catch (e) {
          console.error("Error:", e);
          return NextResponse.json({
            message: "Internal Server Error",
            success: false,
          });
        }
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
