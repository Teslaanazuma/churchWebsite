import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__background" />
      <h1 className="header__title">
        <span>Церковь Евангельских</span>
        <span>Христиан Баптистов "Скала"</span>
      </h1>
    </header>
  );
}

export default Header;
