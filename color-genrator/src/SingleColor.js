import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({weight,rgb,index}) => {
  const [alert,setAlert] = useState(false);
  const bgc = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const handleClick = () =>{
    setAlert(true);
    navigator.clipboard.writeText(hex);
  }
  useEffect(()=>{
    setTimeout(()=>{
        setAlert(false)
    },3000)
  },[alert])
  return <article className={index>10 && 'color-light'} style={{
    backgroundColor:`rgb(${bgc})`
  }} onClick={handleClick}>
     <p className='percent-value'>{weight}%</p>
     <p className='color-value' > {hex} </p>
     {alert && <p className='alert'> COPIED </p>}
  </article>
}

export default SingleColor
