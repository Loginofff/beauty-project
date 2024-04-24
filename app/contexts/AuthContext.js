import { createContext } from "react";


export const AuthContext = createContext({
  user: localStorage.getItem("user"),
  setUser: () => {},
});