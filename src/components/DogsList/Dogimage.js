import React, { useEffect, useState } from 'react';
import './Dogimage.css'
import SubBreedPopUp from '../SubBreeds/SubBreedPopUp'

export default function Dogimage(props) {


    const [dogName, setDogName] = useState("");
    const [subBreed, setSubBreed] = useState("");
    const [dogClicked, setDogClicked] = useState(false)
    
    useEffect(()=>{
        
    fetch(`https://dog.ceo/api/breed/${props.props}/images/random`)
    .then(response=>response.json())
    .then(data=> setDogName(data.message))
   
    },[props.props] )
   
    const handleSubBreed =() => {
      setDogClicked(!dogClicked)
      fetch(`https://dog.ceo/api/breed/${props.props}/list`)
      .then(response => response.json())
      .then(data => setSubBreed(data))
        
    }
    

    
      return <>
        
      
        <img src={dogName} alt={dogName} className='dogImage' onClick={handleSubBreed}/>
        <div className='subbreed-popup'>
        {dogClicked?<SubBreedPopUp className='popup' subBreed={subBreed} handleSubBreed={handleSubBreed} dogClicked ={dogClicked} props={props.props}

         />:null}
        
        </div>
        </>
}