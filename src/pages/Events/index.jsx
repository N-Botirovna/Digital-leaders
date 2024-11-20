import { useState, useEffect } from "react";
import EventsPage from "../../component/Events";
import request from "../../../src/services/api";

const Events = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchEvents = async () => {
    try {
      const res = await request.get("api/base/events");
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
    <div>
      <EventsPage data={data.data} />
    </div>
  );
};

export default Events;

