import React from 'react';

export default function Searchbox(handleChange) {
  return <div className='searchbar'>
  <input  type='text' placeholder=" Type Here To Filter By Breed" onChange={(event)=>handleChange(event.target.value)}/>
  
  </div>;
}
