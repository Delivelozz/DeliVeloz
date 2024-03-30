// ?--------------------------- imports Icons y validation.js

import HomeIcon from "../icons/HomeIcon";
import validation from "./validation";

// ?-------------------------- Imports Hooks

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUsers } from "../../redux/actions/actions";

export default function FormRegister() {
  // ?------------------------------------ useSelector y UseEffect

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postUsers());
  }, [dispatch]);

  // ? ---------------------------------------- Estado del usuario

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    userAddress: "",
    phone: "",
    password: "",
  });

  // ? ---------------------------------------- Estado del error

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    email: "",
    userAddress: "",
    phone: "",
    password: "",
  });

  // ? ---------------------------------------- onChange

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };

  // ? ---------------------------------------- onSubmit

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = validation(user);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      await dispatch(postUsers(user));
      setUser({
        name: "",
        lastName: "",
        email: "",
        userAddress: "",
        phone: "",
        password: "",
      });
      alert("¡El usuario fue creado exitosamente!");
    }
  };

  return (
    <form
      className="flex bg-white shadow-2xl rounded-md relative my-8"
      style={{ maxWidth: "550px", width: "550px" }}
      onSubmit={onSubmit}
    >
      {/* ------------------ Boton de Home -------------------- */}

      <a
        href="/home"
        className="transition absolute -top-4 -right-4 bg-white rounded-full shadow-xl flex justify-center items-center w-12 h-12 hover:scale-110"
      >
        <HomeIcon />
      </a>
      {/* ------------------ Formulario --------------------- */}

      <div className="flex-1 p-6 space-y-6 flex flex-col my-3">
        <h4 className="font-bold text-xl text-center text-downriver-950">
          ¡Crea tu cuenta en
          <span className="text-sundown-500"> DeliVeloz!</span>
        </h4>
        <div className="flex flex-col gap-4">
          {/* ------------------ Nombre y Apellido --------------------- */}
          <div className="flex gap-10">
            {/* -------- Nombre ------ */}
            <div className="flex-1">
              <input
                type="text"
                value={user.name}
                onChange={onChange}
                name="name"
                placeholder="Nombre"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* -------- Apellido ------ */}

            <div className="flex-1">
              <input
                type="text"
                value={user.lastName}
                onChange={onChange}
                name="lastName"
                placeholder="Apellido"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          {/* ------------------ Email y Dirección --------------------- */}

          <div className="flex gap-10">
            {/* ------------------ Email --------------------- */}

            <div className="flex-1">
              <input
                type="email"
                value={user.email}
                onChange={onChange}
                name="email"
                placeholder="Correo electrónico"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* ------------------ Dirección --------------------- */}

            <div className="flex-1">
              <input
                type="text"
                value={user.userAddress}
                onChange={onChange}
                name="userAddress"
                placeholder="Calle"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.userAddress && (
                <p className="error">{errors.userAddress}</p>
              )}
            </div>
          </div>

          {/* ------------------ Número de telefono --------------------- */}

          <div className="flex-1">
            <input
              type="phone"
              value={user.phone}
              onChange={onChange}
              name="phone"
              placeholder="Celular"
              className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          {/* ------------------ Contraseña --------------------- */}

          <div className="flex gap-10">
            <div className="flex-1">
              <input
                type="password"
                value={user.password}
                onChange={onChange}
                name="password"
                placeholder="Contraseña"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="flex-1">
              <input
                type="password"
                name="password"
                placeholder="Repetir contraseña"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
          </div>
        </div>

        {/* ------------------ Boton de Login --------------------- */}

        <a
          href="/login"
          className="text-sundown-500 text-right text-sm font-semibold hover:text-sundown-700"
        >
          ¿Ya tienes una cuenta?
        </a>
        <button className="btn-bg mx-auto" type="submit">
          Registrarse
        </button>
      </div>
    </form>
  );
}
