import React from 'react'
import LeaderBoardPage from "../../component/LeaderBoardPage"
import { useState, useEffect } from "react";
import request from "../../../src/services/api";

const LeaderBoard = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchEvents = async () => {
    try {
      const res = await request.get("api/admin/leaders");
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
  return (
    <LeaderBoardPage data={data}/>
  )
}

export default LeaderBoard
