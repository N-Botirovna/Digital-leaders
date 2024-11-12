import Navbar from "../../component/navbar";
import PartnersPage from "../../component/Partners";
import Container from "../../component/ui/Container";
const Partners = () => {
  return (
    <div>
      <div className="bg-gradient-to-b  from-[#FFFFFF] via-[#FAF5FF] to-[#FAF5FF]">
     <Container>
      <Navbar/>
      <PartnersPage/>
     </Container>
      </div>
    </div>
  )
}

export default Partners
