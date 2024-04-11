import { Link } from "react-router-dom";

export default function SidebarMobile() {
  return (
    <div className="bg-white w-72 h-full fixed z-40 shadow-xl">
      <ul className="text-base font-semibold ">
        <Link to={"/home"}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Inicio
          </li>
        </Link>

        <Link to={"/products"}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Productos
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm">
            Nosotros
          </li>
        </Link>
      </ul>
    </div>
  );
}
