import {
  BarChart2,
  HomeIcon,
  LineChart,
  LogOut,
  Settings,
  ShieldQuestion,
  ShoppingBag,
  Users,
  Users2,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import MenuLink from "./menu-link";
import { ReactNode } from "react";

export type MenuItem = {
  title: string;
  path: string;
  icon: ReactNode;
};

type MenuSection = {
  title: string;
  list: MenuItem[];
};

const iconClass = "w-4 h-4";

const menuItems: MenuSection[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <HomeIcon className={iconClass} />,
      },
      {
        title: "Users",
        path: "/users",
        icon: <Users className={iconClass} />,
      },
      {
        title: "Products",
        path: "/products",
        icon: <ShoppingBag className={iconClass} />,
      },
      {
        title: "Transactions",
        path: "/transactions",
        icon: <Wallet className={iconClass} />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/revenue",
        icon: <BarChart2 className={iconClass} />,
      },
      {
        title: "Reports",
        path: "/reports",
        icon: <LineChart className={iconClass} />,
      },
      {
        title: "Teams",
        path: "/teams",
        icon: <Users2 className={iconClass} />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/settings",
        icon: <Settings className={iconClass} />,
      },
      {
        title: "Help",
        path: "/help",
        icon: <ShieldQuestion className={iconClass} />,
      },
    ],
  },
];

interface Props {}

const Sidebar = async ({}: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src="https://i.pravatar.cc/150?u=john"
          alt="user"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">John Doe</span>
          <span>Admin</span>
        </div>
      </div>

      <ul className="list-none">
        {menuItems.map((m) => (
          <li key={m.title} className="p-4 flex flex-col space-y-4">
            <span className="text-md opacity-60">{m.title}</span>

            <ul className="list-none space-y-2 pl-2">
              {m.list.map((l) => (
                <li key={l.path}>
                  <MenuLink item={l} />
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <button className="ml-6 min-w-[180px] flex items-center gap-2 hover:bg-slate-700 px-4 py-1.5 rounded-lg">
            <LogOut className={iconClass} />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
