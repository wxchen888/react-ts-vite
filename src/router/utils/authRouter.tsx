import { useLocation, Navigate } from "react-router-dom";
import { rootRouter } from "../index";
import { HOME_URL } from "@/config/config";
import { store } from "@/redux/index";
import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { searchRoute } from "@/utils/util";

const axiosCanceler = new AxiosCanceler();

/** 路由守卫组件 */
const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  console.log("props", pathname, rootRouter);

  const route = searchRoute(pathname, rootRouter);
  // * 跳转前 清除掉所有的请求
  axiosCanceler.removeAllPending();

  // * 判断是否需要权限 不需要权限的话直接放行
  if (!route.meta?.requiresAuth) {
    // 只有去往login页面才会进入这里
    return props.children;
  }

  // * 判断是否有token
  const token = store.getState().global.token;
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  // * 动态路由
  const dynamicRouter = store.getState().auth.authRouter;
  // * 静态路由 添加HOME_URL是为了能进入首页加载动态路由
  const staticRouter = [HOME_URL, "/403"];
  const routerList = [...dynamicRouter, ...staticRouter];
  // * 判断是否有权限
  if (!routerList.includes(pathname)) {
    return <Navigate to="/403" replace={true} />;
  }

  return props.children;
};

export default AuthRouter;
