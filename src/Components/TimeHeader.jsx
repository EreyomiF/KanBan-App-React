import React, { useState } from "react";
import ImageComponent from './ImageComponent';  
import Collection from '../assets/icons/collection-fill.svg';
import Bell from '../assets/icons/bell-fill.svg';
import Geo from '../assets/icons/geo-alt-fill.svg';

function TimeHeader() {
    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();
  
    const [time, setTime] = useState(now);
  
    function updateTime() {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }
  
  return (
    <div className="p-2 mb-4 rounded-lg mt-20"> 
      <div className="flex flex-row-reverse gap-4 items-center"> 
        <div className="flex items-center">
          <ImageComponent src={Geo} alt="Image 01" className="w-4 h-4" />
          <span className="ml-2 text-sm">Lagos, NG</span>
        </div>
        <div className="flex items-center">
          <ImageComponent src={Bell} alt="Image 02" className="w-4 h-4" />
          <span className="ml-2 text-sm">{time}</span>
        </div>
        <div className="flex items-center">
          <ImageComponent src={Collection} alt="Image 03" className="w-4 h-4" />
          <span className="ml-2 text-sm">Due date</span>
        </div>
      </div>
    </div>
  );
}

export default TimeHeader;
