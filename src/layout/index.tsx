/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import "./index.less";
import LayoutMenu from "./components/Menu";
import { setAuthButtons } from "@/redux/modules/auth/action";
import { updateCollapse } from "@/redux/modules/menu/action";
import { connect } from "react-redux";
import Sider from "antd/es/layout/Sider";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { getAuthorButtons } from "@/api/modules/login";
import { useEffect } from "react";

const LayoutIndex = (props: any) => {
  const { isCollapse, updateCollapse, setAuthButtons } = props;

  // 获取按钮权限列表
  const getAuthButtonsList = async () => {
    const { data } = await getAuthorButtons();
    setAuthButtons(data);
  };

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        const screenWidth = document.body.clientWidth;
        if (!isCollapse && screenWidth < 1200) updateCollapse(true);
        if (!isCollapse && screenWidth > 1200) updateCollapse(false);
      })();
    };
  };

  useEffect(() => {
    listeningWindow();
    getAuthButtonsList();
  }, []);

  return (
    // section 语义化标签 标识同一个部分或区域
    <section className="container">
      <Sider
        trigger={null}
        collapsed={props.isCollapse}
        width={220}
        theme="dark"
      >
        <LayoutMenu></LayoutMenu>
      </Sider>
      <Layout>
        <div className="layout-header">头部...</div>
        <div className="layout-tabs">切换页</div>
        <Content>
          <Outlet></Outlet>
        </Content>
        <div className="layout-footer">脚部</div>
      </Layout>
    </section>
  );
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { setAuthButtons, updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
