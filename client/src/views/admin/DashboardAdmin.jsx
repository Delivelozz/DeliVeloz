import SidebarAdmin from "../../components/admin/SidebarAdmin";
import UsersAdmin from "../../components/admin/UsersAdmin";

export default function DashboardAdmin() {
  return (
    <div className="h-screen">
      <div className="h-full flex">
        <SidebarAdmin />
        <UsersAdmin />
      </div>
    </div>
  );
}
