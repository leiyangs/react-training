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
export function fork(task) {
  return {
    type: 'FORK',
    task
  }
}
// takeEvery相当于要开启一个新的子进程，单独监听actionType，当动作发生时执行迭代器
export function* takeEvery(actionType, generator) {
  yield fork(function* (){
    while(true) {
      yield take(actionType); // ASYNC_INCREMENT
      yield generator(); // increment
    }
  })
}

export function delay(ms) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve(ms);
    }, ms);
  })
}

export function call(fn, ...args) {
  return {
    type: 'CALL',
    fn,
    args
  }
}

export function cps(fn, ...args) {
  return {
    type: 'CPS',
    fn,
    args
  }
}

export function all(fns) {
  return {
    type: 'ALL',
    fns
  }
}