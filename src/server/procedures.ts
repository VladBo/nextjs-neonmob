import * as trpc from "@trpc/server";
import { Role } from "@prisma/client";
import { procedure } from "./trpc";

export const userProcedure = procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const adminProcedure = procedure.use(async ({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
  }
  const isAdmin = !!ctx.prisma.user.findFirst({
    where: {
      id: ctx.session.user.id,
      role: Role.ADMIN,
    },
  });
  if (!isAdmin) {
    throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});
