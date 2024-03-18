// ? routes y componentes
import About from "./views/about/About";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Products from "./views/products/Products";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// ? Hooks
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <main className="bg-alabaster-50 min-h-screen">
      {pathname !== "/login" && pathname !== "/register" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {pathname !== "/login" && pathname !== "/register" && <Footer />}
    </main>
  );
}

export default App;
