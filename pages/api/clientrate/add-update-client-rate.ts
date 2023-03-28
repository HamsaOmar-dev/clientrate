import { getServerSession } from "next-auth";
// Next.js API route support: https://nextjs.org/docs/api-routes/numberroduction
import type { NextApiRequest, NextApiResponse } from "next";
import { clientrate, PrismaClient } from "@prisma/client";
import { authOptions } from "../auth/[...nextauth]";
import { getPrismaClient } from "../../../utils/getPrismaClient";

type Error = {
  message: string;
};
type Data = {
  message: string;
  data: { stripePaid: boolean };
  // data: clientrate;
};

const prisma = getPrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  // const session = await getServerSession(req, res, authOptions);

  // console.log("session", session);

  // if (!session) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  if (req.method !== "POST" && req.method !== "PUT") {
    return res.status(400).json({ message: "Method not allowed" });
  }

  const data = req.body;
  const id = req.query.id;

  if (!data.userEmail) {
    return res.status(400).json({ message: "Unauthorized Access" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.userEmail,
    },
  });
  let message;
  let stripeStatus;
  if (!user?.stripePaid) {
    message = "Proceed To Payment To Add This ClientRate";
    stripeStatus = { stripePaid: false };
  }

  let client_rate;
  if (!id) {
    // create
    client_rate = await prisma.clientrate.create({
      data,
    });
  } else {
    // update
    client_rate = await prisma.clientrate.update({
      where: {
        id: Number(id),
      },
      data,
    });
  }
  if (!client_rate) {
    return res.status(400).json({ message: "Error creating client rate" });
  }

  res.status(200).json({
    message: message || "Client rate created successfully",
    data: stripeStatus,
  });
}
