import React from "react";
import { Card } from "antd";
const EventCard = ({ title, date, time, description, imageUrl }) => {
  console.log(imageUrl);
  console.log(time);
    return (
      <Card hoverable className="transition-shadow duration-300 hover:shadow-lg" 
      bodyStyle={{padding:0}}>
        <div >
          <img className=" h-[150px] w-full mb-3 bg-gray-100 " src={imageUrl}/> 
          <div className="text-gray-400 text-sm mb-2 px-4 ">
            <span>{date}</span> • <span>{time}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 px-4">{title}</h3>
          <p className="text-gray-500 text-sm px-4 pb-2">{description}</p>
        </div>
      </Card>
    );
  };
  export default EventCard