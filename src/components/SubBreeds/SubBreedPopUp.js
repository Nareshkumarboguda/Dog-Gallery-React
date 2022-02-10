import React, { useEffect, useState } from 'react';
import MoreImages from './MoreImages';
import SubBreedImages from './SubBreedImages';
import './SubBreedPopUp.css';
// import SubBreedImages from './SubBreedImages'

export default function SubBreedPopUp({handleSubBreed,  props}) {
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
              <button 
              onClick={handleSubBreed}
              >X</button>
            <h2> {props}</h2> 
            <div >
                    {subBreedData.length} Sub Breed(s)
                    <div className='subBreed-imges'>
                      <div  > 
                      {subBreedData ? subBreedData.map((names, i)=><>
                      <SubBreedImages  names={names} props={props} />
                      <p key={i}>{names}</p>
                      </>):null}
                    </div>
            </div>
          </div>
          <div>
              <h2>More images</h2>
            <MoreImages props={props}/>
            </div>
            
            
            
          </div>;
}
