import { legacy_createStore } from "redux";
import reducer from './reducer'
import { IHomeState } from './modules/home/index'
import { ILoginState } from './modules/login/index'

export type IState = {
  home: IHomeState,
  login: ILoginState
}

// 为了让浏览器正常使用redux-devtools插件，需要在创建store的时候加上下面这句代码
const store: IState = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store