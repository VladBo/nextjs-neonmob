import { router } from "../trpc";
import { seriesRouter } from "./subRouters/series.router";
import { userRouter } from "./subRouters/user.router";

export const appRouter = router({
  user: userRouter,
  series: seriesRouter,
});

export type AppRouter = typeof appRouter;
