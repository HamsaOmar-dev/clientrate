import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user }: { user: any }) {
      const alreadyExists = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (alreadyExists) {
        return true;
      }

      await prisma.user
        .create({
          data: {
            name: user.name as string,
            email: user.email as string,
            profilePhoto: user.image,
          },
        })
        .catch((err) => {
          console.log(err);
          return false;
        });

      return true;
    },
  },
};

export default NextAuth(authOptions);
