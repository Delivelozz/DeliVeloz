import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { loginUser, setUserData, setErrors } from "../redux/actions/actions";
import axios from "axios";
import { auth } from "../firebase/firebase.config";
import { API_URL } from "../utils/constants";

/* export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creating auth context");
  }
  return context;
}; */

export const useLocalStoreUserDataGoogle = () => {
  const userData = useSelector((state) => state.userData);
  console.log("userData", userData);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginWithGoogle = async () => {
      try {
        // ?------------------------------------------- Obteniendo todos los usuarios de la base de datos
        const allUsersResponse = await axios.get(`${API_URL}/users`);
        const allUsers = allUsersResponse.data;

        // ? ------------------------------------------- Buscar usuarios que coinciden con el correo proporcionado
        const matchingUsers = allUsers.filter(
          (element) => element.email == userData.email
        );
        console.log("matchingUsers", matchingUsers);

        // ? ------------------------------------------- Extraer correo electrónico y contraseña de los usuarios que coinciden
        const userCredentials = matchingUsers.map((userData) => ({
          email: userData.email,
          password: userData.password,
        }));
        // ! --------------------- Si esta el correo se inicia sesión
        if (matchingUsers.length > 0) {
          dispatch(loginUser(userData));
        }
        console.log("Se ha iniciado sesión con Google");
      } catch (error) {
        console.error("Error al iniciar sesión con Google: ", error);
        throw error;
      }
    };
    loginWithGoogle();
  }, []);
};
