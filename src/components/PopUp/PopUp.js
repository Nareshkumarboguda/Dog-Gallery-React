import React, { useState, useEffect } from 'react';
import './PopUp.css'
// import PopImages from './PopImages'

export default function PopUp({HandlePopup}) {
  const [names, setNames] = useState([]);
  const [images, setImages] = useState([]);
  const [breedChange, setBreedChange] = useState("");
  const [numberChange, setNumberChange] = useState(0);
  const [ displayImages, setDisplayImages] = useState(false);


  
  useEffect(() => {
   

    async function getData() {
         let data = await (await fetch(`https://dog.ceo/api/breeds/list/all`)).json();
         return data.message;
       }
       
       getData().then(data =>setNames(Object.keys(data)));
    

},[]); 


useEffect(() => {
  async function getImages() {
       let data = await (await fetch(`https://dog.ceo/api/breed/${breedChange}/images/random/${numberChange}`)).json();
       return data.message;
     }
     
     getImages().then(data =>setImages(data));
    

  
    },[numberChange]); 

    
    const handleSearch = () => setDisplayImages(true)
  return( 
    <div className='PopUp'>
  <div className='Popup-container'>
    {/* {console.log(names)} */}
      <div>
      <button className='Close-btn' onClick={HandlePopup}>x</button>
      
          <h2>Custom Search</h2>
          </div>
      <hr></hr>
    <div className='Search-header'>
        <select onChange={(event)=>setBreedChange(event.target.value)} >
        <option placeholder="Select a Breed">Select a Breed</option>
           {names.map((breed) => <option 
           
            >{breed}</option>)}
        </select>
        <input type="number" placeholder=" Enter a number"
        onChange={(event)=>setNumberChange(event.target.value)}

        ></input>
        <button className='GetImagesbtn'
         onClick={handleSearch}
         > Get Images</button>
    </div>
    <div className='images-container'>
      {displayImages? images.map((image, i )=><img className='dog-img' src={image} alt='dogs' key={i}/>):null}
    </div>
    </div>

  </div>);
}
