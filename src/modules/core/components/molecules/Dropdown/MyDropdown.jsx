import React from 'react';
import './styles.scss'

function MyDropdown() {
  return (
    <div>
      <div id="list1" className="dropdown-check-list">
        <ul className="items">
          <li>
            <input type="checkbox" />
            Ant-Man{' '}
          </li>
          <li>
            <input type="checkbox" />
            Infinity War
          </li>
          <li>
            <input type="checkbox" />
            Guardians of the Galaxy{' '}
          </li>
          <li>
            <input type="checkbox" />
            Black Panther{' '}
          </li>
          <li>
            <input type="checkbox" />
            Iron Man{' '}
          </li>
          <li>
            <input type="checkbox" />
            Civil War{' '}
          </li>
          <li>
            <input type="checkbox" />
            Spider-Man Homecoming
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyDropdown;
