import React, { useState } from "react";
import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import styles from "./index.module.scss";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首 页", "/home", <PieChartOutlined />),
  getItem("User", "3", <UserOutlined />, [
    getItem("Tom", "3-1"),
    getItem("Bill", "3-2"),
  ]),
  getItem("关 于", "/about", <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 导航栏绑定激活的数据
  const [selectedKeys, setSelectKeys] = useState(["/home"]);
  const navigate = useNavigate();
  const menuClick = (info: MenuItem) => {
    console.log(info);
    if (!(info?.key as string).includes("/")) return;
    navigate(info?.key as string);
    setSelectKeys([info?.key as string]);
  };

  const [breadCrumbItems, setBreadCrumbItems] = useState([
    {
      title: "User",
    },
    {
      title: <a href="/about">Bill</a>,
    },
  ]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={styles.logo} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          selectedKeys={selectedKeys}
          onClick={(e) => menuClick(e)}
        />
      </Sider>
      {/* 右边内容 */}
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb
            style={{
              lineHeight: "64px",
              padding: "0 24px",
            }}
            items={breadCrumbItems}
          />
        </Header>
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
      </Layout>
    </Layout>
  );
};

export default Home;
