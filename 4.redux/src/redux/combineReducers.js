// 实现combineReducers
export default function (reducers) {
 const reducerKeys = Object.keys(reducers);
 return function(state={}, action) { // state={counter:0,counter1:0,counter2:0}
   const nextState = {};
   for (let i = 0; i < reducerKeys.length; i++) {
     const key = reducerKeys[i];
     const reducer = reducers[key]; // counter conunter1 counter2
     const previousStateForKey = state[key]; // 老状态
     const nextStateForKey = reducer(previousStateForKey, action); // 执行后的新状态
     nextState[key] = nextStateForKey;
   }
   return nextState;
 }
} 