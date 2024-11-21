import Title from "../ui/Title.jsx";
import React from "react";
import EventCard from "../Events/EventCard";
import Navbar from "../navbar";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GrantsPage = ({ data }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); 
  const lang = i18n.language; 

  if (!data?.data || data.data.length === 0) {
    return <p className="text-center">No grants available at the moment.</p>;
  }

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
            <Title text={"Available Grants"} />
            <Paragraph
              text={
                "Discover exclusive grant opportunities designed to support innovative projects and empower leaders."
              }
            />
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {data?.data && data.data.map((event, index) => {
            const titleKey =
              lang === "en" ? "titleEn" : lang === "ru" ? "titleRu" : "titleUz";
            const descriptionKey =
              lang === "en"
                ? "shortDescriptionEn"
                : lang === "ru"
                  ? "shortDescriptionRu"
                  : "shortDescriptionUz";

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="cursor-pointer"
              >
                <EventCard
                  e={event[titleKey]}
                  date={new Date(event.createdAt).toLocaleDateString()}
                  time={new Date(event.createdAt).toLocaleTimeString()}
                  description={event[descriptionKey]}
                  imageUrl={event.photoUrl}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default GrantsPage;
