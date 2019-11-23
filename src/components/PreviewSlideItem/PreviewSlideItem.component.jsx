import React from 'react'
import { Link } from 'react-router-dom'
import './PreviewSlideItem.styles.scss'

const PreviewSlideItem = ({ id, name, normalDayPrice, holidayPrice, imageUrl }) => {
  return (
    <div className='preview-slide-item'>
      <div
        className='preview-slide-item__photo'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='preview-slide-item__content'>
        <div className='preview-slide-item__info'>
          <h1 className='preview-slide-item__header'>{name}</h1>
          <div className='preview-slide-item__info-content'>
            <div className='preview-slide-item__price'>
              <p>Normal Day Price</p>
              <p>$ {normalDayPrice} TWD / night</p>
            </div>
            <div className='preview-slide-item__price'>
              <p>Holiday Price</p>
              <p>$ {holidayPrice} TWD / night</p>
            </div>
          </div>
          <Link to={`/reservation/${id}`} className='preview-slide-item__more'>
            More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PreviewSlideItem
