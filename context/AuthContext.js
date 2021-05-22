import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("jwt", null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
