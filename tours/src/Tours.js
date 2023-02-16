import React from "react";
import Tour from "./Tour";
const Tours = ({ tours,removeTour }) => {
  return (
    <section>
      <div className="title">
        <div>Our Tours</div>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => <Tour key={tour.id} {...tour} removeTour={removeTour} />)}
      </div>
    </section>
  );
};

export default Tours;
