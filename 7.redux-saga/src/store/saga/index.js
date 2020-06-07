import { all } from 'redux-saga/effects'
import loginSaga from './loginSaga'
import raceSaga from './raceSaga'
export default function* rootSaga() {
  yield all([
    loginSaga(),
    raceSaga()
  ])
}