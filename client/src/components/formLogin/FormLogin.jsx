// ?--------------------------- imports Icons y validation.js

import ArrowLeft from "../icons/ArrowLeft";
import CloseIcon from "../icons/CloseIcon";
import validation from "./validation";
import axios from "axios";

// ?-------------------------- Imports Hooks

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/actions";

export default function FormLogin({ closeModal }) {
  // ? ----------------------------------- Scroll hidden

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ?------------------------------------ useSelector y estado

  const dispatch = useDispatch();
  // const login = useSelector((state) => state.login);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // ?------------------------------------ estado de error

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // ?------------------------------------ OnChange

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // ?------------------------------------ OnSubmit

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validation(userData);
    setErrors(errors);

    if (
      Object.keys(errors).length === 0 &&
      userData.email &&
      userData.password
    ) {
      try {
        await dispatch(loginUser(userData));
        setUserData({
          email: "",
          password: "",
        });
        closeModal();
      } catch (error) {
        if (error.response && error.response.status === 500) {
          setErrors({ password: "El usuario o la contraseña es incorrecta." });
        } else {
          console.error("Error al intentar iniciar sesión: ", error);
        }
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full min-h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-2xl rounded-md w-full max-w-sm relative"
      >
        {/* --------------------- Float Icon --------------------------- */}
        {/* <button
          className="transition absolute -top-4 -right-4 bg-sundown-500 rounded-full shadow-xl flex justify-center items-center w-10 h-10 hover:scale-110"
          onClick={closeModal}
        >
          <CloseIcon width={22} height={22} color={"#fff"} />
        </button> */}
        {/* --------------------- Flex Left --------------------------- */}
        <div className="px-6 py-10 space-y-6 flex flex-col">
          <div className="flex justify-between">
            <h4 className="font-bold text-lg text-downriver-950">
              ¡Bienvenido/a!
            </h4>
            <button className="h-4" onClick={closeModal}>
              <CloseIcon width={16} height={16} color={"#000"} />
            </button>
          </div>
          <p className="font-bold text-lg text-center text-downriver-950">
            <span className="text-sundown-500">Ingrese</span> con su cuenta
          </p>

          {/* --------------------- Usuario y Contraseña --------------------------- */}

          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={onChange}
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                onChange={onChange}
                placeholder="Contraseña"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
          </div>

          {/* --------------------- ¿Olvidaste tu contraseña? --------------------------- */}

          {/* <a
          href=""
          className="text-sundown-500 text-right text-sm font-semibold hover:text-sundown-600"
        >
          ¿Olvidaste tu contraseña?
        </a> */}

          {/* --------------------- Ingresar --------------------------- */}

          <button className="btn-bg" type="submit">
            Ingresar
          </button>

          {/* --------------------- Registrarse --------------------------- */}

          {/* <a
            href="/register"
            className="text-center text-downriver-950 font-semibold text-sm hover:text-downriver-900"
          >
            Crear una cuenta
          </a> */}
        </div>

        {/* --------------------- Flex Right --------------------------- */}

        {/* <div className="">
          <img
            src="../../../img/login.jpg"
            alt=""
            className="rounded-r-md min-h-full object-cover w-full"
          />
        </div> */}
      </form>
    </div>
  );
}
