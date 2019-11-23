import roomTypes from './room.types'

export const getRoomsData = () => ({
  type: roomTypes.GET_ROOMS_DATA
})

export const storeRoomsData = payload => ({
  type: roomTypes.STORE_ROOMS_DATA,
  payload
})

export const getRoomDataById = roomId => ({
  type: roomTypes.GET_ROOM_DATA_BY_ID,
  payload: { roomId }
})

export const storeRoomData = payload => ({
  type: roomTypes.STORE_ROOM_DATA,
  payload
})

export const reserverRoom = payload => ({
  type: roomTypes.RESERVE_ROOM,
  payload
})

export const storeReserveStatus = payload => ({
  type: roomTypes.STORE_RESERVE_STATUS,
  payload
})