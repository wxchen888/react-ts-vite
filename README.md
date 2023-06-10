# 项目搭建步骤

## 环境

node 14
npm 6

## 创建项目

vite：npm init vite 选择 React-ts
package.json 命令配置：
--host 打开本地服务，同一个网络其他主机可以访问
--port 3001 指定端口为 3001
--open 自动打开

## 状态管理

redux 不只针对 react
react-redux 依赖于 redux，更好的处理 react 状态管理

### redux 的思想

基本流程是调用 API，包裹 reducer 创建出一个 store

reducer 是核心，是一个`纯函数`，主要用于处理和更新程序的 state，接收当前状态 state 和一个 action 对象，返回一个新的 newState
通常需要分模块划分 reducers，最后通过 combineReducers 合并为根 reducer

在页面中通过提供的 useSelector、useDispatch 两个 hook，分别可以拿到`根store`及派发 action 的 dispatch 回调

#### 异步问题及解决方案

1、异步操作会导致函数不纯，Redux 要求 action creators 必须是纯函数，而 setTimeout、fetch 等异步操作会带来副作用
2、复杂的异步流程处理起来会很复杂

##### redux-thunk

作为最基础的 redux 异步解决方案

核心：是调用 applyMiddleware 将 redux-thunk 等中间件应用为 dispatch action 和 reducer 之间执行的功能模块，作用就是拦截和增强 store 的 dispatch 方法，处理异步及副作用

目的：是达到最终在 action creator 中可以执行异步操作，并等异步结果返回后以一个普通的 action 对象分发给 reducer 处理

使用：在 tsx 文件里直接引入 asyncActions 里的某个异步操作函数，使用 redux-thunk 增强过的 useDispatch，传入该异步操作函数，redux-thunk 在拿到该异步操作函数后会调用其并作为参数传入真正的 dipatch 函数，asyncActions 拿到后即可在异步操作完毕后，调用真正的 dispatch 函数调用对应的 action，触发 state 的更新

注意：在操作异步函数时，如果想要传入载荷，可以使用闭包的特性，将 asyncActions 的异步操作函数进行处理，返回一个符合 dipatch 要求的函数即可

#### redux 做模块拆分时的问题

1、ts 开发场景下，为了保持类型提示，必须要在添加 new action 的时候手动添加此 action 的批注类型
2、redux 提供的 ts 支持，在 tsx 文件使用时没有 state 的类型提示，必须手动为 rootState 添加类型提示，而且此时还只有 state，而不具备 action 的类型提示
3、redux-thunk 引入后，同样是 ts 类型提示会有冲突，不是很好解决

## http 请求交互

### Axios

拦截请求头，做 token 添加、改变 Content-Type 等操作
拦截响应头，为返回的 res 瘦身或者更改响应类型等操作

## 初始化样式

reset-css：将所有的 css 都消除，在 main.ts 最上方引入，避免覆盖 App 或 UI 组件样式
nomalize.css：预设了一部分的 css 样式

### 引入 scss

安装 sass 即可，可以--save-dev 放在开发依赖下，打包时不会被打包

## 配置路径别名

vite.config.ts 里面配置 resolve.alias: '@': path.resolve(\_\_dirname,'./src')
表示找到当前路径的 src 文件夹

### 配置路径提示

tsconfig.json 里面添加 baseUrl:'./'，paths:{'@/_':[src/_]}

## 使用 scss 设置样式

import 'xx/xx.scss'; 这种方式相当于在全局引入了 scss 文件，会对其他组件同类名造成影响
import styles from 'xx/xx.module.scss'; 这种方式将 scss 文件进行了模块化处理，相当于 vue 的
scoped

## 使用 antd

安装 antd 和@ant-design/icons
antd5 不需要引入额外的 antd 的 css 样式就可以直接使用组件
antd4 还需要引入额外的 css 文件

## 路由管理

react-router-dom

### 两种路由模式

React 中也分为 Hash 和 History 两种模式
Hash：使用 URL 的哈希值#模拟一个完整的 URL，页面跳转是由前端 JS 控制的，不会像传统的页面跳转重新发起一次 HTTP 请求，体验上流程。
切换的话是本质是通过监听 HashChange 事件
History：使用 HTML5 的 pushState 和 replaceState 方法，不需要在 URL 添加哈希值，用户点击链接时浏览器是通过 JS 直接改变浏览器的地址栏，同时在浏览器历史记录增加一条记录
HTML5 的 popState 事件可以监听路有变化，但是此种模式必须在服务端配置，避免在刷新页面出现资源 404 情况

### 项目中使用的两种方法

老写法：直接在 router/index.tsx 中用 BrowserRouter、Routes、Route，用 Navigate 组件进行重定向
然后直接在 main.tsx 引入 router/index.tsx，替换掉 App，此时需要注意在 App 组件中使用 Ouelet 组件作为占位符（和 vue 的 router-view 组件作用一样）

新写法：router/route.tsx 中类似 vue 的路由配置表的写法，和老写法的区别是：
1、main.tsx 仍然使用 App，只是需要用 BrowserRouter 进行包裹
2、在 App.tsx 引入 router/route.tsx 和 useRoutes 函数，将其转换成一个 Router 组件

### 路由懒加载

使用 React 中的 lazy 函数包裹一个导出 Promise 的函数
同时需要在 lazy 导出的组件外层包裹 React.Suspense 组件传入 fallback

### 路由守卫

React 不具备路由守卫的概念，需要从 react-router-dom 本身着手

## 菜单路由

暂时先写死，把全部的路由都定义好

## 登录页面
