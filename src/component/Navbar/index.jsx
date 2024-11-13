import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 120);  
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="py-4 flex items-center justify-between sticky">
      <div className="logo flex items-center gap-4">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h3 className="text-[24px] text-2xl font-semibold leading-7 text-left">Digital Leaders</h3>
      </div>
      <div className="flex space-x-8 ">
        <Link to="/" className="text-gray-700  text-base font-medium leading-5 text-left p-2">
          Home
        </Link>
        <Link to="/grands" className="text-gray-700  text-base font-medium leading-5 text-left p-2">
          Grands
        </Link>
        <Link to="/leaders" className="text-gray-700  text-base font-medium leading-5 text-left p-2">
          Leader Board
        </Link>
        <Link to="/partners" className="text-gray-700  text-base font-medium leading-5 text-left p-2">
          Partners
        </Link>
        <Link to="/events" className="text-gray-700  text-base font-medium leading-5 text-left p-2">
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
