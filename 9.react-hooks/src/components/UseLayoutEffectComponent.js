import React, { useState, useLayoutEffect, useEffect } from 'react'

export function UseLayoutEffectComponent() {
  const [color, setColor] = useState('red');
  // useLayoutEffect 会等代码执行完再渲染dom，会在所有的dom变更之后在同步调用effect
  useLayoutEffect(() => {
    alert('useLayoutEffect color='+color);
    console.log('useLayoutEffect',color)
  })
  // 执行时dom已经渲染了
  // useEffect(() => {
  //   alert('useEffect color='+color);
  //   console.log('useEffect',color)
  // })
  return (
    <>
      <div id="myDiv" style={{background:color}}>
        改变背景颜色
      </div>
      <button onClick={()=>setColor('blue')}>blue</button>
      <button onClick={()=>setColor('red')}>red</button>
      <button onClick={()=>setColor('yellow')}>yellow</button>
    </>
  )
}