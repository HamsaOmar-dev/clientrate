// Next.js API route support: https://nextjs.org/docs/api-routes/numberroduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPrismaClient } from "../../../utils/getPrismaClient";

type Error = {
  message: string;
};
type Data = {
  message: string;
};

const prisma = getPrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  if (req.method !== "DELETE") {
    return res.status(400).json({ message: "Method not allowed" });
  }

  const id = req.query.id;

  let client_rate;
  if (!id) {
    return res.json({ message: "Missing id" });
  }

  const deleted = await prisma.clientrate.delete({
    where: {
      id: Number(id),
    },
  });

  if (!deleted) {
    return res.json({ message: "Client rate not found" });
  }

  res.status(200).json({
    message: "Client rate deleted successfully",
  });
}
