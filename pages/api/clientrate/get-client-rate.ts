// Next.js API route support: https://nextjs.org/docs/api-routes/numberroduction
import type { NextApiRequest, NextApiResponse } from "next";
import { clientrate, PrismaClient } from "@prisma/client";
import { getPrismaClient } from "../../../utils/getPrismaClient";

type Error = {
  message: string;
};
type Data = {
  message: string;
  data: clientrate[];
  stripePaid?: boolean;
};

const prisma = getPrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const email = req.query.email;

  let user;
  if (!email || email === undefined) {
    return res.status(400).json({ message: "Missing email" });
  } else {
    user = await prisma.user.findUnique({
      where: {
        email: String(email),
      },
    });
  }

  if (!user) {
    return { message: "User not found" };
  }

  if (!user.stripePaid) {
    return res.json({
      message: "Pay for subscription to get your client rates",
      data: [],
      stripePaid: false,
    });
  }
  if (req.method !== "GET") {
    return res.status(400).json({ message: "Method not allowed" });
  }
  if (!email || email === undefined) {
    return res.status(400).json({ message: "Missing email" });
  }

  let client_rates;

  client_rates = await prisma.clientrate.findMany({
    where: {
      userEmail: String(email),
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  if (!client_rates) {
    return res.status(400).json({ message: "Error getting client rate" });
  }

  res.status(200).json({
    message: "Client rate created successfully",
    data: client_rates,
  });
}
