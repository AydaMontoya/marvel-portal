import React from 'react';
import MyDropdown from '../Dropdown/MyDropdown';
import Lupita from '../../atoms/Lupita';
import './styles.scss';
import { useState } from 'react';
import Drop from '../../atoms/Drop';

export default function Filter() {
  const [show, setShow] = useState(false)

  function showBox(){
    setShow(!show)
  }

  return (
    <div className='mvl-character-filter-main'>
      <div className="mvl-character-gri-filters">
        <Lupita />
        <input type="text" placeholder="SEARCH" />
      </div>
      <div className='mvl-movie-filter'>
        <button onClick={showBox}>MOVIES <Drop/></button>
        {show?<MyDropdown />:console.log('no show')}
      </div>
    </div>
  );
}
