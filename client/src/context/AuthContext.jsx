import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser, setUserData } from "../redux/actions/actions";
import { API_URL } from "../utils/constants";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const dispatch = useDispatch();

  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, responseGoogle);
      const user = result.user;
      const providerData = user.providerData[0];

      // ?------------------------------------------- Obteniendo todos los usuarios de la base de datos
      const allUsersResponse = await axios.get(`${API_URL}/users`);
      const allUsers = allUsersResponse.data;

      // ? ------------------------------------------- Buscar usuarios que coinciden con el correo proporcionado
      const matchingUsers = allUsers.filter(
        (userData) => userData.email === providerData.email
      );

      // ? ------------------------------------------- Extraer correo electrónico y contraseña de los usuarios que coinciden
      const userCredentials = matchingUsers.map((userData) => ({
        email: userData.email,
        password: userData.password,
      }));

      // ! --------------------- Si esta el correo se inicia sesión
      if (matchingUsers.length > 0) {
        await dispatch(setUserData(userCredentials.at()));
        await dispatch(loginUser(userCredentials.at()));
        return user;
      } else {
        // ? --------------------------------------------- Se suben los datos del usuario a la base de datos si no existe el usuario
        await axios.post(`${API_URL}/users`, {
          name: providerData.displayName,
          email: providerData.email,
          lastName: "",
          userAddress: "",
          phone: "",
          password: "",
        });

        const allUsersResponse = await axios.get(`${API_URL}/users`);
        const allUsers = allUsersResponse.data;

        const matchingUsers = allUsers.filter(
          (userData) => userData.email === providerData.email
        );

        // ? ------------------------------------------- Extraer correo electrónico y contraseña de los usuarios que coinciden
        const userCredentials = matchingUsers.map((userData) => ({
          email: userData.email,
          password: userData.password,
        }));

        await dispatch(setUserData(userCredentials.at()));
        await dispatch(loginUser(userCredentials.at()));
        console.log("Nuevo usuario creado.");
        return user;
      }
      // ! --------------------- Luego de crearse la cuenta se hace el login
    } catch (error) {
      console.error("Error al iniciar sesión con Google: ", error);
      throw error;
    }
  };

  return (
    <authContext.Provider value={{ loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
