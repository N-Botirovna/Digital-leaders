import Title from '../ui/Title.jsx';
import React from 'react';
import EventCard from '../Events/EventCard';
import Navbar from '../navbar';
import Container from '../ui/Container';
import Paragraph from '../ui/Paragraph';
import { useNavigate } from 'react-router-dom';

const eventData = Array(12).fill({
  title: "Setting Up Post Schedules with EventBridge Scheduler & CDK",
  date: "17 Nov, 2024",
  time: "3 min read",
  description:
    "Discover how AWS EventBridge Scheduler makes it easier to schedule posts and streamline workflows, empowering leaders to be more productive in the modern era.",
});

const GrantsPage = () => {
  const navigate = useNavigate(); 

  const handleCardClick = (index) => {
    navigate(`/event/${index}`); 
  };
  return (
    <div>
      {/* Header Section */}
      <div className="bg-radial-custom text-center py-2">
        <Container>
          <Navbar />
          <div className="py-8">
          <Title text={"Available Grants"}/>
          <Paragraph text={"Discover exclusive grant opportunities designed to support innovative projects and empower leaders."}/>
          </div>
          
        </Container>
      </div>

      {/* Events Section */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-12">
          {eventData.map((event, index) => (
            <div
            key={index}
            onClick={() => handleCardClick(index)} 
            className="cursor-pointer"
          >
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              description={event.description}
            /> </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GrantsPage;
