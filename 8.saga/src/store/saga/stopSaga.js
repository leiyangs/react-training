import { takeEvery } from '../../redux-saga/effects'
import * as types from '../action-types'
function* aa() {
  console.log(1);
}
export default function* () {
  yield takeEvery(types.STOP, aa)
}