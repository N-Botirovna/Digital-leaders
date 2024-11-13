import Header from "./Header";
import React from "react";
import PartnerList from "./PartnerList";
import Careers from "./Careers";
import InfoCard from "./InfoCard";
import TopLeaders from "./TopLeaders";
import LatestGrants from "./LatestGrants";
import Testimotionals from "./Testimotionals";
import Events from "./Events";
import FormModal from "../ui/FormModal";
import LeaderSingle from "../LeaderSingle";
//
const HomePages = () => {
  return (
    <>
      <Header />
      <PartnerList/>
      <Careers/>
      <TopLeaders/>
      <LatestGrants/>
      <Testimotionals/>
      <Events/>
      <FormModal />
    <LeaderSingle/>
    </>
  );
};

export default HomePages;
