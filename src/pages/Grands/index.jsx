import GrantsPage from "../../component/Grants"
import Navbar from "../../component/navbar"
import Container from "../../component/ui/Container"

const Grands = () => {
  return (
    <div >
      <div className='bg-gradient-to-t from-[#FAF5FF] from-100%'>
     <Container>
      <Navbar/>
      <GrantsPage/>
     </Container>

      </div>
    </div>
  )
}

export default Grands
