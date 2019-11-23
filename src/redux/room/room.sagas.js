import { all, call, takeEvery, put } from 'redux-saga/effects'
import { apiRoomGetAll, apiRoomGet, apiRoomPost } from '../../api/room.api'
import roomTypes from './room.types'
import { storeRoomsData, storeRoomData, storeReserveStatus } from './room.actions'

function* getRoomsDataBegin() {
  const res = yield apiRoomGetAll()
  yield put(storeRoomsData(res.data.items))
}

function* getRoomsData() {
  yield takeEvery(roomTypes.GET_ROOMS_DATA, getRoomsDataBegin)
}

function* getRoomDataByIdBegin(action) {
  const res = yield apiRoomGet(action.payload.roomId)
  yield put(storeRoomData(res.data))
}

function* getRoomDataById() {
  yield takeEvery(roomTypes.GET_ROOM_DATA_BY_ID, getRoomDataByIdBegin)
}

function* reserverRoomBegin(action) {
  try {
    let res = yield apiRoomPost(action.payload.roomId, action.payload.formData)
    yield put(storeReserveStatus(res.data.success))
    yield getRoomDataByIdBegin(action)
  } catch (err) {
    console.log(err)
  }
}

function* reserverRoom() {
  yield takeEvery(roomTypes.RESERVE_ROOM, reserverRoomBegin)
}

export default function* roomSaga() {
  yield all([call(getRoomsData), call(getRoomDataById), call(reserverRoom)])
}
