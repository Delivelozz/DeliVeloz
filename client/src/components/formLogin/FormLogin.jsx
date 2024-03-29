// ?--------------------------- imports Icons y validation.js

import ArrowLeft from "../icons/ArrowLeft";
import HomeIcon from "../icons/HomeIcon";
import validation from "./validation";

// ?-------------------------- Imports Hooks

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/actions";

export default function FormLogin() {
  // ?------------------------------------ useSelector y UseEffect

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // ?------------------------------------ OnChange

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  // ?------------------------------------ OnSubmit

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      alert("Ningún campo puede estar vacío");
    } else {
      setUserData({
        email: "",
        password: "",
      });
      await dispatch(loginUser(userData));
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex bg-white shadow-2xl rounded-md max-w-2xl min-w-2xl relative"
    >
      {/* --------------------- Float Icon --------------------------- */}

      <a
        href="/home"
        className="transition absolute -top-4 -right-4 bg-white rounded-full shadow-xl flex justify-center items-center w-12 h-12 hover:scale-110"
      >
        <HomeIcon />
      </a>

      {/* --------------------- Flex Left --------------------------- */}

      <div className="flex-1 p-6 space-y-6 flex flex-col my-3">
        <h4 className="font-bold text-lg text-downriver-950">¡Bienvenido/a!</h4>
        <p className="font-bold text-lg text-center text-downriver-950">
          <span className="text-sundown-500">Ingrese</span> con su cuenta
        </p>

        {/* --------------------- Usuario y Contraseña --------------------------- */}

        <div className="">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={onChange}
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-5"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            onChange={onChange}
            placeholder="Contraseña"
            className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* --------------------- ¿Olvidaste tu contraseña? --------------------------- */}

        <a
          href=""
          className="text-sundown-500 text-right text-sm font-semibold hover:text-sundown-600"
        >
          ¿Olvidaste tu contraseña?
        </a>

        {/* --------------------- Ingresar --------------------------- */}

        <button className="btn-bg mx-auto w-36" type="submit">
          Ingresar
        </button>

        {/* --------------------- Registrarse --------------------------- */}

        <a
          href="/register"
          className="text-center text-downriver-950 font-semibold text-sm hover:text-downriver-900"
        >
          Crear una cuenta
        </a>
      </div>

      {/* --------------------- Flex Right --------------------------- */}

      <div className="flex-1">
        <img
          src="../../../img/login.jpg"
          alt=""
          className="rounded-r-md min-h-full object-cover"
        />
      </div>
    </form>
  );
}
