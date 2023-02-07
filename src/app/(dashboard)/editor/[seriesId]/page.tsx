import { notFound, redirect } from "next/navigation";

import { Series, User } from "@prisma/client";
// import { Editor } from "@/components/dashboard/editor";
import { getCurrentUser } from "../../../../lib/servers/session";
import { trpc } from "../../../../providers/trpcProvider";
import { fetchSeriesById } from "../../../../server/handlers/series";

interface EditorPageProps {
  params: { seriesId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const series = await fetchSeriesById(params.seriesId, user.id);

  if (!series) {
    notFound();
  }

  // return <Editor series={series} />;
  return <></>;
}
