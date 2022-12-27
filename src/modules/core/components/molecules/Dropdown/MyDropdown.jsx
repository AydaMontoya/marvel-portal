import React from 'react';
import './styles.scss'

function MyDropdown() {
  return (
    <div>
      <div id="list1" className="dropdown-check-list">
        <ul className="items">
          <li>
            <input type="radio" name="personajes" />
            Ant-Man{' '}
          </li>
          <li>
            <input type="radio" name="personajes" />
            Infinity War
          </li>
          <li>
            <input type="radio" name="personajes" />
            Guardians of the Galaxy{' '}
          </li>
          <li>
            <input type="radio" name="personajes" />
            Black Panther{' '}
          </li>
          <li>
            <input type="radio" name="personajes" />
            Iron Man{' '}
          </li>
          <li>
            <input type="radio" name="personajes" />
            Civil War{' '}
          </li>
          <li>
            <input type="radio" name="personajes" />
            Spider-Man Homecoming
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyDropdown;
