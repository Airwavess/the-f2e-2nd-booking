import { combineReducers } from 'redux'

import roomReducer from './room/room.reducer'

const rootReducer = combineReducers({ room: roomReducer })

export default rootReducer
