import { legacy_createStore, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import reducer from './reducer'
import { IHomeState } from './modules/home/index'
import { ILoginState } from './modules/login/index'

export type IState = {
  home: IHomeState,
  login: ILoginState
}

// 为了让浏览器正常使用redux-devtools插件，需要在创建store的时候加上下面这句代码
// const store: IState = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store: IState = legacy_createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)))

export default store