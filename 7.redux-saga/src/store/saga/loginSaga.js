import * as types from '../action-types'
import { take, call, put } from 'redux-saga/effects'
import Api from './Api'
function* login(username, password) {
  try {
    const token = yield call(Api.login, username, password);
    return token;
  } catch(error) {
    alert(error);
    yield put({type: types.LOGIN_ERROR, error});
  }
}
export default function* () {
  while(true) {
    let {payload: {username, password}} = yield take(types.LOGIN);
    const token = yield call(login, username, password);
    if(token) {
      yield put({type: types.LOGIN_SUCCESS, payload: {token, username, password}}); // 用payload接收token   然后reducer login中同样用action.payload接收
      // 登录成功可以监听退出动作
      yield take(types.LOGOUT);
      yield put({type: types.LOGOUT_SUCCESS})
    }
  }
}