import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../../component/ui/Container";
import Navbar from "../../../component/navbar";
import { HiArrowLeft } from "react-icons/hi";
import logo from "../../../assets/images/logo/logo.svg";
import SubTitle from "../../../component/ui/SubTitle";
import Paragraph from "../../../component/ui/Paragraph";

const PartnerDetails = () => {
  const { partnerId } = useParams();
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
            <img  src={logo} alt="logo"  className="text-blue-500 h-[15vh]"/>
            <SubTitle
              text="Ministry of Digital Technologies of the Republic of Uzbekistan"
              style="w-1/2"
            />
            <Paragraph text="Uzbekistan's Ministry of Digital Technologies drives digital innovation and enhances public services for national progress." style={`w-2/5`}/>
          </div>
        </Container>
      </div>

      <Container>
        <div className=" py-20 w-2/3 mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            facilis ipsum tempora alias, recusandae id velit fuga perspiciatis
            nobis, blanditiis corporis eos officia dolor sunt. Officiis, vel
            quos odit cupiditate ratione consequuntur repellat quis, suscipit
            necessitatibus sed quo accusamus quod delectus praesentium iure qui
            distinctio, eaque molestias doloribus amet. Enim atque voluptatibus
            dolorem vero sed laborum deleniti ea assumenda! Ut incidunt
            doloremque impedit provident cupiditate laudantium eum optio
            praesentium, blanditiis ad placeat facere, aspernatur eveniet
            temporibus sapiente culpa a assumenda consequuntur doloribus aperiam
            laboriosam. Aperiam praesentium quia quam sit, optio asperiores non
            voluptas doloremque laboriosam facere enim, nulla quisquam ullam!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
            voluptas hic, unde molestiae similique nihil, repellat quaerat
            impedit repellendus non fuga, voluptates eaque inventore porro
            nostrum? Ratione dolores similique quaerat itaque unde qui doloribus
            facilis officia quasi illum voluptatum eum blanditiis tempora
            commodi dolor vero temporibus minus perferendis quos, sequi soluta
            quisquam deleniti suscipit. Obcaecati, fuga odit? Nesciunt ipsam
            fugiat natus veniam ab blanditiis temporibus mollitia, recusandae
            maiores nisi officia eos omnis aspernatur enim nobis odit deserunt
            adipisci perferendis vero! Recusandae nobis laudantium possimus
            animi nulla adipisci reprehenderit commodi at, rem repudiandae ex
            ipsum minus perferendis dicta, quas aut est perspiciatis culpa eos
            veniam expedita! Reiciendis sit repellendus, nisi nostrum autem odio
            natus rerum sequi amet accusantium quo veniam delectus tempore
            ratione suscipit eligendi, error aperiam itaque quasi. Cumque
            voluptates, atque quod repellat ut eligendi temporibus, mollitia id
            exercitationem eum rerum, magnam at. Recusandae distinctio
            repellendus hic tempora sunt ratione tenetur maiores dolorem placeat
            necessitatibus ad deleniti quos accusamus neque debitis voluptatibus
            ipsum dicta maxime enim eum dolores dolore, assumenda cum? Alias
            nulla corrupti accusantium, assumenda provident enim consectetur
            dolor impedit, magnam praesentium iste qui minima nam vel nemo
            eaque. Amet dolorum optio sit maxime dicta id autem illum!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PartnerDetails;