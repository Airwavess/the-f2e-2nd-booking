import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './SideBar.styles.scss'
import Logo from '../../assets/img/Component.svg'
import Telephone from '../../assets/img/Telephone.svg'
import Mail from '../../assets/img/Mail.svg'

const SideBar = props => {
  const { pathname } = useLocation()

  let shadow = props.shadow ? 'side-bar--shadow' : ''

  const [mouseHover, setMouseHover] = useState(false)

  let active = props.active || mouseHover ? 'side-bar--active' : ''

  const handleSetMouseHover = (e, value) => {
    setMouseHover(value)
  }

  return (
    <div
      className={`side-bar ${active} ${shadow}`}
      onMouseEnter={e => handleSetMouseHover(e, true)}
      onMouseLeave={e => handleSetMouseHover(e, false)}
    >
      <div className='side-bar__logo'>
        <img src={Logo} alt='logo' />
      </div>
      <ul className='side-bar__menu'>
        <li
          className={
            'side-bar__menu-item ' +
            (pathname === '/' ? 'side-bar__menu-item--active' : '')
          }
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          className={
            'side-bar__menu-item ' +
            (pathname.indexOf('/reservation') !== -1
              ? 'side-bar__menu-item--active'
              : '')
          }
        >
          Room for you
        </li>
        <li className='side-bar__menu-item'>Contact</li>
      </ul>
      <ul className='side-bar__contact'>
        <li className='side-bar__contact-item'>
          <img src={Telephone} alt='telephone icon' />
          0203 504 5555
        </li>
        <li className='side-bar__contact-item'>
          <img src={Mail} alt='mail icon' />
          Hotels@hotels.com
        </li>
        <li className='side-bar__contact-item'>Reservation Opening Hours</li>
        <li className='side-bar__contact-item'>Weekday 8am - 8pm</li>
        <li className='side-bar__contact-item'>Weekend 9am - 6pm</li>
      </ul>
    </div>
  )
}

export default SideBar
