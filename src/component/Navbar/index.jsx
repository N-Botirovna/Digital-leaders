import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import FormModal from "../ui/FormModal";

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/grands", label: "Grands" },
    { to: "/leaders", label: "Leader Board" },
    { to: "/partners", label: "Partners" },
    { to: "/events", label: "Events" },
  ];

  return (
    <nav className={`py-4 flex items-center justify-between font-Inter`}>
      <Link to={"/"} className="logo flex items-center gap-4">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h3 className="text-[24px] text-2xl font-semibold leading-7 text-left">
          Digital Leaders
        </h3>
      </Link>
      <div className="flex space-x-3">
        {links.map((link) => (
          <Link
          key={link.to}
          to={link.to}
          className="text-[#030712  ] text-base font-medium leading-5 text-left px-4 py-3 
            rounded-md transition duration-300 ease-in-out
            hover:bg-gray-400 hover:bg-opacity-10  hover:scale-105"
        >
          {link.label}
        </Link>
        
        ))}
        <button
          type="link"
          onClick={handleModalOpen}
          className="text-[#030712  ] text-base font-medium leading-5 text-left px-4 py-3 
          rounded-md transition duration-300 ease-in-out
          hover:bg-gray-100 hover:bg-opacity-30  hover:scale-105"
        >
          Become a Leader
        </button>
      </div>

      <FormModal visible={isModalVisible} onClose={handleModalClose} />
    </nav>
  );
};

export default Navbar;



