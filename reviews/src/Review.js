import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {id,name,job,text,image} = people[index];
  const verifyIndex = (number) =>{
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0){
      return people.length - 1;
    }
    return number;
  }
  const nextPerson = () =>{
    setIndex((index)=>{
      const newIndex = index + 1;
      return verifyIndex(newIndex);
    })
  }

  const prevPerson = () =>{
    setIndex((index)=>{
      const newIndex = index - 1;
      return verifyIndex(newIndex);
    })
  }

  const randomPerson = () =>{
    let randomIndex = Math.floor(Math.random()*people.length-1);
    randomIndex = verifyIndex(randomIndex);
    setIndex(randomIndex);
  }
  

  return <article>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <button className="random-btn" onClick={randomPerson}>Surprise me</button>
    </div>
  </article>
};

export default Review;
