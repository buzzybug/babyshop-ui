import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (savedToken) {
      setToken(savedToken);
      setRole(savedRole);
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      const res = await api.get("/api/user/me");
      setUser(res.data);
    } catch {
      logout();
    }
  };

  const login = (jwt, userRole) => {
    localStorage.setItem("token", jwt);
    localStorage.setItem("role", userRole);
    setToken(jwt);
    setRole(userRole);
    fetchUser();
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
