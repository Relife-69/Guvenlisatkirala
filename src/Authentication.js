import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const Authentication = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user.username) {
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }
  return children;
};
export default Authentication;
