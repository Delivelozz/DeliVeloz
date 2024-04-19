import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { loginUser, setUserData, setErrors } from "../redux/actions/actions";
import axios from "axios";
import { auth } from "../firebase/firebase.config";
import { API_URL } from "../utils/constants";

export const useLocalStoreUserDataGoogle = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    const loginWithGoogle = async () => {
      try {
        const allUsersResponse = await axios.get(`${API_URL}/users`);
        const allUsers = allUsersResponse.data;

        const matchingUsers = allUsers.filter(
          (element) => element.email == userData.email
        );
        const userCredentials = matchingUsers.map((userData) => ({
          email: userData.email,
          password: userData.password,
        }));
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
