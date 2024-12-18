import Container from "../../ui/Container";
import React, { useState } from "react";
import Navbar from "../../navbar";
import FormModal from "../../ui/FormModal";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <div className=" mx-auto rounded-2xl border-green-600">
      <header
        className="bg-gradient-to-br h-screen"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #FFF1BE 28%, #EE87CB 70%, #B060FF 100%)",
        }}
      >
        <Container>
          <Navbar />
          <div className="py-12 text-center md:text-left">
            <h3 className="text-5xl md:text-[100px] leading-[124px] font-bold py-4 font-Inter">
              Empowering Tomorrow&apos;s Leaders Today
            </h3>
            <p className="md:text-2xl font-Inter w-full md:w-2/3 leading-relaxed md:leading-8 text-left mt-4 font-medium  text-[#030712BF]">
              Join a community of changemakers, access exclusive grants, and
              lead impactful projects to shape a better future.
            </p>
            <button
              className="font-Inter text-lg font-medium leading-[24.2px] text-white bg-black px-6 py-3 md:py-4 
    rounded-full mt-10 
    transition duration-300 ease-in-out 
    hover:bg-white hover:text-black hover:shadow-lg"
              onClick={handleModalOpen}
            >
              Become a Leader
            </button>

            <FormModal visible={isModalVisible} onClose={handleModalClose} />
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
