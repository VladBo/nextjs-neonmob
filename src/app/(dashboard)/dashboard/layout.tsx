import { notFound } from "next/navigation";
import MainMenu from "../../../components/menus/MainMenu";
import UserMenu from "../../../components/menus/UserMenu";
import { ModeToggle } from "../../../components/ModeToggle";
import { HeaderSearch } from "../../../components/Search";
import { dashboardConfig } from "../../../config/dashboard";
import { getCurrentUser } from "../../../lib/servers/session";

export default async function DashboardLayout() {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
        <div className="container flex h-16 items-center">
          <MainMenu items={dashboardConfig.mainMenu} />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="hidden flex-1 sm:grow-0 md:flex">
              <HeaderSearch />
            </div>
            <ModeToggle />
            <UserMenu user={user} />
          </div>
        </div>
      </header>
    </div>
  );
}
