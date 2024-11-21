import React from 'react'
import Partnerspage from '../../component/PartnersComponent'
import request from '../../services/api'
import { useState, useEffect } from "react";


const Partner = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  
  const fetchEvents = async () => {
    try {
      const res = await request.get("api/admin/partners");
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
  fetch
  return (
    <Partnerspage data = {data}/>
  )
}

export default Partner
