// ? ------------------------------------------ Icons

import Cart from "../icons/Cart";

// ? ------------------------------------------ Hooks

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  logoutUser,
  setUserData,
  getAdminUsers,
} from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useShoppingCartCounterItem } from "../../hooks/useShoppingCartCounterItem";
import { Tooltip } from "react-tooltip";
import { smoothScrollToTop } from "../../functions/SmoothScroll";
import { useEffect, useState } from "react";

export default function Header({ openLoginModal, openRegisterModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const user = useSelector((state) => state.user.user);
  const userData = useSelector((state) => state.userData);
  const adminUsers = useSelector((state) => state.adminUsers);
  const shoppingCartCounterItem = useShoppingCartCounterItem();

  // console.log("Este es el LocalStore", userData.email);
  // console.log("Estas logeado?", login);
  // console.log("Este es el usuario?", user);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);
  //console.log(adminUsers);

  const handleIsAdmin = () => {
    const isAdmin = adminUsers.find(
      (element) => element.email === userData.email
    );
    if (isAdmin) {
      return true;
    }
    return false;
  };
  //console.log(handleIsAdmin());

  const onClick = () => {
    dispatch(logoutUser());
    dispatch(setUserData({ email: "", password: "" }));
    navigate("/home");
  };

  if (!login) {
    return (
      <div className="w-full shadow-lg z-40 bg-white hidden md:block sticky top-0">
        <div className="container flex items-center justify-between h-20">
          <div>
            <Link to={"/home"}>
              <h1 className="text-sundown-500 tracking-wide font-bold hover:text-sundown-400 transition">
                DeliVeloz
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link to={"/home"}>
              <button className="btn-bg flex items-center justify-center gap-2">
                Inicio
              </button>
            </Link>

            <Link to={"/products"} className="flex gap-2">
              <p>Productos</p>
            </Link>
            <Link to={"/about"}>
              <p>Nosotros</p>
            </Link>

            <>
              <p
                className="text-sundown-500 hover:text-sundown-400 transition cursor-pointer"
                onClick={openLoginModal}
              >
                Ingresar
              </p>
              <p className="btn-tr cursor-pointer" onClick={openRegisterModal}>
                Registrarse
              </p>
            </>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full shadow-lg z-40 bg-white hidden md:block sticky top-0">
      <div className="container flex items-center justify-between h-20">
        <div>
          <Link to={"/home"}>
            <h1 className="text-sundown-500 tracking-wide font-bold hover:text-sundown-400 transition">
              DeliVeloz
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-6 font-medium">
          <Link to={"/home"}>
            <button className="btn-bg flex items-center justify-center gap-2">
              Inicio
            </button>
          </Link>

          <Link to={"/products"} className="flex gap-2">
            <p>Productos</p>
          </Link>
          <Link to={"/about"}>
            <p>Nosotros</p>
          </Link>

          <div className=" flex gap-6 items-center ml-3">
            <Link to={"/carrito"} className="relative">
              <div className=" p-2">
                <Cart width={28} heigth={28} color={"#555"} />
              </div>
              <p className="cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-sundown-500 w-6 h-6 rounded-full text-white font-semibold -mr-2 -mt-2 border border-white border-solid text-xs">
                {shoppingCartCounterItem}
              </p>
            </Link>

            <div className="relative" data-tooltip-id="my-tooltip">
              <div id="clickable">
                <img
                  src="https://res.cloudinary.com/derot8znd/image/upload/v1712286915/Otros/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju_g2ngxd.webp"
                  alt=""
                  className="object-cover rounded-full w-10 h-10 min-w-10 min-h-10 cursor-pointer"
                />

                <Tooltip
                  id="my-tooltip"
                  anchorSelect="#clickable"
                  clickable
                  className="select-none min-w-64"
                  style={{
                    backgroundColor: "#E74C4C",
                    color: "white",
                  }}
                >
                  <div className="mb-6 text-center">
                    <p className="text-sm font-semilbold">
                      ¡Hola!<span> </span>
                      {user?.name}
                      <span> </span>
                      {user?.lastName}
                    </p>
                  </div>
                  <div className="text-center flex flex-col gap-2">
                    {handleIsAdmin() == true ? (
                      <Link to={"/dashboard"} className="hover:text-white">
                        <p className="hover:text-slate-200 transition">
                          Ir al dashboard
                        </p>
                      </Link>
                    ) : (
                      <div></div>
                    )}
                    <Link to={"/profile"} className="hover:text-white">
                      <p className="hover:text-slate-200 transition">
                        Perfil de usuario
                      </p>
                    </Link>
                    <p
                      onClick={onClick}
                      className="cursor-pointer hover:text-slate-200 transition"
                    >
                      Cerrar Sesión
                    </p>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
