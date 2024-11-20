import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import FormModal from "../ui/FormModal";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import i18n from "../../i18n"; 

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng") || "uz");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage); 
    }
  }, []);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = ({ key }) => {
    setLanguage(key);
    i18n.changeLanguage(key); 
    localStorage.setItem("i18nextLng", key); 
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/grands", label: "Grands" },
    { to: "/leaders", label: "Leader Board" },
    { to: "/partners", label: "Partners" },
    { to: "/events", label: "Events" },
  ];

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="en" icon={<img src="https://flagcdn.com/w40/us.png" alt="English" width="20" />}>
        English
      </Menu.Item>
      <Menu.Item key="ru" icon={<img src="https://flagcdn.com/w40/ru.png" alt="Russian" width="20" />}>
        Русский
      </Menu.Item>
      <Menu.Item key="uz" icon={<img src="https://flagcdn.com/w40/uz.png" alt="Uzbek" width="20" />}>
        O‘zbek
      </Menu.Item>
    </Menu>
  );

  const currentLangIcon = {
    en: "https://flagcdn.com/w40/us.png",
    ru: "https://flagcdn.com/w40/ru.png",
    uz: "https://flagcdn.com/w40/uz.png",
  }[language];

  return (
    <nav className={`py-4 flex items-center justify-between font-Inter`}>
      <Link to={"/"} className="logo flex items-center gap-4">
        <img className="w-12 h-12" src={logo} alt="logo" />
        <h3 className="text-[24px] text-2xl font-semibold leading-7 text-left">
          Digital Leaders
        </h3>
      </Link>
      <div className="flex space-x-3 items-center">
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button className="flex items-center px-4 py-2 text-sm font-medium border-none rounded-md">
            <img src={currentLangIcon} alt={language} width="20" style={{ marginRight: 8 }} />
            <DownOutlined />
          </Button>
        </Dropdown>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-[#030712] text-base font-medium leading-5 text-left px-4 py-3 
              rounded-md transition duration-300 ease-in-out
              hover:bg-gray-400 hover:bg-opacity-10  hover:scale-105"
          >
            {link.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={handleModalOpen}
          className="text-[#030712] text-base font-medium leading-5 text-left px-4 py-3 
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
