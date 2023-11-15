import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const basePATH = process.env.NEXTAUTH_URL ?? "";

export const authOptions = {
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
          await fetch(`${basePATH}/api/createUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, name }),
          });

          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
