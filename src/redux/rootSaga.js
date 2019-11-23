import { all, call } from 'redux-saga/effects'
import roomSaga from './room/room.sagas'

export default function* rootSaga() {
  yield all([call(roomSaga)])
}
