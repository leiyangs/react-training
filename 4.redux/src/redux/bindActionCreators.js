// 实现bindActionCreators
export default function bindActionCreators(actionCreators, dispatch) {
  if(typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    if (actionCreators.hasOwnProperty(key)) {
      const actionCreator = actionCreators[key];
      if(typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
  }
  return boundActionCreators;
}

function bindActionCreator(actionCreators, dispatch) {
  return function() {
    return dispatch(actionCreators.apply(this, arguments));
  }
}