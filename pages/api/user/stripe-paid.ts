// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPrismaClient } from "../../../utils/getPrismaClient";

type Data = {
  message: string;
  data: {
    stripePaid: boolean;
  };
};
type Error = {
  message: string;
};

const prisma = getPrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const email = req.body.email;
  console.log("email", email);
  if (!email) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        stripePaid: true,
      },
    });

    return res.status(200).json({
      message: "Success",
      data: {
        stripePaid: true,
      },
    });
  }
  return res.status(401).json({ message: "Unauthorized" });
}
