import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import items, { MenuItem } from "./models/use-menu-item";

const { Sider } = Layout;

const MainMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  // 导航栏绑定激活的数据
  const navigate = useNavigate();
  const menuClick = (info: MenuItem) => {
    navigate(info?.key as string);
  };

  // 菜单展开/关闭
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const openChange = (keys: string[]) => {
    setOpenKeys(keys[keys.length - 1] ? [keys[keys.length - 1]] : []);
  };

  // 点击subMenu或路由跳转后，subMenu默认展开
  const { pathname } = useLocation();
  useEffect(() => {
    let key = "";
    items.forEach((item) => {
      if (item["children"] === undefined || item["children"].length === 0) {
        return;
      }
      const cItem = item["children"].find((cItem) => cItem.key === pathname);
      if (cItem) {
        key = item?.key;
      }
    });
    if (key) {
      setOpenKeys([key]);
    } else {
      setOpenKeys([pathname]);
    }
  }, [pathname]);

  return (
    <>
      {/* 左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={styles.logo} />
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          mode="inline"
          items={items}
          onClick={(e) => menuClick(e)}
          onOpenChange={openChange}
          openKeys={openKeys}
        />
      </Sider>
    </>
  );
};

export default MainMenu;
