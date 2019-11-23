import React from 'react'
import './ReservationSuccess.styles.scss'
import Success from '../../assets/img/Confirm icon.svg'

const ReservationSuccess = () => {
  return (
    <div className='reservation-success'>
      <div className='reservation-success__success-group'>
        <img src={Success} alt='success' />
        <h1>Great !</h1>
        <p>
          The reserved has been finished. We hope to see you soon. Good trip !
        </p>
      </div>
      <button className='reservation-success__button'>You’ve reserved !</button>
    </div>
  )
}

export default ReservationSuccess
