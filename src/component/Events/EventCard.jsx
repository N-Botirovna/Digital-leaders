import React from "react";
import { Card } from "antd";
const EventCard = ({ title, date, time, description }) => {
    return (
      <Card hoverable className="transition-shadow duration-300 hover:shadow-lg" 
      bodyStyle={{padding:0}}>
        <div>
          <div className=" h-[150px] mb-3 bg-gray-100 "> </div>
          <div className="text-gray-400 text-sm mb-2 px-4">
            <span>{date}</span> • <span>{time}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 px-4">{title}</h3>
          <p className="text-gray-500 text-sm px-4">{description}</p>
        </div>
      </Card>
    );
  };
  export default EventCard