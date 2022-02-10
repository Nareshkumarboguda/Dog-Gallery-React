import React, { useState, useEffect } from 'react';
import './MoreImages.css'

export default function MoreImages({props}) {
    const [moreDogImages, setMOreDogImages] =useState([])
    useEffect(() => {

        async function getData() {
             let data = await (await fetch(`https://dog.ceo/api/breed/${props}/images/random/4`)).json();
             return data.message;
           }
           
           getData().then(data => setMOreDogImages(data));
        
   
   },[props]);
  return <div cls='dogs-imges'>
    {moreDogImages.map((images, i)=>
    <img src={images} alt={props} key={i}/>)}
  </div>;
}
