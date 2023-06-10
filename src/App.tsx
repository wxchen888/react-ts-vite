import BeforeRouterEach from "@/request/permission";
import RouteGuard from "@/request/progress";
import React from "react";

function App() {
  // const outlet = useRoutes(router);

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
      {/* {outlet} */}

      {/* TODO：这样只有在reload的时候才会有进度条，路由切换时没有 */}
      <React.Suspense fallback={<RouteGuard></RouteGuard>}>
        <BeforeRouterEach></BeforeRouterEach>
      </React.Suspense>
    </>
  );
}

export default App;
