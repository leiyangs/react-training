import { take,put } from '../../redux-saga/effects'
import * as types from '../action-types'
function* increment() {
  yield put({type: types.INCREMENT})
}
export default function* () {
  for (let i = 0; i < 3; i++) {
    const action = yield take(types.ASYNC_INCREMENT);
    console.log('开始执行countersaga',action);
    // yield put({type: types.INCREMENT})
    yield increment();
  }
  alert('最多执行三次')
}