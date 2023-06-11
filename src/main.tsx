// import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import App from "./App.tsx";
//UI框架样式
import "@/assets/styles/global.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
  </>
);
