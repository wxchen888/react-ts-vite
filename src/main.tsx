// import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import App from "./App.tsx";
// import Router from "./router/index.tsx";
//UI框架样式
import "@/assets/styles/global.scss";
import { BrowserRouter } from "react-router-dom";
// 状态管理
import { Provider } from "react-redux";
import store from "@/store/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <>
      {/* <React.StrictMode> */}
      {/* 传统路由写法 */}
      {/* <Router /> */}
      {/* 新型路由写法 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </>
  </Provider>
);
