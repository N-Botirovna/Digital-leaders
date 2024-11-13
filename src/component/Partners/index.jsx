import HeaderPartners from "./HeaderPartners";
import HighLight from "../ui/HighLight";
import Container from "../ui/Container";
import SubTitle from "../ui/subTitle";
import PartnerCard from "./PartnerCard";
import logo from "/src/assets/images/logo/Logo.png";

const partners= Array(12).fill(null);
const PartnersPage = () => {
  return (
    <div>
      <HeaderPartners />
      <HighLight text="Partners" style="mt-32"/>
      <SubTitle text="We're backed by the best, meet our Partners"/>
        <Container>
        <div className="grid grid-cols-6 my-22">
        {partners.map((_, index) => (
              <PartnerCard key={index} logo={logo} partnerId={index}/>
            ))}
      </div>

        </Container>
    </div>
  );
};

export default PartnersPage;
