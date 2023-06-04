import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter: React.FC = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          padding: "0",
          height: "48px",
          lineHeight: "48px",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </>
  );
};

export default MainFooter;
