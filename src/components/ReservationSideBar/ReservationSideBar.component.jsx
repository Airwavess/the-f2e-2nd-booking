import React, { useState } from 'react'
import './ReservationSideBar.styles.scss'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../SideBar/SideBar.component'

const ReservationSideBar = () => {
  const [showSideBar, toggleSideBar] = useState(false)

  const handleToggleSideBar = () => {
    toggleSideBar(showSideBar => !showSideBar)
  }

  return (
    <div className='reservation-side-bar' onMouseOver={handleToggleSideBar}>
      <h1 className='reservation-side-bar__logo'>H</h1>
      <FaBars />
      <Sidebar active={showSideBar} shadow />
    </div>
  )
}

export default ReservationSideBar
