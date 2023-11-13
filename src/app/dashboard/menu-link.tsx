"use client";

import Link from "next/link";
import { FC } from "react";
import { MenuItem } from "./sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  item: MenuItem;
}

const MenuLink: FC<Props> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={cn(
        "flex items-center gap-2 hover:bg-slate-700 rounded-lg px-4 py-1.5",
        { "bg-slate-600": pathname === item.path }
      )}
    >
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
};

export default MenuLink;
