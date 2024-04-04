// ?-------------------------- Icons

import CloseIcon from "../icons/CloseIcon";
import GoogleIcon from "../icons/GoogleIcon";

// ?-------------------------- Hooks

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// ?--------------------------- Actions

import { loginUser, setUserData, setErrors } from "../../redux/actions/actions";

// ?-------------------------- Importaciones
import validation from "./validation";
import { useAuth } from "../../context/AuthContext";

export default function FormLogin({ closeModal }) {
  // ?------------------------------------------- Firebase
  const auth = useAuth();

  const handleGoogle = async (e) => {
    e.preventDefault();
    closeModal();
    await auth.loginWithGoogle();
  };

  // ?------------------------------------------- State FormData, dispatch y useSelector

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  // ?------------------------------------------- useEffect para scrollbar

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ?------------------------------------------- OnChange

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ?------------------------------------------- OnSubmit

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validation(formData);
    dispatch(setErrors(errors));

    if (
      Object.keys(errors).length === 0 &&
      formData.email &&
      formData.password
    ) {
      try {
        await dispatch(setUserData(formData));
        await dispatch(loginUser(formData));
        closeModal();
      } catch (error) {
        if (error.response && error.response.status === 500) {
          dispatch(
            setErrors({ password: "El usuario o la contraseña es incorrecta." })
          );
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

          <div className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                placeholder="Contraseña"
                className="border-b p-2 text-sm border-b-gray-400 placeholder-gray-500 focus:outline-sundown-500 w-full mb-2"
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
          </div>

          <button className="btn-bg" type="submit">
            Ingresar
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
  );
}
