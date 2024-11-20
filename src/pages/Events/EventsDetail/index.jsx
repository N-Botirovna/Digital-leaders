import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../component/navbar";
import Container from "../../../component/ui/Container";
import Title from "../../../component/ui/Title"
import Paragraph from "../../../component/ui/Paragraph"


const EventDetailPage = () => {
    const {eventId} = useParams()

  return (
    <div>
      {/* Header Section */}
      <div className="bg-radial-custom pb-16">
        <Container>
          <Navbar />
          <div className="text-center py-8 ">
            
            <Title text={`Setting Up Post Schedules with EventBridge Scheduler & CDK`} />
            <Paragraph text={`Published on 14 Sep, 2024`}/>
          </div>
        </Container>
      </div>

      {/* Content Section */}
      <Container>
        <div className="py-16 w-2/3 mx-auto">
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-gray-100 rounded-lg mb-8"></div>

          {/* Article Content */}
          <div className="text-gray-700 space-y-6 ">
            <p className="text-gray-500">
              Discover tips, best practices, and in-depth articles to help you
              optimize your work, streamline tasks, and stay ahead in your
              productivity journey.
            </p>
            <p>
              As the world’s leading in-person car auction enterprise, Mecum
              Auction Company has sold some of the most famous vehicles in the
              world. And while their digital platform only rapidly evolved over
              the years, it was hitting its limit, hindering their ability to
              scale its usage quickly. With the help of digital agency
              Xentourage/Xebia, Mecum adopted a new, composable stack—giving
              them confidence that their website would be fast, performant, and
              reliable.
            </p>
            <p>
              The Mecum ecosystem manages the auction process on a massive
              scale, especially during their two-day auction events held twice a
              year. The inventory includes all mission-critical engines from
              cars to trucks—spread across 275,000 individually listing pages or
              “lots,” with millions of updates made daily, attracting over 120M
              visitors annually.
            </p>
            <p>
              The new architecture designed the entire digital platform so that
              it would enable their team to automatically generate lot pages,
              update and create content without the help of IT, and provide fast
              digital experiences for their end users.
            </p>

            <h2 className="text-2xl font-semibold">
              The solutions that make up the architecture
            </h2>
            <p>
              Architecture.com designed an architecture that would scale and
              grow with Mecum while delivering speed and performance. The
              solution allowed the business team to keep focus on the heart of
              their game-time team, while crafting a composable layer that would
              deliver the flexibility and user experience the team required.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventDetailPage;
