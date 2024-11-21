import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../../component/ui/Container";
import Navbar from "../../../component/navbar";
import { HiArrowLeft } from "react-icons/hi";
import SubTitle from "../../../component/ui/SubTitle";
import Paragraph from "../../../component/ui/Paragraph";
import request from "../../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PartnerDetails = () => {
  const { partnerId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const fetchPartners = async () => {
    try {
      const res = await request.get(`api/admin/partners/${partnerId}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPartners();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const {
    logoUrl,
    title,
    titleRu,
    titleUz,
    headLine,
    descriptionEn,
    descriptionRu,
    description,
  } = data.data;
  const name =
    lang === "uz" ? titleUz : lang === "ru" ? titleRu : title; 
  const desc =
    lang === "uz" ? description : lang === "ru" ? descriptionRu : descriptionEn;

  return (
    <div className="h-auto  ">
      <div className="bg-radial-custom border">
        <Container>
          <Navbar />
          <Link
            className="inline-flex items-center gap-x-3 pt-8 "
            to={"/partners"}
          >
            <HiArrowLeft />
            <p className="font-Inter font-semibold text-sm">Partners</p>
          </Link>
          <div className=" flex  flex-col  gap-y-4 items-center py-6 justify-center ">
            <img src={logoUrl} alt="logo" className="text-blue-500 h-[15vh]" />
            <SubTitle
              text={name}
              style="w-1/2"
            />
            <Paragraph
              text={headLine}
              style={`w-2/5`}
            />
          </div>
        </Container>
      </div>

      <Container>
        <div className=" py-20 w-2/3 mx-auto">
          <p>{desc}</p>
        </div>
      </Container>
    </div>
  );
};

export default PartnerDetails;
