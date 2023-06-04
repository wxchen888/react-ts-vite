import React, { useState } from "react";
import { Layout } from "antd";
import MainMenu from "./main-menu";
import BreadCrumb from "./bread-crumb";
import MainContent from "./main-content";
import MainFooter from "./main-footer";

const Home: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左边侧边栏 */}
      <MainMenu></MainMenu>
      {/* 右边内容 */}
      <Layout>
        <BreadCrumb></BreadCrumb>
        <MainContent></MainContent>
        <MainFooter></MainFooter>
      </Layout>
    </Layout>
  );
};

export default Home;
