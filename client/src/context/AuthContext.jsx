import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  return (
    <authContext.Provider value={{ loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
