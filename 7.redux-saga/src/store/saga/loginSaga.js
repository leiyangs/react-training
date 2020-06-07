import * as types from '../action-types'
import { take, call, put, fork, cancel } from 'redux-saga/effects'
import Api from './Api'
function* login(username, password) {
  try {
    const token = yield call(Api.login, username, password);
    // 用payload接收token   然后reducer的login中解构action.payload
    yield put({type: types.LOGIN_SUCCESS, payload: {token, username, password}});
    // return token;
  } catch(error) {
    alert(error);
    yield put({type: types.LOGIN_ERROR, error});
  }finally{ // saga提供的方法，不管成功失败都会进入
    console.log('进入了')
  }
}
export default function* () {
  while(true) {
    let {payload: {username, password}} = yield take(types.LOGIN);
    // const token = yield call(login, username, password);
    // fork相当于开启了一个子进程，他会单独去执行不会影响主进程，主进程会立刻向下执行
    // 但是拿不到token 只能得到一个任务对象task
    let task = yield fork(login, username, password);
    // if(token) {
      // yield put({type: types.LOGIN_SUCCESS, payload: {token, username, password}}); // 用payload接收token   然后reducer login中同样用action.payload接收
      // 登录成功可以监听退出动作
    const action = yield take(types.LOGOUT);
    // 取消任务
    if(action.type == types.LOGOUT){
      yield cancel(task)
    }
      yield put({type: types.LOGOUT_SUCCESS})
    // }
  }
}