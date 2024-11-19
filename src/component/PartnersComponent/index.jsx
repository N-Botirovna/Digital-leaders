import Title from "../ui/Title";
import React from "react";
import Navbar from "../navbar";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import HighLight from "../ui/HighLight";
import SubTitle from "../ui/SubTitle";
import PartnerCard from "./PartnerCard";
import img from "../../assets/images/logo/Logo.png";
import { useNavigate } from "react-router-dom";
const images = [
  img, img, img, img, img, img, img, img, img, img, img, img
]

const Partnerspage = () => {
  const navigate = useNavigate();
  const handleCardClick = (index) => {
    navigate(`/partners/${index}`); 
  };
  return (
    <div className="w-full min-h-[100vh]">
      <div className="h-fit bg-radial-custom text-center py-2">
        <Container>
          <Navbar />
          <div className="py-12">
            <Title text={`Our valued Partners`} />
            <Paragraph
              text={`We collaborate with leading organizations and innovators who share our vision of empowering leaders and driving impactful change.`}
              style={`w-1/2`}
            />
          </div>
        </Container>
      </div>
      <Container className={`pt-10`}>
        <HighLight text={"Partners"} />
        <SubTitle
          text={`We’re backed by the best,meet our Partners`}
          style={`w-1/2 mx-auto`}
        />

        <div className="grid grid-cols-6 grid-rows-2 py-14">
          {images.map((img, index) => (
            <div
            key={index}
            onClick={() => handleCardClick(index)} 
            className="cursor-pointer"
          >
            <PartnerCard
              key={index}
              img = {img}
            /> </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partnerspage;
