# 1. redux-saga

redux-saga 是一个 redux 的中间件，而中间件的作用是为 redux 提供额外的功能。
在 reducers 中的所有操作都是同步的并且是纯粹的，即 reducer 都是纯函数，纯函数是指一个函数的返回结果只依赖于它的参数，并且在执行过程中不会对外部产生副作用，即给它传什么，就吐出什么。
但是在实际的应用开发中，我们希望做一些异步的（如Ajax请求）且不纯粹的操作（如改变外部的状态），这些在函数式编程范式中被称为“副作用”。
redux-saga 就是用来处理上述副作用（异步任务）的一个中间件。它是一个接收事件，并可能触发新事件的过程管理者，为你的应用管理复杂的流程。

## 2. redux-saga工作原理

sages 采用 Generator 函数来 yield Effects（包含指令的文本对象）
Generator 函数的作用是可以暂停执行，再次执行的时候从上次暂停的地方继续执行
Effect 是一个简单的对象，该对象包含了一些给 middleware 解释执行的信息。
你可以通过使用 effects API 如 fork，call，take，put，cancel 等来创建 Effect。

## 3. redux-saga分类

worker saga 做实际的工作，如调用API，进行异步请求，获取异步封装结果
watcher saga 监听被dispatch的actions,当接受到action或者知道其被触发时，调用worker执行任务
root saga 立即启动saga的唯一入口

## 4. 构建项目

4.1 初始化项目
cnpm install create-react-app -g 
create-react-app zhufeng-saga-start
cd zhufeng-saga-start
cnpm i redux react-redux redux-saga tape --save