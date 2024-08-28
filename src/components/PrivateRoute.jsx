import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuthStatus } from "../hooks/UseAuthStatus";

export const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = UseAuthStatus();
  if (checkingStatus) return <h2>Loading....</h2>;
  return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />;
};
