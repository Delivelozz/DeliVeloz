import BoxIcon from "../icons/BoxIcon";

export default function SidebarAdmin() {
  return (
    <div className="h-full min-h-full bg-white shadow-lg relative z-50 w-56 border-t font-semibold text-base">
      <ul className="flex flex-col text-center">
        <div className="flex items-center justify-center py-6 gap-1">
          <BoxIcon width={22} height={22} color={"#F17878"} />
          <p className="text-sundown-500 inline-block">Dashboard</p>
        </div>
        <li className="p-2 border-b border-t hover:bg-sundown-500 hover:text-white cursor-pointer transition">
          Productos
        </li>

        <li className="p-2 border-b hover:bg-sundown-500 hover:text-white cursor-pointer transition">
          Usuarios
        </li>
      </ul>
    </div>
  );
}
