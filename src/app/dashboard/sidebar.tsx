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
import { auth, signOut } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
        path: "/dashboard/users",
        icon: <Users className={iconClass} />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBag className={iconClass} />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <Wallet className={iconClass} />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <BarChart2 className={iconClass} />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <LineChart className={iconClass} />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <Users2 className={iconClass} />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
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
  const session = await auth();

  const user = session?.user;

  return (
    <div>
      <div className="flex items-center gap-2">
        <Avatar className="w-20 h-20">
          <AvatarImage src={user?.img} />
          <AvatarFallback>
            {user?.username.substring(0, 1) ?? "A"}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="font-semibold text-lg">{user?.username}</span>
          <span className="opacity-50">
            {user?.isAdmin ? "Admin" : "Client"}
          </span>
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
          <form
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/login",
              });
            }}
          >
            <button className="ml-6 min-w-[180px] flex items-center gap-2 hover:bg-slate-700 px-4 py-1.5 rounded-lg">
              <LogOut className={iconClass} />
              <span>Logout</span>
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
