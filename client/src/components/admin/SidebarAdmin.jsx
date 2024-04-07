import BoxIcon from "../icons/BoxIcon";

export default function SidebarAdmin({ setSelectedComponent }) {
  return (
    <div className="bg-white shadow-lg relative z-50 w-56 border-t font-semibold text-base">
      <ul className="flex flex-col text-center">
        <div
          className="flex items-center justify-center py-6 gap-1 cursor-pointer"
          onClick={() => setSelectedComponent(null)}
        >
          <BoxIcon width={22} height={22} color={"#F17878"} />
          <p className="text-sundown-500 inline-block">Dashboard</p>
        </div>
        <li
          className="p-2 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition"
          onClick={() => setSelectedComponent("products")}
        >
          Productos
        </li>

        <li
          className="p-2 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition"
          onClick={() => setSelectedComponent("addProducts")}
        >
          Añadir Productos
        </li>

        <li
          className="p-2 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition"
          onClick={() => setSelectedComponent("users")}
        >
          Usuarios
        </li>
      </ul>
    </div>
  );
}
