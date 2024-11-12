import EventsPage from "../../component/Events";
import Navbar from "../../component/navbar";
import Container from "../../component/ui/Container";
const Events = () => {
  return (
    <div>
      <Container>
        <Navbar/>
       <EventsPage/>
      </Container>
    </div>
  )
}

export default Events
