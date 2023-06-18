import defaultTheme from '@/styles/theme/theme-default.less?inline'
import darkTheme from '@/styles/theme/theme-dark.less?inline'
import { ThemeConfigProp } from '@/redux/types'

/** 全局主题配置 */
const useTheme = (themeConfig: ThemeConfigProp) => {
  const { weakOrGray, isDark } = themeConfig
  const initTheme = () => {
    // 灰色 弱色切换
    const html = document.documentElement as HTMLElement
    if (!weakOrGray) html.setAttribute('style', '')
    if (weakOrGray === 'gray') html.setAttribute('style', 'filter:grayscale(100%)')
    if (weakOrGray === 'weak') html.setAttribute('style', 'filter:contrast(80%)')

    // 深色模式
    const head = document.getElementsByTagName('head')[0]
    const getStyle = head.getElementsByTagName('style')
    if (getStyle.length > 0) {
      for (let i = 0, l = getStyle.length; i < l; i++) {
        if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
      }
    }
    const styleDom = document.createElement("style");
    styleDom.dataset.type = "dark";
    styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
    head.appendChild(styleDom);
  }
  initTheme()

  return {
    initTheme
  }
}

export default useTheme