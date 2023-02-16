import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };
  const removeTour = (id) =>{
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
  }
  useEffect(() => {
    fetchTours();
  },[]);

  return <>
       {loading && <Loading />}
       {tours.length === 0 && <main>
            <div className="title">No tour left</div>
            <button className="btn" onClick={fetchTours}>Refresh</button>
        </main>}
       {tours.length > 0 && <Tours tours={tours} removeTour={removeTour} />}
  </>;
}

export default App;
