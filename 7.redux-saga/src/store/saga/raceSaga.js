import { race, all, call, delay } from 'redux-saga/effects'
const _delay = ms => new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve(ms)
  },ms)
})
// race 只获取第一个执行完的，后面执行的不管,会自动取消失败的effect
// all 等所有执行完
export default function* () {
  const { a, b } = yield race({
    a: call(_delay, 1000),
    b: call(_delay,2000)
  })
  console.log(a,b)
}
