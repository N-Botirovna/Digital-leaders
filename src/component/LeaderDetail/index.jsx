import { useParams } from "react-router-dom";

import React from "react";
import Navbar from "../navbar";
import Container from "../ui/Container";
import blur from "../../assets/images/leaders/blur.svg";
import profile from "../../assets/images/leaders/Profile.png"
import SubTitle from "../ui/SubTitle";
import Paragraph from "../ui/Paragraph";

const LeaderDetail = () => {
  const { leadersId } = useParams();
  return (
    <>
      <header className="px-2 bg-radial-custom rounded-3xl h-[40vh] flex flex-col justify-between w-full items-start">
        <Container className={"w-full "}>
          <Navbar />
        </Container>
        <div className=" h-2/3 w-1/3 rounded-3xl">
          <img src={blur} alt="blur" className="h-full w-full object-cover rounded-3xl" />
        </div>
      </header>
      <Container>
      <div className="flex justify-start space-x-12 items-start">
        <div className="w-[30vw]">
        <div className="rounded-3xl -mt-20 ">
            <img src={profile} alt="Profile" className="rounded-3xl h-[30vh] shadow-xl bg-white-200 p-2"/>
        </div>
        </div>
  
        <div className="flex pt-8 flex-col items-start justify-start w-[70vw]" >
         <div >
         <SubTitle text={"Riley O’Moore"} style={"text-left"}/>
          <Paragraph text={"Former PM for Airtable, Medium, Ghost, and Lumi."}/>
          </div>
        </div>
      </div>
      <div className="flex justify-start space-x-12 items-start mt-10" >
        <p className="font-normal text-[16px] leading-[24px]  w-[30vw]">
        About Riley O’Moore
        </p>
        <p className="font-normal text-[16px] leading-[24px]  w-[70vw]">
        As the world’s leading in-person car auction enterprise, Mecum Auction Company has sold some of the most famous vehicles in the world. And while their digital platform had capably evolved over the years, it was hitting its limit, hindering their ability to create listings quickly. With the help of digital agency Americaneagle.com, Mecum adopted a new, composable stack—giving them confidence that their website would be fast, performant, and reliable.   <br /> <br />
        The Mecum ecosystem manages the auction process on a massive scale, especially during their two-day auction events held twice a year. The inventory includes 8 million assets—ranging from cars to trucks—spread across 275,000 individual listing pages or "lots", with hundreds of updates made daily, attracting over 120 million views annually.
Overall, Mecum set out to redesign their entire digital platform so that it would enable their teams to automatically generate pages, update and create content without the help of IT, and provide faster digital experiences for their end users. <br /><br />
The Mecum ecosystem manages the auction process on a massive scale, especially during their two-day auction events held twice a year. The inventory includes 8 million assets—ranging from cars to trucks—spread across 275,000 individual listing pages or "lots", with hundreds of updates made daily, attracting over 120 million views annually.
Overall, Mecum set out to redesign their entire digital platform so that it would enable their teams to automatically generate pages, update and create content without the help of IT, and provide faster digital experiences for their end users. <br /> <br />
        </p>
      </div>

      </Container>
    </>
  );
};

export default LeaderDetail;

