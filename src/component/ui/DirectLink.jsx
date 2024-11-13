import React from "react";
import icon from "../../assets/images/icon/arrowRight.svg";

const DirectLink = ({ text, style }) => {
  return (
    <div className={`flex mt-8 justify-center ${style}`}>
      <div className="flex items-center mx-auto text-[#0A0A0AB2] font-semibold text-sm leading-sm text-opacity-70 cursor-pointer gap-1">
        <span>{text}</span>
        <img src={icon} alt="->" />
      </div>
    </div>
  );
};

export default DirectLink;
