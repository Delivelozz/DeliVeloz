import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/actions";

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
      const allUsersResponse = await axios.get(
        "https://deliveloz-ryfh.onrender.com/users"
      );
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
        await dispatch(loginUser(userCredentials.at()));
        return user;
      } else {
        // ? --------------------------------------------- Se suben los datos del usuario a la base de datos si no existe el usuario
        await axios.post("https://deliveloz-ryfh.onrender.com/users", {
          name: providerData.displayName,
          email: providerData.email,
          lastName: "",
          userAddress: "",
          phone: "",
          password: "",
        });

        const allUsersResponse = await axios.get(
          "https://deliveloz-ryfh.onrender.com/users"
        );
        const allUsers = allUsersResponse.data;

        const matchingUsers = allUsers.filter(
          (userData) => userData.email === providerData.email
        );

        // ? ------------------------------------------- Extraer correo electrónico y contraseña de los usuarios que coinciden
        const userCredentials = matchingUsers.map((userData) => ({
          email: userData.email,
          password: userData.password,
        }));

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

// import { auth } from "../firebase/firebase.config";
// import { createContext, useContext } from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { loginUser } from "../redux/actions/actions";

// export const authContext = createContext();

// export const useAuth = () => {
//   const context = useContext(authContext);
//   if (!context) {
//     console.log("Error creating auth context");
//   }
//   return context;
// };

// export function AuthProvider({ children }) {
//   const dispatch = useDispatch();

//   const loginWithGoogle = async () => {
//     try {
//       const responseGoogle = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, responseGoogle);
//       const user = result.user;
//       const providerData = user.providerData.at();

//       // ?----------------------------------------- Obteniendo todos los usuarios de la base de datos

//       const allUsersResponse = await axios.get(
//         "https://deliveloz-ryfh.onrender.com/users"
//       );
//       const allUsers = allUsersResponse.data;
//       // console.log(allUsers);

//       // !----------------- comprobando si el correo ingresado existe

//       const emailExists = allUsers.some(
//         (userData) => userData.email === providerData.email
//       );
//       console.log("este es el usuario que debería enviarse", emailExists);

//       // ?------------------------------------------ Iniciando Sesión si el correo está registrado
//       if (emailExists) {
//         console.log("El correo electrónico ya está registrado", user);
//         await dispatch(loginUser(user));
//         return user;
//       }

//       // ?------------------------------------------ En otro caso subir el correo a la base de datos
//       await axios.post("https://deliveloz-ryfh.onrender.com/users", {
//         name: providerData.displayName,
//         email: providerData.email,
//         lastName: "",
//         userAddress: "",
//         phone: "",
//         password: "",
//       });

//       // !----------------- Una vez subido a la base de datos iniciar sesión
//       await dispatch(loginUser(user));
//       console.log("Nuevo usuario creado.");
//       return user;
//     } catch (error) {
//       console.error("Error al iniciar sesión con Google: ", error);
//       throw error;
//     }
//   };

//   return (
//     <authContext.Provider value={{ loginWithGoogle }}>
//       {children}
//     </authContext.Provider>
//   );
// }

// export function AuthProvider({ children }) {
//   const loginWithGoogle = async () => {
//     try {
//       const responseGoogle = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, responseGoogle);
//       const user = result.user;
//       const providerData = user.providerData.at();
//       // console.log(providerData);

//       const allUsersResponse = await axios.get(
//         "https://deliveloz-ryfh.onrender.com/users"
//       );
//       const allUsers = allUsersResponse.data;

//       const emailExists = allUsers.some(
//         (userData) => userData.email === providerData.email
//       );

//       // Si el correo electrónico ya está registrado, retornar temprano
//       if (emailExists) {
//         console.log("El correo electrónico ya está registrado.");
//         return user;
//       }

//       // Si el correo electrónico no está registrado, hacer la solicitud POST
//       await axios.post("https://deliveloz-ryfh.onrender.com/users", {
//         name: providerData.displayName,
//         email: providerData.email,
//         lastName: "",
//         userAddress: "",
//         phone: "",
//         password: "",
//         // image: providerData.photoURL,
//       });
//       console.log("Nuevo usuario creado.");
//       return user;
//     } catch (error) {
//       console.error("Error al iniciar sesión con Google: ", error);
//       throw error;
//     }
//   };

//   return (
//     <authContext.Provider value={{ loginWithGoogle }}>
//       {children}
//     </authContext.Provider>
//   );
// }

// import { auth } from "../firebase/firebase.config";
// import { createContext, useContext } from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import axios from "axios";

// export const authContext = createContext();

// export const useAuth = () => {
//   const context = useContext(authContext);
//   if (!context) {
//     console.log("Error creating auth context");
//   }
//   return context;
// };

// export function AuthProvider({ children }) {
//   const loginWithGoogle = async () => {
//     try {
//       const responseGoogle = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, responseGoogle);
//       const user = result.user;
//       const providerData = user.providerData.at();
//       console.log(providerData);
//       await axios.post("https://deliveloz-ryfh.onrender.com/users", {
//         name: providerData.displayName,
//         email: providerData.email,
//         lastName: "",
//         userAddress: "",
//         phone: "",
//         password: "",
//         // image: providerData.photoURL,
//       });
//       return user;
//     } catch (error) {
//       console.error("Error al iniciar sesión con Google: ", error);
//       throw error;
//     }
//   };

//   return (
//     <authContext.Provider value={{ loginWithGoogle }}>
//       {children}
//     </authContext.Provider>
//   );
// }
