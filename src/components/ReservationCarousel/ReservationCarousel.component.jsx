import React from 'react'
import { useSelector } from 'react-redux'
import './ReservationCarousel.styles.scss'
import ArrowLeft from '../../assets/img/ArrowLeft.svg'
import ArrowRight from '../../assets/img/ArrowRight.svg'

const ReservationCarousel = () => {
  const room = useSelector(state => state.room.room)

  return (
    <div className='reservation-carousel'>
      <div className='reservation-carousel__controller'>
        <button>
          <img src={ArrowLeft} alt='ArrowLeft' />
        </button>
        <button>
          <img src={ArrowRight} alt='ArrowRight' />
        </button>
      </div>
      <div className='reservation-carousel__image-group'>
        <div
          className='reservation-carousel__image'
          style={{
            backgroundImage: `url(${room.imageUrl})`
          }}
        ></div>
      </div>
    </div>
  )
}

export default ReservationCarousel
