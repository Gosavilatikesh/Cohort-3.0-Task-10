import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoute";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Home from "../pages/Home";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },

            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
              path:"",
              element: <Home />
            },
            {
              path:"shop",
              element: <Shop />
            },
            {
              path:"about",
              element: <About />
            }
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
