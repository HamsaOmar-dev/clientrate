import { PrismaClient } from "@prisma/client";

let prismaClientInstance: PrismaClient | null = null;

function getPrismaClient() {
  if (!prismaClientInstance) {
    prismaClientInstance = new PrismaClient();
  }
  return prismaClientInstance;
}

export { getPrismaClient };
