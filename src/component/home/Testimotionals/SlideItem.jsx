import React from "react";

const SlideItem = ({ text, name, role, avatar }) => {
  return (
    <div className="border rounded-lg p-2 shadow-md flex flex-col gap-4 bg-white">
    <p className="text-gray-600 font-Inter font-normal text-[16px] leading-[24px]">"{text}"</p>
    <div className="flex items-center gap-4 mt-auto">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
  );
};

export default SlideItem;
