// import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "@/assets/iconfont/iconfont.less";
import "@/assets/fonts/font.less";
import "@/language/index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "./App.tsx";
//UI框架样式
import "@/assets/styles/global.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
