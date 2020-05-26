// 有现成的库
// logger
// let logger = function(store) {
//   return function(dispatch) {
//     return function(action) {
//       console.log(store.getState(),'老状态');
//       dispatch(action);
//       console.log(store.getState(), '新状态');
//     }
//   }
// }
// logger简写
let logger = store => dispatch => action => {
  console.log(store.getState(),'老状态');
  dispatch(action);
  console.log(store.getState(), '新状态');
}
export default logger;