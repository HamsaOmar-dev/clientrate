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
};

const prisma = getPrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const email = req.query.email;
  const id = req.query.id;

  if (req.method !== "GET") {
    return res.status(400).json({ message: "Method not allowed" });
  }
  if (email == "undefined" || id == "undefined" || !email || !id) {
    return res.json({ message: "Missing email or id" });
  } else {
    let client_rates;

    client_rates = await prisma.clientrate.findMany({
      where: {
        userEmail: String(email),
        id: Number(id),
      },
    });

    if (!client_rates) {
      return res.json({ message: "Error getting client rate" });
    }

    res.status(200).json({
      message: "Client rate created successfully",
      data: client_rates,
    });
  }
}
