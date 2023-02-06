"use client";

import Link from "next/link";
import cn from "../../helpers/cn";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "../../types/types";
import { useState } from "react";
import { Icons } from "../ui/Icons";
import { siteConfig } from "../../config/site";
import MobileMenu from "./MobileMenu";

const MainMenu = ({ items }: { items: MainNavItem[] }) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-semibold text-slate-600 sm:text-sm",
                item.href.startsWith(`/${segment}`) && "text-slate-900",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && <MobileMenu items={items} />}
    </div>
  );
};

export default MainMenu;
