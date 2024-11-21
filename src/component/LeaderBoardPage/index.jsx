import React from "react";
import Navbar from "../navbar";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import LeaderTable from "./LeaderTable";

const LeaderBoardPage = () => {
  return (
    <Container>
      <div className="bg-radial-custom ">
        <Navbar />
        <div className="py-12">
          <Title text="Top Achievers" />
          <Paragraph text="Discover the outstanding leaders who are making a significant impact in our community." style={"w-5/12 py-3"} />
        </div>
      </div>
      <div className="py-8">
      <LeaderTable/>
      </div>
    </Container>
  );
};

export default LeaderBoardPage;
