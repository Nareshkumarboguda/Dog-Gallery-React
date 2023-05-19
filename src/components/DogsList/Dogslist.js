

import { useState, useEffect } from "react";
import DogCard from "./DogCard";
import './Doglist.css'


  export default function DogsList() {

    
    const[names, setNames] = useState([]);
    const[search, setSearch]=useState('');
  useEffect(() => {
    dogData()
  }, []);
  
  const dogData = () => { fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(res=> res.json())
  .then(data=> setNames(Object.keys(data.message)))
  
  }

  
    const handleChange=(value)=>{
      setSearch(value)
   }


    const filteredName=names.filter((names) => {
      return names.toLowerCase().includes(search.toLowerCase())})

    // console.log(filteredName)

 
  

    
  
  
    return  <>
              <div className='Search-bar'>
  <input  type='text' className="search-input" placeholder="Filter By Breed" onChange={(event)=>handleChange(event.target.value)}/>
  
  </div>
              <DogCard props={filteredName} 
               
                

              />
            </>;
  }
  




