import { createContext, useContext } from "react";

type User = {
  isAuthenticated: boolean;
  role: "admin" | "user" | null;
};

const admin: User = {
  isAuthenticated: false,
  role: "user", // change to "user" or null to test access control
};

const AuthContext = createContext<User>(admin);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AuthContext.Provider value={admin}>{children}</AuthContext.Provider>;
};
