import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header >
     <div className ="header">
      <h1 className="header__title">
        <span>Церковь Евангельских</span>
        <span>Христиан Баптистов "Скала"</span>
       </h1>
   
    <div className="header__contacts">
      <h2 className="header__contacts__title">Контакты</h2>
      <p className="header__contacts__item">Адрес: Smetanova 20, Brno</p>
      <p className="header__contacts__item">
        Электронная почта:
        <a href="mailto:skala.church.brno@gmail.com" className="header__link">
          {' '}skala.church.brno@gmail.com
        </a>
      </p>
      <p className="header__contacts__item">
        <span>Время служений:</span>
        <span>Воскресенье, 12:30</span>
      </p>
    </div>
<div className="header__photo">
</div>
</div>

    </header>
  );
}

export default Header;
