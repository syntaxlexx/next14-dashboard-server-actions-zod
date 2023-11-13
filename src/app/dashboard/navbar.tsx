"use client";

import { Input } from "@/components/ui/input";
import { Bell, Globe, MessageCircle, Search, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {}

const Navbar: FC<Props> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className="w-full py-4 px-6 bg-slate-700 flex items-center justify-between rounded-lg">
      <div className="capitalize font-semibold">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Input className="" placeholder="Search" />
          <span className="absolute right-2 top-0 bottom-0 flex items-center">
            <SearchIcon className="w-6 h-6 text-slate-500" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
          <Globe className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
