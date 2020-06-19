import React, { createRef, useRef, forwardRef, useImperativeHandle } from "react"
// useRef 前面是use的都是hooks‘
/**
 * useRef用法 和createRef一样
 */
// 每次渲染组件，createRef都会创建新的， useRef创建的永远都是同一个，可以作为性能优化
// function Child() {
//   // let inputRef = createRef(); // ref的dom元素会给current属性
//   let inputRef = useRef();
//   function getFocus() {
//     inputRef.current.focus();
//   }
//   return (
//     <>
//       <input ref={inputRef}/>
//       <button onClick={getFocus}>获取焦点</button>
//     </>
//   )
// }
// export function Parent () {
//   return <Child/>
// }


/**
 * 父组件获取子组件的ref  通过forwardRef 转发ref
 */
// useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值，也就是对父组件可以做的操作做限制
function Child(props, ref) {
  const childRef = useRef();
  useImperativeHandle(ref,()=>{
    return {
      focus() {
        childRef.current.focus();
      },
      change(text) {
        childRef.current.value = text;
      }
    }
  });
  return (
    <>
      {/*  直接使用父组件的ref */}
      {/* <input ref={ref}/> */}
      {/* 用useImperativeHandle限制的ref，也就是子组件创建的ref */}
      <input ref={childRef}/>
    </>
  )
}
let ForwardChild = forwardRef(Child);
export function Parent () {
  const inputRef = useRef();
  function getFocus() {
    console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.change('focus');
  }
  return (
    <>
      <ForwardChild ref={inputRef}/>
      <button onClick={getFocus}>获取焦点</button>
    </>
  )
}
