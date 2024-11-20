import Paragraph from "../../ui/Paragraph";
import React from "react";
import Container from "../../ui/Container";
import HighLight from "../../ui/HighLight";
import SubTitle from "../../ui/subTitle";
import DirectLink from "../../ui/DirectLink";
import InfoCard from "../InfoCard";

const Careers = () => {
  return (
    <div className="py-6">
      <Container>
        <div className="py-4 relative my-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[1.3px] bg-gradient-to-r from-white via-[#B060FF] to-white "></div>
          <HighLight text={"Benefits"} />
          <SubTitle text={"Why Join Us"} />
          <Paragraph
            style={"w-1/2 py-2"}
            text={
              "Unlock unparalleled opportunities for funding, networking, and personal growth that can elevate your leadership journey."
            }
          />
          <DirectLink text={"Learn More"} />
        </div>
        <div className="flex pt-4 pb-8 justify-between items-center space-x-3">
          <InfoCard
            title={"title"}
            icon={"i"}
            description={
              "Access exclusive grants designed to support innovative projects and initiatives, helping you turn ideas into reality."
            }
          />
          <InfoCard
            title={"title"}
            icon={"ic"}
            description={
              "Access exclusive grants designed to support innovative projects and initiatives, helping you turn ideas into reality."
            }
          />
          <InfoCard
            title={"title"}
            icon={"ic"}
            description={
              "Access exclusive grants designed to support innovative projects and initiatives, helping you turn ideas into reality."
            }
          />
          <InfoCard
            title={"title"}
            icon={"ic"}
            description={
              "Access exclusive grants designed to support innovative projects and initiatives, helping you turn ideas into reality."
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Careers;
