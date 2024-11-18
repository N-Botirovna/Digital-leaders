import React from "react";
import { Space, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
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
    render: (text) => (
      <span className="font-medium text-left text-sm leading-sm">{text}</span>
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
const data = [
  {
    key:1,
    id:1,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:2,
    id:2,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:3,
    id:3,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:4,
    id:4,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:5,
    id:5,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:6,
    id:6,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:7,
    id:7,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:8,
    id:8,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  {
    key:9,
    id:9,
    Leader: "Adrian Korsgaard",
    Organization: "IT Investments Center",
    dataJoined: "2 Avg, 04:41 pm",
  },
  
  
];
const LeaderTable = () => {
  const navigate = useNavigate();
  const handleRowClick = (record) => {
    navigate(`/leader/${record.id}`);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      rowClassName="cursor-pointer"
    />
  );
};
export default LeaderTable;
