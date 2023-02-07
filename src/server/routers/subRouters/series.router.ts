import { z } from "zod";
import { userProcedure } from "../../procedures";
import { router } from "../../trpc";

export const seriesRouter = router({
  all: userProcedure.query(({ ctx }) => {
    return ctx.prisma.series.findMany();
  }),
  byId: userProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.series.findFirst({ where: { id: input } });
  }),
  create: userProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        authorId: z.string(),
        coverImage: z.string(),
        cards: z.optional(
          z.object({
            create: z.array(
              z.object({
                name: z.string(),
                description: z.string(),
                image: z.string(),
              })
            ),
          })
        ),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.series.create({ data: input });
    }),
});
