import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import { useAuth } from "./AuthProvider";
const Authorization = ({ permissions }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user.username) {
    const userpermission = user.permissions;
    const isAllowed = permissions.some((allowed) =>
      userpermission.includes(allowed)
    );
    return isAllowed ? <Outlet /> : <Home />;
  }
  return <Navigate to="/login" state={{ path: location.pathname }} replace />;
};
export default Authorization;
