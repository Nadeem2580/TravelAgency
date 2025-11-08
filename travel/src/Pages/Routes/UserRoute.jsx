import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserRoute = () => {
  const stored = Cookies.get("token");
  const token = stored ? JSON.parse(stored) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else if (token.type === "admin") {
      navigate("/admin");
    }
  }, [token, navigate]);

  return token && token.type === "user" ? <Outlet /> : null;
};

export default UserRoute;
