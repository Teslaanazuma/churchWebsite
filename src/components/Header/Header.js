import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header" id="header">
      <address className="header__contacts">
        <p className="header__contact">
          Адрес: <span>Smetanova 20, Brno</span>
        </p>
        <p className="header__contact">
          Электронная почта:{' '}
          <a href="mailto:skala.church.brno@gmail.com" className="header__link">
            skala.church.brno@gmail.com
          </a>
        </p>
      </address>
    </header>
  );
}

export default Header;
