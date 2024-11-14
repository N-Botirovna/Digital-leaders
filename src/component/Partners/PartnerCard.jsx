import { useNavigate } from "react-router-dom";

const PartnerCard = ({logo,partnerId}) => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/partners/${partnerId}`);
    }
  return (
    <div className="border w-full transition-colors duration-300 h-[180px] p-6 flex hover:bg-gradient-to-b from-white to-[#FAF5FF] items-center cursor-pointer justify-center hover:bg-gradient "
    onClick={handleClick}
   >
      <img src={logo} alt="" />
    </div>
  )
}

export default PartnerCard;
