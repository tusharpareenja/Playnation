import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db/drizzle";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback - user:", user);
      console.log("JWT callback - token before:", token);

      if (user) {
        token.email = user.email;
      }

      
      return token;
    },
    async session({ session, token }) {


      if (token?.email) {
        session.user.email = token.email;
      }


      return session;
    },
  },
});
