import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: "onboarding@resend.dev",
    }),
    Google,
  ],
});
