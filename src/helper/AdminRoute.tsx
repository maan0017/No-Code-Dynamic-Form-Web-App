import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  if (!auth.isAuthenticated) return <Navigate to="/auth-login" />;
  return auth.role === "admin" ? children : <Navigate to="/auth-login" />;
};
const LoginRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  if (auth.isAuthenticated) return <Navigate to="/create-form" />;
  return auth.role === "user" ? children : <Navigate to="/create-form" />;
};

export { AdminRoute, LoginRoute };
