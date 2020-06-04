import { all, takeEvery, delay, put } from 'redux-saga/effects'
import * as types from './action-types'
export function* helloSaga() {
  console.log('hello saga');
  yield 1;
  console.log('hello1');
  yield 2;
  console.log('hello2')
}

export function* incrementAsync() {
  // 会返回一个Promise 执行完把resolve的值返回
  yield delay(1000);
  console.log(delay(1000))
  // 再次向仓库派发INCREMENT动作
  yield put({type: types.INCREMENT})
}
// rootSaga用来阻止和调用其他saga的generator
// 监听saga 监听向仓库派发的动作，如果监听到动作会通知worker执行
// workersaga 是真正执行任务的saga 
export function* watchIncrementAsync() {
  // 监听每一次的ASYNC_INCREMENT动作,每当向仓库派发这个动作时，就会调用另一个worker saga 执行任务
  yield takeEvery(types.ASYNC_INCREMENT, incrementAsync);
}
export default function* rootSaga() {
  yield all([ // 等待全部执行
    helloSaga(),
    watchIncrementAsync()
  ])
}
