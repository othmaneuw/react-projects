import React, { useState } from 'react';

const Tour = ({id,name,price,image,info,removeTour}) => {
  const [readMore,setReadMore] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p>{ readMore ? info : `${info.substring(0,150)}...` }</p>
        <button onClick={()=>setReadMore(!readMore)}>
          {readMore ? 'show less':'read more'}
        </button>
      </div>
      <button className='delete-btn' onClick={()=>removeTour(id)} >Not interested</button>
    </footer>
  </article>;
};

export default Tour;
