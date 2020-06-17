import React, { Component, useState, useEffect } from 'react'

// useEffext
// 类组件写法
// export class Counter extends Component {
//   state = {number:0}
//   componentDidMount() {
//     document.title = `你一共点击了${this.state.number}次`
//   }
//   componentDidUpdate() {
//     document.title = `你一共点击了${this.state.number}次`
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.number}</p>
//         <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
//       </div>
//     )
//   }
// }

// 函数组件写法
// export function Counter() {
//   let [number, setNumber] = useState(0);
//   // effect在每次渲染完成之后执行
//   useEffect(() => {
//     document.title = `你一共点击了${number}次`
//   }, [number])
//   return (
//     <>
//       <p>{number}</p>
//       <button onClick={()=>setNumber(number+1)}>+</button>
//     </>
//   )
// }

export function Counter() {
  let [number, setNumber] = useState(0);
  // effect在每次渲染完成之后执行
  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(number=>number+1);
    }, 1000);
    // 内置一个return 每次会执行 清除上一个effect
    // return (()=>{
    //   clearInterval(timer)
    // })
  },[]) //会监控依赖每次的变化，不依赖的话不执行,也就是后面不会有新的定时器
  return (
    <>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
    </>
  )
}
