import { HashRouter } from "react-router-dom";
import Router from "./router";
import { connect } from "react-redux";
import { setLanguage } from "./redux/modules/global/action";
import { useEffect, useState } from "react";
import useTheme from "./hooks/useTheme";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import { ConfigProvider } from "antd";
import i18n from "i18next";
import { getBrowserLang } from "@/utils/util";
import "moment/dist/locale/zh-cn";

function App(props: any) {
  console.log("props", props);
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
      <ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
        <Router />
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
