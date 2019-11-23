import roomTypes from './room.types'

const INITIAL_STATE = {
  rooms: [],
  room: {
    id: '',
    name: '',
    imageUrl: '',
    normalDayPrice: '',
    holidayPrice: 0,
    descriptionShort: {
      GuestMin: 0,
      GuestMax: 0,
      Bed: [''],
      'Private-Bath': 1,
      Footage: 18
    },
    description: '',
    checkInAndOut: {
      checkInEarly: '15:00',
      checkInLate: '19:00',
      checkOut: '10:00'
    },
    amenities: {
      'Wi-Fi': true,
      Breakfast: true,
      'Mini-Bar': true,
      'Room-Service': true,
      Television: true,
      'Air-Conditioner': true,
      Refrigerator: true,
      Sofa: true,
      'Great-View': true,
      'Smoke-Free': true,
      'Child-Friendly': true,
      'Pet-Friendly': true
    }
  },
  roomBookings: [],
  reserveStatus: false
}

const roomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case roomTypes.STORE_ROOMS_DATA:
      return {
        ...state,
        rooms: action.payload
      }
    case roomTypes.STORE_ROOM_DATA:
      return {
        ...state,
        room: action.payload.room[0],
        roomBookings: action.payload.booking
      }
    case roomTypes.STORE_RESERVE_STATUS:
      return {
        ...state,
        reserveStatus: action.payload
      }
    default:
      return state
  }
}

export default roomReducer
