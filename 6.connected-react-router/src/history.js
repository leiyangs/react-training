import { createBrowserHistory, createHashHistory } from 'history'
// 创建history对象 在reducer中connectRouter和ConnectedRouter使用
let history = createHashHistory();
export default history;