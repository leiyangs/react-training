import { all } from '../../redux-saga/effects'
import counterSaga from './counterSaga'
import stopSaga from './stopSaga'

export default function* () {
  yield all([
    counterSaga(),
    stopSaga()
  ])
}
