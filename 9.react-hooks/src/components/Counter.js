// 类组件
import React, { Component, useState, memo } from 'react'

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
  let [number,setNumber] = useState(0);// number 和setNumber是解构出来随便起的名字
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

// 把组件传入memo后，新组件就有一个功能，如果属性不变就不重新渲染
// usememo使用备忘录
function SubCounter({onClick,data}) {
  console.log('subcounter')
  return(
  <button onClick={onClick}>{data.number}</button>
  )
}
SubCounter = memo(SubCounter);
export function Counter2() {
  const [name, setName] = useState('计数器');
  const [number, setNumber] = useState(0);
  const data = {number};
  const addClick = () => {
    setNumber(number=>number+1);
  }
  console.log('conunter2')
  return(
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <SubCounter data={data} onClick={addClick}></SubCounter>
    </div>
  )
}
