import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Leader',
    dataIndex: 'Leader',
    key: 'Leader',
  },
  {
    title: 'Organization',
    dataIndex: 'Organization',
    key: 'Organization',
  },
  {
    title: 'Data Joined',
    dataIndex: 'dataJoined',
    key: 'dataJoined',
  },
];
const data = [
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
  {
    Leader: 'Adrian Korsgaard',
    Organization: 'IT Investments Center',
    dataJoined: '2 Avg, 04:41 pm'
  },
];
const LeaderTable = () => <Table columns={columns} dataSource={data} />;
export default LeaderTable;