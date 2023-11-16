import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Rightbar from "./rightbar";

interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-64">
        <Sidebar />
      </div>
      <div className="w-full md:flex-grow">
        <Navbar />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
