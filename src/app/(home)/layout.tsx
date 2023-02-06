import Link from "next/link";
import Header from "../../components/Header";
import MainMenu from "../../components/menus/MainMenu";
import { homepageConfig } from "../../config/homepage";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <header className="sticky top-0 z-40 bg-black px-2 py-3">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainMenu items={homepageConfig.mainMenu} />
          <nav>
            <Link
              href="/login"
              className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}
