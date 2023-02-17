import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(0);
  const fetchJobs = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setJobs(data);
  }
  useEffect(()=>{
      fetchJobs();
  },[])
  if(loading){
    return <section>
      <h2>Loading ...</h2>
    </section>
  }
  const {title,company,duties,dates} = jobs[value];
  return <section className='section'>
    <div className="title">
      <h2>Experiences</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
         {jobs.map((duty,index)=>{
          return <button key={duty.id} onClick={()=>setValue(index)} >{duty.company}</button>
         })}
      </div>
      <div className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-dates'>{dates}</p>
        {duties.map((duty,index)=>{
          return (
            <div key={index}>
              <FaAngleDoubleRight />
               <p> {duty} </p>
            </div>
          )
        })}
      </div>
    </div>

  </section>
}

export default App
