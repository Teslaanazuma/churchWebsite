import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../img/logo/logo.png'; // Путь к логотипу

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние меню
  const [isScrolledUp, setIsScrolledUp] = useState(true); // Состояние для контроля появления Navbar
  let lastScrollY = 0; // Для хранения последней позиции прокрутки

  // Функция для открытия/закрытия меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Отключение прокрутки
    } else {
      document.body.style.overflow = 'auto'; // Включение прокрутки
    }
  };

  // Закрытие меню при клике по ссылке
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto'; // Включаем прокрутку
  };

  useEffect(() => {
    // Функция для отслеживания прокрутки
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Прокрутка вверх
        setIsScrolledUp(true);
      } else {
        // Прокрутка вниз
        setIsScrolledUp(false);
      }
      lastScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Очистка события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolledUp ? 'visible' : 'hidden'}`}>
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
      </div>
      <div className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#header" className="navbar__link" onClick={handleLinkClick}>Главная</a>
        <a href="#main-page" className="navbar__link" onClick={handleLinkClick}>О нас</a>
        <a href="#footer" className="navbar__link" onClick={handleLinkClick}>Контакты</a>
      </div>
      <div className="navbar__menu-button" onClick={toggleMenu}>
        Меню
      </div>

      {/* Overlay меню */}
      {isMenuOpen && (
        <div className="navbar__menu-overlay">
          <img src={logo} alt="Logo" className="navbar__logo-img.larger" />
          <div className="navbar__menu-content">
            <a href="#header" className="navbar__menu-link" onClick={handleLinkClick}>Главная</a>
            <a href="#main-page" className="navbar__menu-link" onClick={handleLinkClick}>О нас</a>
            <a href="#footer" className="navbar__menu-link" onClick={handleLinkClick}>Контакты</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
