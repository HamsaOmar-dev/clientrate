// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";
import { getPrismaClient } from "../../../utils/getPrismaClient";

type Data = {
  message: string;
  data: User;
};
type Error = {
  message: string;
};

const prisma = getPrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  console.log(req.body);
  const data = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
    return res.status(200).json({ message: "User Found", data: user });
  }

  return res.status(200).json({ message: "User Not Found" });
}
