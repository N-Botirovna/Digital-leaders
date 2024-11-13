import React from 'react';
import { Card } from 'antd';

const InfoCard = ({ icon, title, description }) => {
  return (
    <Card className="rounded-3xl shadow-lg bg-[#1E1E2D] text-white p-6" style={{ boxShadow: '0px 10px 6px 0px #1117271F' }}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-[#2E2E3D] p-3 rounded-full flex items-center justify-center w-12 h-12 ">
          {icon}
        </div>
        <h3 className="font-semibold text-lg leading-lg text-left">{title}</h3>
        <p className="text-md leading-md font-normal text-white text-opacity-70">{description}</p>        
      </div>
    </Card>
  );
};

export default InfoCard;


