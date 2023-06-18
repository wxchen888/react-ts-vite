import Login from "@/views/login";
import {
  Navigate,
  RouteObject as ReactRouteObject,
  useRoutes,
} from "react-router-dom";
import { RouteObject } from "./interface";

/**
 * 处理动态路由
 */
const metaRoutes: Record<string, Array<RouteObject>> = import.meta.glob(
  "./modules/*.tsx",
  {
    eager: true,
  }
);
export const routerArray: RouteObject[] = [];
Object.keys(metaRoutes).forEach((key) => {
  Object.keys(metaRoutes[key]).forEach((item: any) => {
    routerArray.push(...(metaRoutes[key][item] as RouteObject[]));
  });
});

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
  ...routerArray,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter as ReactRouteObject[]);
  return routes;
};

export default Router;
