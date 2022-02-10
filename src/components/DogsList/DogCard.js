import React from 'react';

import './DogCard.css'
import Dogimage from './Dogimage';


export default function DogCard(props) { 
    
  const dogNames = (props.props)
//   console.log(dogNames)
  return <div className='list-Container' > 
            {dogNames.map((breed)=>
                <li key={breed.toString()} className='card-container'>
               <Dogimage props={breed}/>
                <h4>{breed}</h4>
            </li>)
            }
         
        </div>;
}
