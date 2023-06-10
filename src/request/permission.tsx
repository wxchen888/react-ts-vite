import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "@/router/route";
import { message } from "antd";
import { useEffect } from "react";

function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/login");
    message.warning("登录已过期，请先登录！");
  }, [navigateTo]);
  return <div></div>;
}
function ToHome() {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo("/home");
    message.warning("您已登录！");
  }, [navigateTo]);
  return <div></div>;
}
const BeforeRouterEach = () => {
  const outlet = useRoutes(router);

  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token && location.pathname !== "/login") {
    return <ToLogin></ToLogin>;
  }
  if (token && location.pathname === "/login") {
    return <ToHome></ToHome>;
  }
  return outlet;
};

export default BeforeRouterEach;
