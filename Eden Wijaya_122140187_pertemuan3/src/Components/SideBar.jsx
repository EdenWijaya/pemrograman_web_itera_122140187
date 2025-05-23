import { Link, useLocation } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItem = (to, label) => (
    <Link
      to={to}
      className={`block px-4 py-2 rounded hover:bg-blue-100 ${pathname === to ? "bg-blue-200 font-semibold" : ""}`}
    >
      {label}
    </Link>
  );

  return (
    <aside className="w-60 bg-white border-r h-screen p-4 shadow">
      <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
        <FaBook />
        <span>
          Denz<span className="text-blue-800">Buku</span>
        </span>
      </h2>
      <nav className="space-y-2">
        {navItem("/", "Tambah Buku")}
        {navItem("/list", "Daftar Buku")}
      </nav>
    </aside>
  );
};

export default Sidebar;
