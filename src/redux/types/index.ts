import type { SizeType } from "antd/es/config-provider/SizeContext";

/** themeConfigProp：主题配置属性 */
export interface ThemeConfigProp {
  primary: string;
  isDark: boolean;
  weakOrGray: string;
  breadcrumb: boolean;
  tabs: boolean;
  footer: boolean;
}

/** GlobalState: 全局状态配置 */
export interface GlobalState {
  token: string;
  userInfo: any;
  assemblySize: SizeType;
  language: string;
  themeConfig: ThemeConfigProp;
}

/* AuthState */
export interface AuthState {
  authButtons: {
    [propName: string]: any;
  };
  authRouter: string[];
}

/* MenuState */
export interface MenuState {
  isCollapse: boolean;
  menuList: Menu.MenuOptions[];
}

/* TabsState */
export interface TabsState {
  tabsActive: string;
  tabsList: Menu.MenuOptions[];
}

/* BreadcrumbState */
export interface BreadcrumbState {
  breadcrumbList: {
    [propName: string]: any;
  };
}