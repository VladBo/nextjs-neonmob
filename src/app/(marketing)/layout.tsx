import Link from "next/link";
import { marketingConfig } from "../../config/marketing";
import { SiteFooter } from "../../components/SiteFooter";
import { MainNav } from "../../components/MainNav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className="bg-brand-500 hover:bg-brand-400 focus:ring-brand-500 relative inline-flex h-8 items-center rounded-md border border-transparent px-6 py-1 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
