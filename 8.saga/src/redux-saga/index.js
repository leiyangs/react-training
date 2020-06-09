export default function createSagaMiddleware() {
  // 使用中间件惯用套路
  // function sagaMiddlewate(dispatch, getState) {
  //   return function(next) {
  //     return function(action) {

  //     }
  //   }
  // }
  // 简写
  let sagaMiddlewate = ({dispatch, getState}) => {
    let run = generator => {
      let it = typeof generator[Symbol.iterator] === 'function'?generator:generator();
      let next = action => {
        // value={type:'TAKE',actionType: ASYNC_INCREMENT}
        let {value:effect,done} = it.next(action); // 这里的next是generator函数的(各个saga generator函数中的)
        if(!done) {
          // 判断effect是不是一个generator函数
          if(typeof effect[Symbol.iterator] == 'function') {
            run(effect); // effect是迭代器直接传入run方法
            next();
          }else {
            switch(effect.type) {
              case 'TAKE': // 监听某个动作，当动作发生时候执行下一步
                channel.subscribe(effect.actionType, next);
                break;
              case 'PUT':
                dispatch(effect.action);
                next();
                break;
              default:
                break;
            }
          }
        }
      }
      next();
    }
    sagaMiddlewate.run = run;
    return next => action => {
      channel.publish(action);
      next(action);
    }
  }

  // 发布订阅
  let createChannel = () => {
    let observer = {};
    let subscribe = (actionType, callback) => {
      // 订阅
      // observer[actionType] = observer[actionType] || [];
      observer[actionType] = callback;
    }
    let publish = action => {
      // 如果observer中有这个方法，执行并销毁
      // 只执行一次，执行完要销毁
      if(observer[action.type]) {
        let next = observer[action.type];
        delete observer[action.type];
        next(action);
      }
    }
    return {subscribe,publish};
  }
  let channel = createChannel();
  return sagaMiddlewate;
}