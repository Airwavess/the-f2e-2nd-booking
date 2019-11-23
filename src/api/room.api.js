import axios from 'axios'

const cors = 'https://cors-anywhere.herokuapp.com/' // use cors-anywhere to fetch api data

const API_TOKEN =
  'Bearer iBVlMbamqOhvKGDj71MV46lAJ7XEn48YFB0jPDsmB5ByGUnRqasWqczW22bY'

const headers = { Authorization: API_TOKEN, Accept: 'application/json' }

const roomsRequest = axios.create({
  baseURL: `${cors}https://challenge.thef2e.com/api/thef2e2019/stage6/rooms`,
  headers: headers
})

const roomRequest = axios.create({
  baseURL: `${cors}https://challenge.thef2e.com/api/thef2e2019/stage6/room`,
  headers: headers
})

export const apiRoomGetAll = () => roomsRequest.get('/')

export const apiRoomGet = roomId => roomRequest.get(`/${roomId}`)

export const apiRoomPost = (roomId, formData) =>
  roomRequest.post(`/${roomId}`, { ...formData })
