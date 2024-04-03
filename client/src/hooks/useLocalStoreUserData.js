import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, setUserData, setErrors } from "../redux/actions/actions";
import validation from "../components/formLogin/validation";

export const useLocalStoreUserData = () => {
  const userData = useSelector((state) => state.userData);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.email && userData.password) {
      const errors = validation(userData);
      dispatch(setErrors(errors));

      if (
        Object.keys(errors).length === 0 &&
        userData.email &&
        userData.password
      ) {
        try {
          dispatch(loginUser(userData));
        } catch (error) {
          if (error.response && error.response.status === 500) {
            dispatch(
              setErrors({
                password: "El usuario o la contraseña es incorrecta.",
              })
            );
          } else {
            console.error("Error al intentar iniciar sesión: ", error);
          }
        }
      }
    }
  }, [userData]);
};
