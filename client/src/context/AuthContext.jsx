import { Auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  return <authContext.Provider>{children}</authContext.Provider>;
}
