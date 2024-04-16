import BoxIcon from "../icons/BoxIcon";
import { Link } from "react-router-dom";

export default function SidebarAdmin({ setSelectedComponent }) {
  return (
    <div className="bg-white shadow-lg z-30 border-t font-semibold text-base sticky top-0 col-span-1">
      <ul className="flex flex-col">
        <div className="flex items-center justify-center py-6 gap-1">
          <BoxIcon width={22} height={22} color={"#F17878"} />
          <p className="text-sundown-500 inline-block">Dashboard</p>
        </div>
        <li
          className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm"
          onClick={() => setSelectedComponent("products")}
        >
          Productos
        </li>

        <Link to={"/addProduct"}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Añadir Productos
          </li>
        </Link>

        <li
          className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm"
          onClick={() => setSelectedComponent("users")}
        >
          Usuarios
        </li>

        <li
          className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm"
          onClick={() => setSelectedComponent("news")}
        >
          Novedades
        </li>

        <Link to={"/addNew"}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Añadir Novedades
          </li>
        </Link>
      </ul>
    </div>
  );
}
