import React from 'react'
import { useSelector } from 'react-redux'
import './PreviewSlide.styles.scss'
import PreviewSlideItem from '../PreviewSlideItem/PreviewSlideItem.component'

const PreviewSlide = () => {
  const rooms = useSelector(state => state.room.rooms)

  return (
    <div className='preview-slide'>
      {rooms.map(room => (
        <PreviewSlideItem key={room.id} {...room} />
      ))}
    </div>
  )
}

export default PreviewSlide
