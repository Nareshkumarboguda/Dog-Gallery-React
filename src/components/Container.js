import Dogslist from './DogsList/Dogslist'
import React, { useState } from 'react';
import PopUp from './PopUp/PopUp';
import './Container.css'

export default function Container() {
  const [popUpClicked, setPopUpClicked] = useState(false);
  const HandlePopup = () => setPopUpClicked(!popUpClicked)
    
    return <div >
     <div className='Header'>
        <h1>Dogs Gallery</h1>
        <button className='Custom-Search-btn' onClick={HandlePopup}>Custom Search</button>
    </div>
      {popUpClicked? <PopUp HandlePopup ={HandlePopup}/>:null}

        <Dogslist/>
        </div>;
}
