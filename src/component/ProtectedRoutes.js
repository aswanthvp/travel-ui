import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProtectedRoutes() {
  const token = cookies.get("TOKEN"); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return token ? <Outlet /> : <Navigate to="/login" />;
}
