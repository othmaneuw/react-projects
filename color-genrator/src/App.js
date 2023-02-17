import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#ff2211').all(10));
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#rrggbb"
            className={ error ? 'error' : null }
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
