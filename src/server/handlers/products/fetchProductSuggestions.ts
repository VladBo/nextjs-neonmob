import { Prisma, PrismaClient } from "@prisma/client";
import { massageProductClientList } from "../../../helpers/massageProductClient";
import db from "../../../lib/servers/db";

export const fetchProductSuggestions = async ({
  prisma,
  categoryId,
  skipProductId,
  limit,
}: {
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  categoryId: string;
  skipProductId?: string;
  limit?: number;
}) => {
  const products = await (prisma ?? db).product.findMany({
    where: {
      categoryId,
      ...(skipProductId && {
        NOT: {
          id: skipProductId,
        },
      }),
    },
    ...(limit && { take: limit }),
    include: {
      category: true,
      _count: {
        select: {
          orderItems: true,
        },
      },
    },
  });
  return massageProductClientList(products);
};
