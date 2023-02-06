import { redirect } from "next/navigation";
import { getCurrentUser } from "../../../lib/servers/session";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return <></>;
}
