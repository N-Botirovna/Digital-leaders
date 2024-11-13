import  Container  from '../../ui/Container'
import React from 'react'
import logo1 from "../../../assets/images/logo/frame.svg"
import logo2 from "../../../assets/images/logo/frame.svg"
import logo3 from "../../../assets/images/logo/frame.svg"
import logo4 from "../../../assets/images/logo/frame.svg"
import logo5 from "../../../assets/images/logo/frame.svg"
import logo6 from "../../../assets/images/logo/frame.svg"
import logo7 from "../../../assets/images/logo/frame.svg"
import logo8 from "../../../assets/images/logo/frame.svg"
import logo9 from "../../../assets/images/logo/frame.svg"


const PartnerList = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
  return (
    <Container>
      <div className="py-10 px-14">
        <p className="text-center font-normal text-sm leading-sm text-[#0A0A0A73] text-opacity-45 mt-6">
          Trusted by thousands of teams
        </p>
        <div className="flex items-center justify-between mt-6 gap-2">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-[20px]"
            />
          ))}
        </div>
      </div>
    </Container>

  )
}

export default PartnerList
