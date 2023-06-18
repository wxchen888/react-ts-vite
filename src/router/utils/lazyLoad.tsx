import { Spin } from "antd";
import { Suspense } from "react";

const LazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            position: "absolute",
            inset: 0,
          }}
        ></Spin>
      }
    >
      <Comp></Comp>
    </Suspense>
  );
};

export default LazyLoad;
