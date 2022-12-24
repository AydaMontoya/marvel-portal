import React from 'react';
import MyDropdown from '../Dropdown/MyDropdown';
import Lupita from '../../atoms/Lupita';
import './styles.scss';
import { useState } from 'react';
import Drop from '../../atoms/Drop';
import PropTypes from 'prop-types';


export default function Filter(props) {
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState("")

  function showBox(){
    setShow(!show)
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  function settingName(){
    props.filterFunction(inputValue)
  }

  return (
    <div className='mvl-character-filter-main'>
      <div className="mvl-character-gri-filters">
        <Lupita />
        <input type="text" placeholder="SEARCH" onChange={handleChange}/>
        <button onClick={settingName}>BUSCAR</button>
      </div>
      <div className='mvl-movie-filter'>
        <button onClick={showBox}>MOVIES <Drop/></button>
        {show?<MyDropdown />:<></>}
      </div>
      
    </div>
  );
}

Filter.propTypes = {
  filterFunction: PropTypes.number
};
