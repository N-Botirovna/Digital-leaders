import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import Navbar from "../navbar";
import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";
import EventCard from "./EventCard";

const EventsPage = ({ data }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); 
  const lang = i18n.language; 

  const handleCardClick = (index) => {
    navigate(`/event/${index}`);
  };

  return (
    <div>
      <div className="bg-radial-custom text-center py-2">
        <Container>
          <Navbar />
          <div className="py-10">
            <Title text={t("events")} />
            <Paragraph
              text={t("GrantSupport")}
              style={`w-1/2`}
            />
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {data.map((event, index) => {
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

export default EventsPage;

