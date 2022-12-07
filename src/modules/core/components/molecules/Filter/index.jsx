import React from 'react';
import ModalFilter from '../Modal/ModalFilter';
//import Lupita from '../../atoms/Lupita';
import './styles.scss';

export default function Filter() {
  return (
    <div>
      <div className="mvl-character-gri-filters">
        {/*<Lupita />*/}
        <input type="text" placeholder="SEARCH" />
      </div>
      <ModalFilter />
    </div>
  );
}
