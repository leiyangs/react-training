import { all, takeEvery, take, delay, put, call,apply, cps } from 'redux-saga/effects'
import * as types from './action-types'
function* helloSaga() {
  console.log('hello saga');
  yield 1;
  console.log('hello1');
  yield 2;
  console.log('hello2')
}
// 模拟node的readfile
export function readfile(filename,callback) {
  setTimeout(() => {
    callback(null,filename); // cps(err, res) 所以第一个值放null
  },1000)
}
// cps 用来调用node类型的方法 也就是回调 call和apply只能调用promise 不支持回调
export function* readAsync() {
  let content = yield cps(readfile, 'README.md');
  console.log(content)
}
export function* incrementAsync() {
  // 会返回一个Promise 执行完把resolve的值返回
  // let obj = {name: 'yang'}
  // 错误处理用try catch
  try {
    let msg = yield delay(1000);
    // 给delay绑定this的写法
    // let msg = yield call([obj,delay], 1000);
    // let msg = yield apply(obj,delay, [1000]);
    console.log(msg)
    // 再次向仓库派发INCREMENT动作
    yield put({type: types.INCREMENT})
  } catch (error) {
    console.log(error)
  }
}
// rootSaga用来阻止和调用其他saga的generator
// 监听saga 监听向仓库派发的动作，如果监听到动作会通知worker执行
// workersaga 是真正执行任务的saga 
function* watchIncrementAsync() {
  // 监听每一次的ASYNC_INCREMENT动作,每当向仓库派发这个动作时，就会调用另一个worker saga 执行任务
  // take监听一次 takeEvery每次都监听(内部是take实现的)
  yield takeEvery(types.ASYNC_INCREMENT, incrementAsync);

  // 用take实现takeEvery
  // while(true) {
  //   const action = yield take(types.ASYNC_INCREMENT);
  //   console.log(action);
  //   yield put({type: types.INCREMENT});
  // }
}

// 定义根saga 上面所有的saga都可以抽离出去,在这里全部执行(懒得抽了)
export default function* rootSaga() {
  yield all([ // 等待全部执行
    helloSaga(),
    watchIncrementAsync(),
    readAsync()
  ])
}
