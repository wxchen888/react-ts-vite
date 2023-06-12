import { Store, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";
import storage from 'redux-persist/lib/storage'

// 创建reducer（拆分reducer）
const reducer = combineReducers({
  global
})

// redux持久化
const persistConfig = {
  key: 'redux-state',
  storage: storage
}
const persistReducerConfig = persistReducer(persistConfig, reducer)

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用redux中间件
const middlewares = applyMiddleware(reduxThunk, reduxPromise);

// 创建store
const store: Store = createStore(persistReducerConfig, composeEnhancers(middlewares));

// 持久化store
const persistor = persistStore(store)

export { store, persistor };