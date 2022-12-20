import React from 'react';
import MyDropdown from '../Dropdown/MyDropdown';
import Lupita from '../../atoms/Lupita';
import './styles.scss';
import { useState } from 'react';
import Drop from '../../atoms/Drop';

export default function Filter() {
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState("")

  function showBox(){
    setShow(!show)
  }
  const handleChange = (e) => {
    //setInputValue("")
    setInputValue(e.target.value)
    console.log(inputValue)
    //console.log(inputValue)
  }

  return (
    <div className='mvl-character-filter-main'>
      <div className="mvl-character-gri-filters">
        <Lupita />
        <input type="text" placeholder="SEARCH" onChange={handleChange}/>
      </div>
      <div className='mvl-movie-filter'>
        <button onClick={showBox}>MOVIES <Drop/></button>
        {show?<MyDropdown />:<></>}
      </div>
      
    </div>
  );
}
