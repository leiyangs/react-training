import { takeEvery, take, put, call, delay } from '../../redux-saga/effects'
import * as types from '../action-types'
function* increment() {
  let result = yield call(delay, 1000);
  yield delay(1000);
  console.log('result=',result);
  yield put({type: types.INCREMENT})
}
function* asyncincreament() {
  for (let i = 0; i < 3; i++) {
    const action = yield take(types.ASYNC_INCREMENT);
    console.log('开始执行countersaga',action);
    // yield put({type: types.INCREMENT})
    yield increment();
  }
  alert('最多执行三次')
}

export default function* () {
  yield takeEvery(types.ASYNC_INCREMENT, increment)
}