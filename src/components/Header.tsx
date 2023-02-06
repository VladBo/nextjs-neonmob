import Link from "next/link";
import MainMenu from "./menus/MainMenu";

const Header = () => {
  return (
    <header className="container sticky top-0 z-40 bg-white">
      {/* <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <MainMenu items={mainMenuConfig.items} />
        <nav>
          <Link
            href="/login"
            className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Login
          </Link>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
