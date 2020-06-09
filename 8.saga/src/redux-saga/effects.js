export function take(actionType) {
  return {
    type: 'TAKE',
    actionType
  }
}
export function put(action) {
  return {
    type: 'PUT',
    action
  }
}
// takeEvery相当于要开启一个新的子进程，单独监听actionType，当动作发生时执行迭代器
export function* takeEvery(actionType, generator) {
  
}