import { Breadcrumb, Layout, theme } from "antd";
import React, { useState } from "react";

const { Header } = Layout;

const BreadCrumb: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [breadCrumbItems, setBreadCrumbItems] = useState([
    {
      title: "User",
    },
    {
      title: <a href="/about">Bill</a>,
    },
  ]);

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Breadcrumb
          style={{
            lineHeight: "64px",
            padding: "0 24px",
          }}
          items={breadCrumbItems}
        />
      </Header>
    </>
  );
};

export default BreadCrumb;
