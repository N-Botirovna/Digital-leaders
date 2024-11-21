import React from "react";
import { Space, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



const LeaderTable = ({data}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const navigate = useNavigate();
  const handleRowClick = (record) => {
    navigate(`/leader/${record.key}`);
  };

  const columns = [
    {
      title: (
        <span className="text-xs leading-xs font-normal text-[#0A0A0AB2] text-opacity-70">
          Leader
        </span>
      ),
      dataIndex: "Leader",
      key: "Leader",
      width: "40%",
      align: "left",
      render: (text, record) => (
        <div className="flex items-center gap-4">
          <img
            src={record.img}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-medium text-left text-sm leading-sm">{text}</span>
        </div>
      ),
    },
    {
      title: (
        <span className="text-xs leading-xs font-normal text-[#0A0A0AB2] text-opacity-70">
          Organization
        </span>
      ),
      dataIndex: "Organization",
      key: "Organization",
      width: "40%",
      align: "left",
      render: (text) => (
        <span className="font-normal text-left text-sm leading-sm">{text}</span>
      ),
    },
    {
      title: (
        <span className="text-xs leading-xs font-normal text-[#0A0A0AB2] text-opacity-70">
          Data Joined
        </span>
      ),
      dataIndex: "dataJoined",
      key: "dataJoined",
      width: "20%",
      align: "right",
      render: (text) => (
        <span className="font-normal text-left text-sm leading-sm">{text}</span>
      ),
    },
  ];
  const formattedData = data?.data?.data?.map((item) => ({
    key: item.id,
    Leader:
      lang === "uz"
        ? item.fullNameUz
        : lang === "ru"
        ? item.fullNameRu
        : item.fullNameEn, 
    Organization:
      lang === "uz"
        ? item.headLineUz
        : lang === "ru"
        ? item.headLineRu
        : item.headLineEn, 
    dataJoined: new Date(item.createdAt).toLocaleDateString(), 
    img: item.photoUrl, 
  }));

  return (
    <Table
      columns={columns}
      dataSource={formattedData}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      rowClassName="cursor-pointer"
    />
  );
};
export default LeaderTable;
