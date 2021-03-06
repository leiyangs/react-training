# 用了简单脚手架

``` javascript
npx create-react-app 1.react
```

## 1.react

  react基础知识+virtualDom实现

## 2.react

  简易版react(模拟react功能)

## 3.react

  React基础用法(生命周期、上下文、高级组件、PureComponent memo、片段、render props)

## 4.redux

  Redux用法，实现Redux(createStore/bindActionCreators/combineReducers/middleware/compose)
  react-redux(连接库)  counter中使用了react-redux
  Redux的中间件/级联中间件 store => index.js
  Redux-thunk中间件(异步) 在store中applyMiddleware传入thunk

## 5.react-router

  react-router-dom(路由原理)  path-to-regexp HashRouter Route Link Redirect Switch 路径参数 受保护的路由(Protected) 自定义导航(Route => children) WithRouter(普通组件被Route包裹) 阻止跳转(Prompt 表单跳转其他页面时confirm) BrowserRouter

## 6.connected-react-router
  
  连接router和redux(github的useage)
  redux-persist(redux持久化  手写persist)

## 7.redux-saga
  
  saga替换thunk thunk相对于saga有很多缺点
  redux-saga 是一个 redux 的中间件，而中间件的作用是为 redux 提供额外的功能。

  在 reducers 中的所有操作都是同步的并且是纯粹的，即 reducer 都是纯函数，纯函数是指一个函数的返回结果只依赖于它的参数，并且在执行过程中不会对外部产 生副作用，即给它传什么，就吐出什么。

  但是在实际的应用开发中，我们希望做一些异步的（如Ajax请求）且不纯粹的操作（如改变外部的状态），这些在函数式编程范式中被称为“副作用”。

  1、redux-saga用法 (all, takeEvery, delay, put, call,apply, cps, cancel, race, all)
  2、单元测试

  ```node
  cnpm i @babel/core @babel/node @babel/plugin-transform-modules-commonjs --save-dev
  ```

  3、错误处理

  4、登录流程

## 8.saga
  
  手写saga

## 9.react-hooks
  
  Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
  1. useState, memo,useMemo,useCallback (Counter.js)
  2. reducer useContext  (Counter1.js)
  3. effect   (Counter2.js)
  4. createRef useRef forwardRef UseLayoutEffectComponent (UseRef.js UseLayoutEffectComponent.js)
  5. 自定义hook 状态的复用  (Counter3.js)


