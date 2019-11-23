import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './HomePage.styles.scss'
import SideBar from '../../components/SideBar/SideBar.component'
import PreviewHotel from '../../components/PreviewHotel/PreviewHotel.component'
import { getRoomsData } from '../../redux/room/room.actions'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRoomsData())
  }, [dispatch])

  return (
    <div className='home-page'>
      <SideBar active />
      <PreviewHotel />
    </div>
  )
}

export default HomePage
