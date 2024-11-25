import React from 'react'
import img1 from './Images/img1.jpg'; // Update the path as per your project structure
import Hiking from './Hiking/Hiking';
import Paragliding from './Paragliding/Paragliding';
import RiverRafting from './RiverRafting/RiverRafting';

const Activities = () => {
  return (
    <div>
       <img className='m-6' 
        src={img1} 
        alt="River" 
        style={{ width: '97%', height: '80vh', }} 
      />
      <Hiking />
      <Paragliding />
      <RiverRafting />
      
    </div>
  )
}

export default Activities
