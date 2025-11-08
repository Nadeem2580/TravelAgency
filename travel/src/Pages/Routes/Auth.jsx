import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Auth = () => {
  const stored = Cookies.get("token");
  const token = stored ? JSON.parse(stored) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (token.type === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [token, navigate]);

  // show public routes (like login/signup) only if no token
  return !token ? <Outlet /> : null;
};

export default Auth;
