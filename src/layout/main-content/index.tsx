import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const MainContent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Content style={{ margin: "16px 16px 0" }}>
        <div
          style={{
            padding: 10,
            minHeight: 360,
            height: "100%",
            background: colorBgContainer,
          }}
        >
          {<Outlet></Outlet>}
        </div>
      </Content>
    </>
  );
};

export default MainContent;
