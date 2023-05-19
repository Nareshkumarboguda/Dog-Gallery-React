import React from 'react';
import "./Header.css";


export default function Header({HandlePopup}) {
  return <div className='Header'>
  <div className='logo-container'>
 
  <object src = "./dog-api-logo.svg" data="./dog-api-logo.svg" className='header-logo'></object>
  <h1>DOGS GALLERY</h1>
  </div>
  <button className='Custom-Search-btn' onClick={HandlePopup}>Custom Search</button>
</div>;
}
