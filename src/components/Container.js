import Dogslist from './DogsList/Dogslist'
import React, { useState } from 'react';
import PopUp from './PopUp/PopUp';
import './Container.css'
import Header from './Header';

export default function Container() {
  const [popUpClicked, setPopUpClicked] = useState(false);
  const HandlePopup = () => setPopUpClicked(!popUpClicked)
    
    return <div className='main-Container'>
      <Header HandlePopup ={HandlePopup}/>
      {popUpClicked? <PopUp HandlePopup ={HandlePopup}/>:null}

        <Dogslist/>
        </div>;
}
