import { lazy } from "react";
// import Layout from "@/layout";
import Login from "@/pages/login";
import { Navigate } from "react-router-dom";
import React from "react";

const Layout = lazy(() => import("@/layout/index"));
const Home = lazy(() => import("@/pages/home/index"));
const About = lazy(() => import("@/views/about/index"));
// 权限管理
const Account = lazy(() => import("@/views/auth/account/index"));
const Resource = lazy(() => import("@/views/auth/resource/index"));
const Role = lazy(() => import("@/views/auth/role/index"));
// 商品管理
const ProductList = lazy(() => import("@/views/product/list/index"));
const ProductCategory = lazy(() => import("@/views/product/category/index"));
const ProductBrand = lazy(() => import("@/views/product/brand/index"));
// 用户管理
const UserIndex = lazy(() => import("@/views/user/index/index"));
const UserSetup = lazy(() => import("@/views/user/setup/index"));
// 404
const NotFound = lazy(() => import("@/pages/404/index"));

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
    path: "/login",
    element: <Login />,
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
      {
        path: "/auth/account",
        element: withLoadingComponent(<Account />),
      },
      {
        path: "/auth/resource",
        element: withLoadingComponent(<Resource />),
      },
      {
        path: "/auth/Role",
        element: withLoadingComponent(<Role />),
      },
      {
        path: "/product/list",
        element: withLoadingComponent(<ProductList />),
      },
      {
        path: "/product/category",
        element: withLoadingComponent(<ProductCategory />),
      },
      {
        path: "/product/brand",
        element: withLoadingComponent(<ProductBrand />),
      },
      {
        path: "/user/index",
        element: withLoadingComponent(<UserIndex />),
      },
      {
        path: "/user/setup",
        element: withLoadingComponent(<UserSetup />),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
