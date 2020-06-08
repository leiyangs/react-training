import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from '../redux-saga'
import saga from './saga/counterSaga'
let sagaMiddleware = createSagaMiddleware();
let store = applyMiddleware(sagaMiddleware)(createStore)(reducers);
sagaMiddleware.run(saga);
window.store = store;
export default store;