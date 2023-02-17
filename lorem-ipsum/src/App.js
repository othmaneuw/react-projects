import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0){
      amount = 1;
    }
    if(amount > amount.length){
      amount = amount.length;
    }
    setText(data.slice(0,amount));
  }
  
  return (
  <section className='section-center'>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">Paragraph</label>
      <input type="number" name='amount' value={count} onChange={(e)=>setCount(e.target.value)}  />
      <button className='btn' type='submit'>Generate</button>
    </form>
    <article className='result'>
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
