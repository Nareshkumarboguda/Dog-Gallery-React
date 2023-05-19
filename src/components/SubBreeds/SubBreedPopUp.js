import React, { useEffect, useState, useRef } from 'react';
import MoreImages from './MoreImages';
import SubBreedImages from './SubBreedImages';
import './SubBreedPopUp.css';
// import SubBreedImages from './SubBreedImages'

export default function SubBreedPopUp({handleSubBreed,  props,  }) {
const [subBreedData, setSubBreedData] = useState([]);
// const [noBreeds, setNoBreeds] = useState("")

useEffect(() => {

     async function getData() {
          let data = await (await fetch(`https://dog.ceo/api/breed/${props}/list`)).json();
          return data.message;
        }
        
        getData().then(data => setSubBreedData(data));
     

});

// useEffect(() => {
 
// setNoBreeds(`No Sub breed for ${props}` )
// });


  return <div className='subBreed-container'>
    <div className='popUp-container' >
             <div className='popUp-Header'>
            <h2> {props.charAt(0).toUpperCase() + props.slice(1)}</h2> 
            <button className="close-btn"
              onClick={handleSubBreed}
              >X</button>
              </div>
            <div >
                    {subBreedData.length} Sub Breed(s)
                    <div className='subBreed-imges'>
                      
                      {subBreedData ? subBreedData.map((names, i)=><>
                      <SubBreedImages  names={names} props={props} />
                      {/* <p key={i}>{names}</p> */}
                      </>):null}
                    
            </div>
          </div>
          <div>
              <h2>More images</h2>
            <MoreImages props={props}/>
            </div>
            
            
            </div>
          </div>;
}
