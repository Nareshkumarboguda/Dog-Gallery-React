import React,{useEffect, useState} from 'react';
import './SubBreedImges.css'

export default function SubBreedImages({names, props}) {
    const [images, setImages] = useState([])
    useEffect(() => {
        // console.log(subBreedData)

        async function getData() {
              // console.log(names)
             let data = await (await fetch(`https://dog.ceo/api/breed/${props}/${names}/images/random`)).json();
             return data.message;
           }
           
           getData().then(data => setImages(data));
        
   
   },[names]);
 

 return <div className='dog-list' >
     <img src={images} alt={names} />
    
  </div>;
}
