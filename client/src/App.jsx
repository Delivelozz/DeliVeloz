// ? routes y componentes
import About from "./views/about/About";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Products from "./views/products/Products";
import Header from "./components/header/Header";
import HeaderMobile from "./components/headerMobile/HeaderMobile";
import Footer from "./components/footer/Footer";
import Blog from "./views/blog/Blog";
import Carrito from "./views/carrito/Carrito";
import FormLogin from "./components/formLogin/FormLogin";
import FormRegister from "./components/formRegister/FormRegister";
import DashboardAdmin from "./views/admin/dashboardAdmin/DashboardAdmin";
import EditProduct from "./views/admin/editProduct/EditProduct";
import SidebarMobile from "./components/headerMobile/SidebarMobile";
import FloatButtonCard from "./components/floatButtonCard/FloatButtonCard";
import AddNews from "./views/admin/addNews/AddNews";
import AddProduct from "./views/admin/addProduct/AddProduct";
import EditNews from "./views/admin/editNews/EditNews";
import Navbar from "./components/navbar/Navbar";
import DashboardUser from "./views/user/dashboardUser/DashboardUser";
import EditUser from "./views/user/editUser/EditUser";
import Orders from "./views/user/orders/Orders";
import Dashboard from "./views/admin/dashboard/Dashboard";

// ? -------------------- Hooks

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// ? ------------------- Firebase

import { AuthProvider } from "./context/AuthContext";

function App() {
  //  ? ---------------- Modal

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  // ? ---------------- UseEffect para cerrar modales con scape

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeLoginModal();
        closeRegisterModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // ? ---------------- Hooks y estados

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login);

  // ? ---------------- Comprobación de sesión

  useEffect(() => {
    const currentPath = pathname.toLowerCase();
    const isLogin = currentPath === "/login";
    const isRegister = currentPath === "/register";

    if (login && (isLogin || isRegister)) {
      navigate("/home");
    }
  }, [login, pathname, navigate]);

  return (
    <AuthProvider>
      <main className="bg-alabaster-50 relative overflow.x">
        {pathname !== "/dashboard" &&
          pathname !== "/addProduct" &&
          pathname !== "/addNew" && (
            <Navbar
              openLoginModal={openLoginModal}
              openRegisterModal={openRegisterModal}
            />
          )}

        {pathname !== "/dashboard" &&
          pathname !== "/addProduct" &&
          pathname !== "/addNew" && (
            <HeaderMobile
              openLoginModal={openLoginModal}
              openRegisterModal={openRegisterModal}
            />
          )}

        {/* <SidebarMobile /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/addNew" element={<AddNews />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editNews/:id" element={<EditNews />} />
          <Route path="/profile" element={<DashboardUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <FloatButtonCard />
        <Footer />
        {isLoginModalOpen && <FormLogin closeModal={closeLoginModal} />}
        {isRegisterModalOpen && (
          <FormRegister closeModal={closeRegisterModal} />
        )}
      </main>
    </AuthProvider>
  );
}

export default App;
