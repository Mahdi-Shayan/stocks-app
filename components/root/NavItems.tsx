"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

function NavItems({ className }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return href === pathname;
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href as Route<string>}
            className={cn(
              "hover:text-yellow-500 transition-colors",
              isActive(href) && "text-gray-100",
              className
            )}
          >
            {label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NavItems;
