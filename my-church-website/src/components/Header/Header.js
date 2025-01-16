import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__background" /> {/* Фоновое изображение */}
      <h1 className="header__title">
        <span>церковь</span>
        <span>ЕХБ "Скала"</span>
      </h1> {/* Заголовок */}
    </header>
  );
}

export default Header;
