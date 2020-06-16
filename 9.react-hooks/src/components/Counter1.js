// reducer
import React, { Component, useReducer, createContext, useContext } from 'react'
let initialState = 0;
function reducer(state,action) {
  switch(action.type){
    case 'add':
      return {number: state.number+1};
    default: 
      return state;
  }
}


let CounterContext = createContext(); // 创建上下文

// context传递函数子组件的方式
// function SubCounter() {
//   return (
//     <CounterContext.Consumer>
//       {
//         context=> (
//           <>
//             <button onClick={()=>context.dispatch({type:'add'})}>{context.state.number}</button>
//           </>
//         )
//       }
//     </CounterContext.Consumer>
//   )
// }

// context传递类子组件的方式
// class SubCounter extends Component {
//   static contextType = CounterContext;
//   render() {
//     return (
//       // <CounterContext.Consumer>
//       //   {
//       //     context=> (
//       //       <>
//       //         <button onClick={()=>context.dispatch({type:'add'})}>{context.state.number}</button>
//       //       </>
//       //     )
//       //   }
//       // </CounterContext.Consumer>
//       <button onClick={()=>this.context.dispatch({type:'add'})}>{this.context.state.number}</button>
//     )
//   }
// }

// hooks的写法 useContext
function SubCounter() {
  const context = useContext(CounterContext);
  return (
    <button onClick={()=>context.dispatch({type:'add'})}>{context.state.number}</button>
  )
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState, ()=>({number:initialState}));
  return (
    <CounterContext.Provider value={{state, dispatch}}>
      <SubCounter/>
    </CounterContext.Provider>
  )
}
