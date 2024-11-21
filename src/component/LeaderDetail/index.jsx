import { useParams } from "react-router-dom";
import request from "../../../src/services/api";
import { useState, useEffect } from "react";

import React from "react";
import Navbar from "../navbar";
import Container from "../ui/Container";
import blur from "../../assets/images/leaders/blur.svg";
import profile from "../../assets/images/leaders/Profile.png"
import SubTitle from "../ui/SubTitle";
import Paragraph from "../ui/Paragraph";
import { useTranslation } from "react-i18next";

const LeaderDetail = () => {
  const { leadersId } = useParams();
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const { t, i18n } = useTranslation(); 
  const lang = i18n.language; 

  const fetchEvents = async () => {
    try {
      const res = await request.get(`api/admin/leaders/${leadersId}`);
      setData(res.data); 
    } catch (err) {
      console.error(err); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const {
    photoUrl,
    fullNameEn,
    fullNameRu,
    fullNameUz,
    headLineEn,
    headLineRu,
    headLineUz,
    contentEn,
    contentRu,
    contentUz,
    createdAt,
  } = data.data;

  const fullName =
    lang === "uz" ? fullNameUz : lang === "ru" ? fullNameRu : fullNameEn;
  const headLine =
    lang === "uz" ? headLineUz : lang === "ru" ? headLineRu : headLineEn;
  const content =
    lang === "uz" ? contentUz : lang === "ru" ? contentRu : contentEn;

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
      
      <Container className={"pb-5"}>
        <div className="flex justify-start space-x-12 items-start">
          <div className="w-[30vw]">
          <div className="rounded-3xl -mt-20 ">
              <img src={data.data.photoUrl} alt="Profile" className="rounded-3xl h-[30vh] shadow-xl bg-white-200 p-2"/>
          </div>
          </div>
    
          <div className="flex pt-8 flex-col items-start justify-start w-[70vw]" >
           <div >
           <SubTitle text={fullName} style={"text-left"}/>
            <Paragraph text={headLine}/>
            </div>
          </div>
        </div>
        <div className="flex justify-start space-x-12 items-start mt-10" >
          <p className="font-normal text-[16px] leading-[24px]  w-[30vw]">
          About {fullName}
          </p>
          <p className="font-normal text-[16px] leading-[24px]  w-[70vw]">
         {content}
          </p>
        </div>
  
        </Container>
    </>
  );
};

export default LeaderDetail;

