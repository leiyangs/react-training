// PureComponent实现
import React, { Component } from 'react'

export default class PureComponent extends Component {
  isPureComponent = true // 表示是纯组件
  // 传入新的属性对象和状态对象，然后返回一个是否需要新更新的Boolean值
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState); // 属性或状态不相等就更新
  }
}

// 浅比较(只比较第一层) 比较obj1和obj2是否相等，如果相等的话则返回true，不相等返回false
function shallowEqual(obj1, obj2) {
  if(obj1 === obj2) {
    return true;
  }
  if(typeof obj1 !== 'object' || obj1 === null || typeof obj2!== 'object' || obj2 === null) {
    return false;
  }
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if(key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
