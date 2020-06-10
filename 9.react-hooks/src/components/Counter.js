// 类组件
import React, { Component, useState } from 'react'

export class Counter extends Component {
  state={number:0}
  add= () => {
    this.setState({number:this.state.number+1});
  }
  render() {
    return (
      <>
        <div>
        {this.state.number}
        </div>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}

// 使用react-hooks
export function Counter1() {
  let [number,setNumber] = useState(0);
  // 每一次渲染都是独立的闭包
  function alertNumber() {
    setTimeout(() => {
      alert(number); // 弹出的永远是当前的值
    }, 2000);
  }
  return (
    <>
      <div>
        {number}
      </div>
      <button onClick={()=>setNumber(number+1)}>+</button>
      <button onClick={()=>alertNumber()}>alertNumber</button>
    </>
  )
}
