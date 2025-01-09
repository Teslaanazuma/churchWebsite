import React from 'react';
import './Header.scss';  // Импортируем SCSS

function Header() {
  return (
    <header className="header">
      <div className="header__background" /> {/* Фоновое изображение */}
      <div className="header__overlay" /> {/* Полупрозрачный слой */}
      <h1 className="header__title">церковь ЕХБ "Скала"</h1> {/* Заголовок */}
    </header>
  );
}

export default Header;