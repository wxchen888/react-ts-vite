import {
  DashboardOutlined,
  NotificationOutlined,
  DesktopOutlined,
  UserOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];
// items 需要初始定义好 方便后面和后台返回的数据进行对比
const items = [
  {
    key: "/home",
    icon: <DashboardOutlined />,
    label: "首 页",
  },
  {
    key: "/about",
    icon: <NotificationOutlined />,
    label: "关 于",
  },
  {
    key: "/auth",
    icon: <UserOutlined />,
    label: "权限管理",
    children: [
      {
        key: "/auth/account",
        label: "账号管理",
      },
      {
        key: "/auth/role",
        label: "角色管理",
      },
      {
        key: "/auth/resource",
        label: "资源管理",
      },
    ],
  },
  {
    key: "/product",
    icon: <CalendarOutlined />,
    label: "商品管理",
    children: [
      {
        key: "/product/list",
        label: "商品列表",
      },
      {
        key: "/product/category",
        label: "商品分类",
      },
      {
        key: "/product/brand",
        label: "品牌管理",
      },
    ],
  },
  {
    key: "/user",
    icon: <DesktopOutlined />,
    label: "个人中心",
    children: [
      {
        key: "/user/index",
        label: "个人主页",
      },
      {
        key: "/user/setup",
        label: "个人设置",
      },
    ],
  },
];

export default items;
