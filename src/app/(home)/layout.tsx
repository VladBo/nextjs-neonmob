import MainMenu from "../../components/menus/MainMenu";
import { ModeToggle } from "../../components/ModeToggle";
import { homepageConfig } from "../../config/homepage";
import { SignInButton } from "../../components/buttons/SignInButton";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-black">
        <div className="container flex h-16 items-center">
          <MainMenu items={homepageConfig.mainMenu} />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <ModeToggle />
            <SignInButton />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
