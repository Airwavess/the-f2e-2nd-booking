import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import './ReservationForm.styles.scss'
import './react_dates_overrides.scss'
import { reserverRoom } from '../../redux/room/room.actions'

const enumerateDaysBetweenDates = function(startDate, endDate) {
  const dates = [startDate.clone().format('YYYY-MM-DD')]

  const currDate = startDate.clone()
  const lastDate = endDate.clone()

  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    dates.push(currDate.clone().format('YYYY-MM-DD'))
  }

  return dates
}

function checkForBlockedDates(startDate, endDate, blockDates) {
  const currDate = startDate.clone()
  const lastDate = endDate.clone()

  while (currDate.add(1, 'days').diff(lastDate) < 0) {
    const isBlock = blockDates.some(blockDate =>
      currDate.isSame(blockDate, 'day')
    )
    if (isBlock) return true
  }

  return false
}

const ReservationForm = () => {
  const dispatch = useDispatch()
  const room = useSelector(state => state.room.room)
  const roomBookings = useSelector(state => state.room.roomBookings).map(
    booking => booking.date
  )

  // check in and out data range picker
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)
  const handleDatesChange = ({ startDate, endDate }) => {
    if (startDate && !isBlock(startDate)) {
      setStartDate(startDate)
    }
    if (
      endDate &&
      !isBlock(endDate) &&
      !checkForBlockedDates(startDate, endDate, roomBookings)
    ) {
      setEndDate(endDate)
    }
  }

  const isBlock = day => {
    return roomBookings.some(bookingDate =>
      day
        .clone()
        .add(1, 'days')
        .isSame(bookingDate, 'day')
    )
  }

  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    date: []
  })
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (startDate && endDate) {
      setFormData(formData => ({
        ...formData,
        date: enumerateDaysBetweenDates(startDate, endDate)
      }))
    }
  }, [startDate, endDate])

  useEffect(() => {
    setTotalPrice(formData.date.length * room.normalDayPrice)
  }, [formData.date, room.normalDayPrice])

  const handleSetFormData = (e, index) => {
    setFormData({
      ...formData,
      [index]: e.target.value
    })
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    console.log(formData)
    dispatch(reserverRoom({ formData, roomId: room.id }))
  }

  return (
    <div className='reservation-form'>
      <form
        className='reservation-form__form-group'
        onSubmit={handleSubmitForm}
      >
        <div className='reservation-form__input-group'>
          <p>Name</p>
          <input
            type='text'
            value={formData.name}
            onChange={e => handleSetFormData(e, 'name')}
            required
          />
        </div>
        <div className='reservation-form__input-group'>
          <p>Phone number</p>
          <input
            type='text'
            maxLength='10'
            value={formData.tel}
            onChange={e => handleSetFormData(e, 'tel')}
            required
          />
        </div>
        <div className='reservation-form__input-group'>
          <p>Check-in / Check-out time</p>
          <DateRangePicker
            numberOfMonths={1}
            startDatePlaceholderText=''
            startDate={startDate}
            startDateId='data-start-date'
            endDatePlaceholderText=''
            endDate={endDate}
            endDateId='data-end-date'
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            displayFormat='MMM D'
            customArrowIcon='-'
            isDayBlocked={isBlock}
            isOutsideRange={day => day.isBefore(moment().add(1, 'day'), 'day')}
            required
          />
        </div>
        <div className='reservation-form__total-price'>
          <div className='reservation-form__total-price-title'>
            <p>total</p>
            <p>
              $ {room.normalDayPrice} x {formData.date.length} nights
            </p>
          </div>
          <h1>$ {totalPrice}</h1>
        </div>
        <div className='reservation-form__check-in-out'>
          <div className='reservation-form__text'>
            <p>Check-in time:</p>
            <p>
              {room.checkInAndOut.checkInEarly} ~{' '}
              {room.checkInAndOut.checkInLate}
            </p>
          </div>
          <div className='reservation-form__text'>
            <p>Check-out time:</p>
            <p>{room.checkInAndOut.checkOut}</p>
          </div>
        </div>
        <button type='submit' className='reservation-form__button'>
          Reserve
        </button>
      </form>
    </div>
  )
}

export default ReservationForm
