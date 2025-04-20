import Sidebar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
