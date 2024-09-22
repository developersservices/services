import React from 'react'
import './Style.css'
import useDate from '../hook/Date'

const Banner = () => {
    const {date, time} = useDate();
  return (
    <>
      <div className="support">
        <span>{date}</span> <span>{time}</span>
      </div>
    </>
  )
}

export default Banner
