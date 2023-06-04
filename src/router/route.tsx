import { lazy } from "react";
import Layout from "@/pages/layout";
// import About from "@/pages/about";
import { Navigate } from "react-router-dom";
import React from "react";

const Home = lazy(() => import("@/pages/home/index"));
const About = lazy(() => import("@/pages/about/index"));

const withLoadingComponent = (comp: JSX.Element) => {
  return (
    <React.Suspense fallback={<h2>is Loading...</h2>}>{comp}</React.Suspense>
  );
};
// 新型的路由写法：类似vue的router写法
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: withLoadingComponent(<Home />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
    ],
  },
];

export default routes;
