// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getPrismaClient } from "../../../utils/getPrismaClient";
type Data = {
  message: string;
};

const prisma = getPrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = req.body;

  const alreadyExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (alreadyExists) {
    return res.status(400).json({ message: "User already exists with the current email" });
  }

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      profilePhoto: data.profilePhoto,
    },
  });

  res.status(200).json({ message: "User created successfully" });
}