import { useState } from "react";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import UsersAdmin from "../../components/admin/UsersAdmin";
// import ProductsAdmin from "../../components/admin/ProductsAdmin";
import ProductsAdmin from "../../components/admin/ProductsAdmix";
import AddProduct from "../../components/admin/AddProduct";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";

export default function DashboardAdmin() {
  const [selectedComponent, setSelectedComponent] = useState("products");
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();

  const renderComponent = () => {
    switch (selectedComponent) {
      case "users":
        return <UsersAdmin />;
      case "addProducts":
        return <AddProduct />;
      case "products":
        return <ProductsAdmin />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-5 relative">
      <SidebarAdmin setSelectedComponent={setSelectedComponent} />
      {renderComponent()}
    </div>
  );
}
