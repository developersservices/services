import React, { useEffect, useState } from 'react';
import './Style.css';
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  const [offerMessage, setOfferMessage] = useState('Web Develop & Designs  Services! 62% off');
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const checkSpecialDays = () => {
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      if (month === 3 && date >= 10 && date <= 30) {
        setOfferMessage("Ramadan Mubarak! Enjoy 75% off on Web Development Services!");
      } else if (month === 6 && date === 17) { 
        setOfferMessage("Eid al-Adha Special! Get 70% off on Web Development Services!");
      } 
      else if (month === 12 && date === 25) {
        setOfferMessage("Merry Christmas! Enjoy 70% off on Web Development Services!");
      } else if (month === 11 && date === 29) {
        setOfferMessage("Black Friday Special! Grab 80% off on Web Development Services!");
      } else if (month === 7 && date === 4) {
        setOfferMessage("Independence Day Sale! 65% off on Web Development Services!");
      } else {
        setOfferMessage("Web Develop & Designs Services! 62% off");
      }
    };
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    checkSpecialDays();
    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <div className="support">
      <span><BiSolidOffer className='icon' /> {offerMessage}</span>
    </div>
  );
};

export default Banner;
