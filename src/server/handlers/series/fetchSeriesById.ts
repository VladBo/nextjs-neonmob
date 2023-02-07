import { Prisma, PrismaClient } from "@prisma/client";
import db from "../../../lib/servers/db";

export const fetchSeriesById = async (
  id: string,
  userId: string,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
) => {
  const series = await (prisma ?? db).series.findFirst({
    where: {
      id,
      authorId: userId,
    },
    include: {
      cards: true,
    },
  });
  if (!series) return;
  return series;
};
