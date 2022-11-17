import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  var decoded = "";
  if (token) {
    decoded = jwt_decode(token);
  }
  return token && decoded ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
