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
            Orange
          </li>
          <li>
            <input type="checkbox" />
            Grapes{' '}
          </li>
          <li>
            <input type="checkbox" />
            Berry{' '}
          </li>
          <li>
            <input type="checkbox" />
            Mango{' '}
          </li>
          <li>
            <input type="checkbox" />
            Banana{' '}
          </li>
          <li>
            <input type="checkbox" />
            Tomato
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyDropdown;
