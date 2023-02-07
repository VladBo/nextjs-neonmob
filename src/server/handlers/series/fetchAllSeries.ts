import { Prisma, PrismaClient } from "@prisma/client";
import db from "../../../lib/servers/db";

export const fetchAllSeries = async (
  skip?: number,
  take?: number,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
) => {
  const series = await (prisma ?? db).series.findMany({
    include: {
      cards: true,
    },
    ...(skip && { skip }),
    ...(take && { take }),
  });
  return series;
};
