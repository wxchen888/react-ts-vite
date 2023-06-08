//reduce文件就是来管理数据的
//reducer文件中的数据是不能直接修改的，只能通过action来修改
import { combineReducers } from "redux";
import HomeReducer, { IHomeReducer } from './modules/home/reducer'
import LoginReducer, { ILoginReducer } from './modules/login/reducer'

export type IReducer = IHomeReducer & ILoginReducer
const rootReducer = combineReducers<IReducer>({
  home: HomeReducer,
  login: LoginReducer
});

export default rootReducer;