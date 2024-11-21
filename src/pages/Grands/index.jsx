import GrantsPage from "../../component/Grants"
import request from "../../../src/services/api";
import { useState, useEffect } from "react";

const Grands = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchEvents = async () => {
    try {
      const res = await request.get("api/base/events/by-type?type=PROJECTS");
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
  console.log(data);

  return (
    <div >
            <GrantsPage data={data}/>
    </div>
  )
}

export default Grands
