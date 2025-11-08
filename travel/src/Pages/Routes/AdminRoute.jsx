import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AdminLayout from "../Admin/Layout/AdminLayout";

const AdminRoute = () => {
  const stored = Cookies.get("token");
  const token = stored ? JSON.parse(stored) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // No token → redirect to login
      navigate("/login");
    } else if (token.type !== "admin") {
      // Logged in but not admin → go to home
      navigate("/");
    }
  }, [token, navigate]);

  // Only render AdminLayout + Outlet for admins
  return token && token.type === "admin" ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : null;
};

export default AdminRoute;
