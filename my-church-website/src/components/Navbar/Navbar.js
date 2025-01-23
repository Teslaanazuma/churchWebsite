import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../img/logo/logo.png'; // Путь к логотипу

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Показывать или скрывать Navbar

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        if (currentScrollY < lastScrollY) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
      </div>
      {/* Закомментированные кнопки */}
      {/* 
      <div className={`navbar__links`}>
        <a href="#header" className="navbar__link">Главная</a>
        <a href="#main-page" className="navbar__link">О нас</a>
        <a href="#footer" className="navbar__link">Контакты</a>
      </div>
      <div className="navbar__menu-button">
        Меню
      </div>
      */}
    </div>
  );
};

export default Navbar;
