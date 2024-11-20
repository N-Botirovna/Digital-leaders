import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icon/arrowRight.svg";

const DirectLink = ({ text, style, route }) => {
  return (
    <div className={`flex mt-8 justify-center ${style}`}>
      <Link to={`/${route}`} className="flex items-center mx-auto text-[#0A0A0AB2] font-semibold text-sm leading-sm text-opacity-70 cursor-pointer gap-1">
        <span>{text}</span>
        <img src={icon} alt="->" />
      </Link>
    </div>
  );
};

export default DirectLink;
