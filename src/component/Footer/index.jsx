import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import logo from "../../assets/images/logo/logo.svg";
import email from "../../assets/images/logo/email.svg";
import phone from "../../assets/images/logo/phone.svg";
import telegram from "../../assets/images/logo/telegram.svg";
import facebook from "../../assets/images/logo/facebook.svg";
import twitter from "../../assets/images/logo/facebook.svg";
import instagram from "../../assets/images/logo/instagram.svg";

export const Footer = () => {
  return (
    <div
      className="p-1 w-full"
      style={{
        backgroundImage:
          "linear-gradient(145deg, #FFF1BE 28%, #EE87CB 70%, #B060FF 100%)",
      }}
    >
      <div className="py-16 bg-white bg-opacity-70 rounded-lg">
        <Container className="flex items-center justify-between">
          <div className="k">
            <div className="logo flex items-center gap-4">
              <img className="w-12 h-12" src={logo} alt="logo" />
              <h3 className="text-[24px] font-semibold">Digital Leaders</h3>
            </div>

            <p className="w-1/2 text-[13px] mt-4">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex w-1/3  gap-6 justify-between text-[16px] font-semibold">
            <div className="links flex flex-col gap-[8px] ">
              <p className="text-[#4B5563]">Product</p>
              <Link to="/">Grands</Link>
              <Link to="/">Leader Board</Link>
              <Link to="/">Partners</Link>
              <Link to="/">Events</Link>
            </div>
            <div className="contacts flex flex-col gap-[8px]">
              <p className="text-[#4B5563]">Contact</p>
              <a href="#" className="flex items-center gap-2">
                <img src={phone} />
                +998(55)511-44-00
              </a>
              <a href="#" className="flex items-center gap-2">
                <img src={email} /> hello@digitalleaders.io
              </a>
            </div>
          </div>
          
        </Container>
        <Container>
          <div className="flex items-center justify-between pt-20" >
            <p className="text-sm font-normal leading-4 text-left">© 2024 Raqamli Dunyo. All rights reserved.</p>
            <div className="flex space-x-12">
                <a href="#"><img src={telegram} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
            </div>
          </div>
        </Container>
      </div>


    </div>
  );
};
