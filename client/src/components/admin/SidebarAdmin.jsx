import BoxIcon from "../icons/BoxIcon";

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

        <li
          className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm"
          onClick={() => setSelectedComponent("addProducts")}
        >
          Añadir Productos
        </li>

        <li
          className="p-3 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition text-sm"
          onClick={() => setSelectedComponent("users")}
        >
          Usuarios
        </li>
      </ul>
    </div>
  );
}
