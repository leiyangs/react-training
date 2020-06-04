import * as types from '../action-types'
import { push } from 'connected-react-router' // 跳转页面的方法
export default {
  increment() {
    return {type: types.INCREMENT}
  },
  decrement() {
    return {type: types.DECREMENT}
  },
  goHome() {
    return push('/'); // 会返回一个action直接派发
  }
}