// import { Outlet, Link } from "react-router-dom";
import router from "@/router/route";
import { useRoutes } from "react-router-dom";

function App() {
  const outlet = useRoutes(router);

  return (
    <>
      {/**
       * 传统路由写法：
       * 占位符组件 类似vue的router-view组件
       */}
      {/* <Outlet /> */}

      {/* 
        新型路由写法：使用useRoutes()函数
      */}
      {outlet}
    </>
  );
}

export default App;
