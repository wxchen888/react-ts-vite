//reduce文件就是来管理数据的
//reducer文件中的数据是不能直接修改的，只能通过action来修改
import { combineReducers } from "redux";
import HomeReducer from './modules/home/reducer'
import LoginReducer from './modules/login/reducer'

const rootReducer = combineReducers({
  home: HomeReducer,
  login: LoginReducer
});

export default rootReducer;