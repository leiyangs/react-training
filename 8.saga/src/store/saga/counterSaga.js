import { take,put } from 'redux-saga/effects'
import * as types from '../action-types'
export default function* () {
  for (let i = 0; i < 3; i++) {
    const action = yield take(types.ASYNC_INCREMENT);
    console.log(action)
    yield put({type: types.INCREMENT})
  }
  alert('最多执行三次')
}