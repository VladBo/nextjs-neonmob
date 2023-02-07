import { Prisma, PrismaClient } from "@prisma/client";
import { massageProductClientList } from "../../../helpers/massageProductClient";
import db from "../../../lib/servers/db";

export const fetchAllCards = async (
  skip?: number,
  take?: number,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
) => {
  const cards = await (prisma ?? db).card.findMany({
    // include: {
    // category: true,
    // _count: {
    //   select: {
    //     orderItems: true,
    //   },
    // },
    // },
    ...(skip && { skip }),
    ...(take && { take }),
  });
  // return massageProductClientList(cards);
  return cards;
};
