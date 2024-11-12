import EventsPage from "../../component/Events";
import Navbar from "../../component/navbar";
import Container from "../../component/ui/Container";
const Events = () => {
  return (
    <div>
        <div className='bg-gradient-to-t from-[#FAF5FF] from-100%'>
      <Container>
        <Navbar/>
       <EventsPage/>
      </Container>
        </div>

    </div>
  )
}

export default Events
