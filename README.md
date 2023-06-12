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

##### redux-persist

用于持久化存储 Redux 状态的插件，可以将 Redux 的状态存储在本地存储，使应用程序刷新或关闭后也能保持之前的状态，实际上就是 SessionStorage、LocalStorage 两个存储方式

Redux-persist 并不是持久化 store 和 reducer，它只负责持久化 Redux 应用程序中的 state。具体来说，它通过将 state 中的数据序列化为字符串并保存到本地存储中，从而实现在应用程序关闭或刷新后，下次重启应用程序时能够恢复之前的 state 数据。

在 Redux-persist 的内部实现中，它会使用一个叫做 persistReducer() 的函数，它的作用是将一个普通的 reducer 函数转换为可以支持 state 持久化的 reducer 函数。这个函数接收两个参数：原始的 reducer 函数和一些持久化配置信息（如存储引擎、键名等），然后返回一个全新的 reducer 函数。

为什么要使用 persistReducer() 函数呢？原因在于，对于 Redux 应用程序中的 state 来说，它不仅仅是一个简单的 JavaScript 对象。state 中可能包含了一些表达业务逻辑的数据模型、状态、视图等信息，我们需要对其中的核心数据模型进行持久化存储，以便在应用程序持续运行期间能够始终保持数据的一致性和正确性。

如果只是对 state 进行持久化存储的话，由于整个 state 是由 reducer 函数返回的，所以只需要在存储时将其序列化为字符串即可。但是在恢复 state 时，我们需要知道该如何将字符串反序列化为 JavaScript 对象，并让其与原始的 reducer 函数进行绑定，以便能够正确地处理 state 数据更新。

这就是 persistReducer() 的作用了。它通过对 reducer 函数的包装，实现了每次 dispatch action 时，先从本地存储中读取最新的 state 数据并反序列化为 JavaScript 对象，然后再将其传递给原始的 reducer 函数进行计算和更新。这样，即使应用程序关闭或刷新后重新启动，也能够从上次的状态继续运行，并保持数据的一致性。

##### redux-promise

也是一个 Redux 的中间件，允许 Redux 中 dispatch 异步的 action 并返回 Pormise 对象
传统的 Redux 异步解决方案是 redux-thunk 或 redux-sage 处理，需要额外的代码封装和管理
而 redux-promise 可以避免代码冗余和逻辑混乱的问题

使用：编写一个可以返回 Promise 对象的 action creator，然后传递给 Redux 的 dispatch 函数即可，Redux 的 store 会自动处理 Promise 对象中的数据，并将其传递给响应的 reducers 进行状态更新，可以不必过多考虑异步操作和状态管理的细节，更专注于业务

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
