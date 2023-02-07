import { Prisma, PrismaClient } from "@prisma/client";
import db from "../../../lib/servers/db";

export const fetchCardById = async (
  id: string,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
) => {
  const card = await (prisma ?? db).card.findFirst({
    where: {
      id,
    },
  });
  if (!card) return;
  return card;
};
