import React, { Component, useState, useEffect } from 'react'

// 方法名前缀是use并且函数内使用了hook，那就是自定义hook  
function useNumber() {
  let initialState = 0;
  const [number, setNumber] = useState(initialState);
  useEffect(() => {
    setInterval(() => {
      setNumber(number =>number+1);
    }, 1000);
  }, [])
  return [number, setNumber];
}

export function Counter1() {
  let [number, setNumber] = useNumber();
  return (
    <button onClick={()=>setNumber(number+1)}>
      {number}
    </button>
  )
}

export function Counter2() {
  let [number, setNumber] = useNumber();
  return (
    <button onClick={()=>setNumber(number+1)}>
      {number}
    </button>
  )
}