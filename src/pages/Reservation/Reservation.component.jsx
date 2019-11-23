import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Reservation.styles.scss'
import ReservationSideBar from '../../components/ReservationSideBar/ReservationSideBar.component'
import ReservationCarousel from '../../components/ReservationCarousel/ReservationCarousel.component'
import ReservationInfo from '../../components/ReservationInfo/ReservationInfo.component'
import ReservationForm from '../../components/ReservationForm/ReservationForm.component'
import ReservationSuccess from '../../components/ReservationSuccess/ReservationSuccess.component'
import { getRoomDataById } from '../../redux/room/room.actions'

const Reservation = () => {
  const dispatch = useDispatch()
  const reserveStatus = useSelector(state => state.room.reserveStatus)

  const { roomId } = useParams()

  useEffect(() => {
    dispatch(getRoomDataById(roomId))
  }, [roomId, dispatch])

  return (
    <div className='reservation'>
      <ReservationSideBar />
      <div className='reservation__content'>
        <div className='reservation__top'>
          <ReservationCarousel />
          <div className='reservation__form-group'>
            {reserveStatus ? <ReservationSuccess /> : <ReservationForm />}
          </div>
        </div>
        <ReservationInfo />
      </div>
    </div>
  )
}

export default Reservation
