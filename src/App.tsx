/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getBrowserLang } from "@/utils/util";
import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import { setLanguage } from "./redux/modules/global/action";
import { HashRouter } from "react-router-dom";
import Router from "./router";
import AuthRouter from "./router/utils/authRouter";
import useTheme from "./hooks/useTheme";
import { antDarkTheme, antDefaultTheme } from "@/styles/theme/ant-theme-dark";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "i18next";
import "dayjs/locale/zh-cn";

function App(props: any) {
  const { language, setLanguage, assemblySize, themeConfig } = props;
  const [i18nLocale, setI18nLocale] = useState(zhCN);

  // 全局使用主题
  useTheme(themeConfig);

  // 全局使用语言
  const setAntdLanguage = () => {
    if (language && language == "zh") return setI18nLocale(zhCN);
    if (language && language == "en") return setI18nLocale(enUS);
    if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
    if (getBrowserLang() == "en") return setI18nLocale(enUS);
  };

  useEffect(() => {
    // 全局使用国际化
    i18n.changeLanguage(language || getBrowserLang());
    setLanguage(language || getBrowserLang());
    setAntdLanguage();
  }, [language]);

  return (
    <HashRouter>
      <ConfigProvider
        theme={themeConfig.isDark ? antDarkTheme : antDefaultTheme}
        locale={i18nLocale}
        componentSize={assemblySize}
      >
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </HashRouter>
  );
}

// 给App组件注入redux的state
const mapStateToProps = (state: any) => state.global;
// 用于将action creators映射到组件的props对象中
const mapDispatchToProps = { setLanguage };
// 连接redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
