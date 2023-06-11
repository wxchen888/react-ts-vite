const menuList = [
  {
    key: "/home",
    icon: "DashboardOutlined",
    label: "首 页",
  },
  {
    key: "/about",
    icon: "NotificationOutlined",
    label: "关 于",
  },
  {
    key: "/auth",
    icon: "UserOutlined",
    label: "权限管理",
    children: [
      {
        key: "/auth/account",
        label: "账号管理",
        auth: ["add", "edit", "delete"],
      },
      {
        key: "/auth/role",
        label: "角色管理",
        auth: ["add", "edit", "delete"],
      },
      {
        key: "/auth/resource",
        label: "资源管理",
        auth: ["add", "edit", "delete"],
      },
    ],
  },
  {
    key: "/product",
    icon: "CalendarOutlined",
    label: "商品管理",
    children: [
      {
        key: "/product/list",
        label: "商品列表",
        auth: ["add", "edit", "delete"],
      },
      {
        key: "/product/category",
        label: "商品分类",
        auth: ["add", "edit", "delete"],
      },
      {
        key: "/product/brand",
        label: "品牌管理",
        auth: ["add", "edit", "delete"],
      },
    ],
  },
  {
    key: "/user",
    icon: "DesktopOutlined",
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

export default menuList;
