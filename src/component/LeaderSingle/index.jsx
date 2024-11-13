import Container from "../../component/ui/Container";
import React from "react";
import Navbar from "../navbar";
import SubTitle from "../ui/subTitle";
import Paragraph from "../ui/Paragraph";

const LeaderSingle = () => {
  return (
    <div>
      <Container>
        <div className="h-1/3 bg-radial-custom">
          <Navbar />
        </div>
        <SubTitle text={"Riley O'omore"} />
        <Paragraph text={"Former PM for Airtable, Medium, Ghost, and Lumi."} />
        <div className="flex justify-between items-center">
          <p>About Riley O'Moore</p>
          <div className="flex flex-col gap-3 w-1/2">
            <p>
              As the world’s leading in-person car auction enterprise, Mecum
              Auction Company has sold some of the most famous vehicles in the
              world. And while their digital platform had capably evolved over
              the years, it was hitting its limit, hindering their ability to
              create listings quickly. With the help of digital
              agency Americaneagle.com, Mecum adopted a new, composable
              stack—giving them confidence that their website would be fast,
              performant, and reliable.  
            </p>
            <p>
              The Mecum ecosystem manages the auction process on a massive
              scale, especially during their two-day auction events held twice a
              year. The inventory includes 8 million assets—ranging from cars to
              trucks—spread across 275,000 individual listing pages or "lots",
              with hundreds of updates made daily, attracting over 120 million
              views annually. Overall, Mecum set out to redesign their entire
              digital platform so that it would enable their teams to
              automatically generate pages, update and create content without
              the help of IT, and provide faster digital experiences for their
              end users.
            </p>
            <p>
              The Mecum ecosystem manages the auction process on a massive
              scale, especially during their two-day auction events held twice a
              year. The inventory includes 8 million assets—ranging from cars to
              trucks—spread across 275,000 individual listing pages or "lots",
              with hundreds of updates made daily, attracting over 120 million
              views annually. Overall, Mecum set out to redesign their entire
              digital platform so that it would enable their teams to
              automatically generate pages, update and create content without
              the help of IT, and provide faster digital experiences for their
              end users.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LeaderSingle;
