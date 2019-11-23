import React from 'react'
import { useSelector } from 'react-redux'
import './ReservationInfo.styles.scss'
import Wifi from '../../assets/img/Wifi icon.svg'
import Telephone from '../../assets/img/Telephone icon.svg'
import View from '../../assets/img/View icon.svg'
import Breakfast from '../../assets/img/Breakfast icon.svg'
import Conditioner from '../../assets/img/Conditioner icon.svg'
import NoSmoking from '../../assets/img/No smoking icon.svg'
import MiniBar from '../../assets/img/Mini bar icon.svg'
import Refrigerator from '../../assets/img/Refrigerator icon.svg'
import KidFriendly from '../../assets/img/Kid-friendly icon.svg'
import RoomService from '../../assets/img/Room service icon.svg'
import Couch from '../../assets/img/Couch icon.svg'
import PetFriendly from '../../assets/img/Pet-friendly icon.svg'

const ReservationInfo = () => {
  const room = useSelector(state => state.room.room)

  return (
    <div className='reservation-info'>
      <h1 className='reservation-info__room-type'>{room.name}</h1>
      <div className='reservation-info__room-info'>
        <div className='reservation-info__room-description'>
          {room.description}
        </div>
        <div className='reservation-info__room-reservation-info'>
          <div className='reservation-info__room-info-item'>
            <p>Accommodated:</p>
            <p>{room.descriptionShort.GuestMax} person</p>
          </div>
          <div className='reservation-info__room-info-item'>
            <p>Bathroom:</p>
            <p>{room.descriptionShort['Private-Bath']} room</p>
          </div>
          <div className='reservation-info__room-info-item'>
            <p>Bed type:</p>
            <p>{room.descriptionShort.Bed[0]} bed</p>
          </div>
          <div className='reservation-info__room-info-item'>
            <p>Room size:</p>
            <p>
              {room.descriptionShort.Footage} m<sup>2</sup>
            </p>
          </div>
          <div className='reservation-info__room-info-item'>
            <p>NormalDay Price:</p>
            <p>$ {room.normalDayPrice} TWD / night</p>
          </div>
          <div className='reservation-info__room-info-item'>
            <p>Holiday Price:</p>
            <p>$ {room.holidayPrice} TWD / night</p>
          </div>
        </div>
        <div className='reservation-info__room-property-info'>
          <p className='reservation-info__room-property-info-header'>
            Amenities
          </p>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Wi-Fi']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={Wifi} alt='wifi' />
            <p>Wifi</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Television']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={Telephone} alt='Telephone' />
            <p>Telephone</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Great-View']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={View} alt='View' />
            <p>View</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Breakfast']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={Breakfast} alt='Breakfast' />
            <p>Breakfast</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Air-Conditioner']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={Conditioner} alt='Conditioner' />
            <p>Conditioner</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Smoke-Free']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={NoSmoking} alt='NoSmoking' />
            <p>No smoking</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Mini-Bar']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={MiniBar} alt='MiniBar' />
            <p>Mini bar</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Refrigerator']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={Refrigerator} alt='Refrigerator' />
            <p>Refrigerator</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Child-Friendly']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={KidFriendly} alt='KidFriendly' />
            <p>Kid - friendly</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Room-Service']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={RoomService} alt='RoomService' />
            <p>Room service</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Sofa']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={Couch} alt='Couch' />
            <p>Couch</p>
          </div>
          <div
            className={
              `reservation-info__room-info-item ` +
              (room.amenities['Pet-Friendly']
                ? ''
                : 'reservation-info__room-info-item--del')
            }
          >
            <img src={PetFriendly} alt='PetFriendly' />
            <p>Pet - friendly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationInfo
