import { Prisma, PrismaClient } from "@prisma/client";
import db from "../../../lib/servers/db";

export const fetchPopularCards = async (
  limit: number,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
) => {
  const cards = await (prisma ?? db).card.findMany({
    take: limit,
    orderBy: {
      collections: {
        _count: "desc",
      },
    },
    include: {
      collections: true,
    },
  });
  return cards;
};
