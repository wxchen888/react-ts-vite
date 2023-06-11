import Login from "@/views/login";
import Home from "@/views/home";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

export const rootRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login"></Navigate>,
  },
  {
    path: "/login",
    element: <Login></Login>,
    meta: {
      requiresAuth: false,
      title: "登录",
      key: "login",
    },
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
