import React from 'react';
import s from './Header.module.css';


function Header() {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.name}>Travel-app</div>
        <input type="search" name="search" id={s.search} placeholder='Search'/>
        <div className={s.language}>
          <span>Language</span>
          <select name="lang" id="lang">
            <option value="1">ru</option>
            <option value="2">en</option>
            <option value="3">pl</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
