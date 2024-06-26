// ?--------------------------- imports Icons y validation.js

import HomeIcon from "../icons/HomeIcon";
import validation from "./validation";
import CloseIcon from "../icons/CloseIcon";
import { toast } from "react-toastify";

// ?-------------------------- Imports Hooks

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUsers } from "../../redux/actions/actions";
import { useAuth } from "../../context/AuthContext";

export default function FormRegister({ closeModal }) {
  // ?------------------------------------------- Firebase
  const auth = useAuth();

  const handleGoogle = async (e) => {
    e.preventDefault();
    closeModal();
    await auth.loginWithGoogle();
  };

  // ? ----------------------------------- Scroll hidden

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0px";
    };
  }, []);

  // ?------------------------------------ useSelector y UseEffect

  // const navigate = useNavigate();
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

  const [repeatPassword, setRepeatPassword] = useState("");

  // ? ---------------------------------------- Estado del error

  const [errors, setErrors] = useState({
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
  };

  // ? ---------------------------------------- onSubmit

  const onSubmit = async (e) => {
    console.log(user);
    e.preventDefault();

    const errors = validation({ ...user, repeatPassword }); // Utilizar repeatPassword en la llamada a la función de validación

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
      setRepeatPassword("");
      toast.success("¡El usuario fue creado exitosamente!", {
        style: {
          backgroundColor: "#55B938",
          color: "white",
        },
      });

      closeModal();
      // navigate("/login");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="max-h-full absolute">
        <form
          className="flex bg-white shadow-2xl rounded-md relative"
          style={{ maxWidth: "500px", width: "500px" }}
          onSubmit={onSubmit}
        >
          {/* ------------------ Formulario --------------------- */}

          <div className="flex-1 p-6 space-y-6 flex flex-col">
            <div className="flex justify-between">
              <h4 className="font-bold text-xl text-center text-downriver-950">
                ¡Crea tu cuenta en
                <span className="text-sundown-500"> DeliVeloz!</span>
              </h4>
              <button className="transition h-4" onClick={closeModal}>
                <CloseIcon width={16} height={16} color={"#000"} />
              </button>
            </div>
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
                    onKeyDown={handleKeyDown}
                    className="login-input p-2 text-sm  placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
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
                    onKeyDown={handleKeyDown}
                    className="login-input p-2 text-sm  placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
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
                    onKeyDown={handleKeyDown}
                    className="login-input p-2 text-sm  placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
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
                    onKeyDown={handleKeyDown}
                    className="login-input p-2 text-sm  placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
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
                  onKeyDown={handleKeyDown}
                  className="login-input p-2 text-sm placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>

              {/* ------------------ Contraseña --------------------- */}

              <div>
                <div className="flex gap-10">
                  <div className="flex-1">
                    <input
                      type="password"
                      value={user.password}
                      onChange={onChange}
                      name="password"
                      placeholder="Contraseña"
                      onKeyDown={handleKeyDown}
                      className="login-input p-2 text-sm placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      name="repeatPassword"
                      placeholder="Repetir contraseña"
                      onKeyDown={handleKeyDown}
                      className="login-input p-2 text-sm placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
                    />
                  </div>
                </div>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </div>

            {/* ------------------ Boton de Login --------------------- */}

            {/* <a
            href="/login"
            className="text-sundown-500 text-right text-sm font-semibold hover:text-sundown-700"
          >
            ¿Ya tienes una cuenta?
          </a> */}
            <button className="btn-bg" type="submit">
              Registrarse
            </button>

            <button
              onClick={(e) => handleGoogle(e)}
              className="p-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 flex justify-center items-center gap-3"
            >
              <p>Continuar con Google</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
