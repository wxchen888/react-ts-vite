import { GlobalState } from "@/redux/types";
import produce from 'immer'
import * as types from '@/redux/constant'
import { AnyAction } from "redux";

const globalState: GlobalState = {
  token: '',
  userInfo: {},
  assemblySize: 'middle',
  language: '',
  themeConfig: {
    // 默认 primary 主题色
    primary: '#1890ff',
    // 深色模式
    isDark: false,
    // 色弱模式 || 灰色模式
    weakOrGray: '',
    // 面包屑
    breadcrumb: true,
    // 标签页
    tabs: true,
    // 底部
    footer: true
  }
}

// global reducer
const global = (state: GlobalState = globalState, action: AnyAction) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.SET_TOKEN:
        draftState.token = action.token
        break;
      case types.SET_ASSEMBLY_SIZE:
        draftState.assemblySize = action.assemblySize
        break;
      case types.SET_LANGUAGE:
        draftState.language = action.language
        break;
      case types.SET_THEME_CONFIG:
        draftState.themeConfig = action.themeConfig
        break;
      default:
        return draftState
    }
  })
}

export default global;