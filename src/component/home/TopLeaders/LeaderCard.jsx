import React from 'react';

const LeaderCard = ({ image, name, position }) => {
  return (
    <div className="max-w-xs  p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-2xl"
      />
      <div className="mt-4">
        <h2 className="text-2xl font-semibold leading-7 text-left">{name}</h2>
        <p className="text-base font-normal text-left leading-md">{position}</p>
      </div>
    </div>
  );
};

export default LeaderCard;
