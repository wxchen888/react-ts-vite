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

## 路由管理

react-router-dom

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

## 添加路由

### 两种路由模式

React 中也分为 Hash 和 History 两种模式
Hash：使用 URL 的哈希值#模拟一个完整的 URL，页面跳转是由前端 JS 控制的，不会像传统的页面跳转重新发起一次 HTTP 请求，体验上流程。
切换的话是本质是通过监听 HashChange 事件
History：使用 HTML5 的 pushState 和 replaceState 方法，不需要在 URL 添加哈希值，用户点击链接时浏览器是通过 JS 直接改变浏览器的地址栏，同时在浏览器历史记录增加一条记录
HTML5 的 popState 事件可以监听路有变化，但是此种模式必须在服务端配置，避免在刷新页面出现资源 404 情况

### 项目中使用的两种方法

老写法：直接在 router/index.tsx 中用 BrowserRouter、Routes、Route，用 Navigate 组件进行重定向，
然后直接在 main.tsx 引入 router/index.tsx，替换掉 App，此时需要注意在 App 组件中使用 Ouelet 组件作为占位符（和 vue 的 router-view 组件作用一样）

新写法：router/route.tsx 中类似 vue 的路由配置表的写法，和老写法的区别是：
1、main.tsx 仍然使用 App，只是需要用 BrowserRouter 进行包裹
2、在 App.tsx 引入 router/route.tsx 和 useRoutes 函数，将其转换成一个 Router 组件

### 路由懒加载

使用 React 中的 lazy 函数包裹一个导出 Promise 的函数
同时需要在 lazy 导出的组件外层包裹 React.Suspense 组件传入 fallback