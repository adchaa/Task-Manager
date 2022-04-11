import { useContext, createContext, useState } from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("user=" + user);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  //fetch to check if user is logged in
  const check = async () => {
    const res = await fetch("http://localhost:3050/check", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, check }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
