import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import logo from '../../img/logo/logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0); // фикс ESLint

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY < lastScrollY.current) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }

      lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}
      aria-label="Основная навигация"
    >
      <div className="navbar__logo">
        <img
          src={logo}
          alt="Логотип церкви «Скала»"
          className="navbar__logo-img"
        />
      </div>
      <a
        href="https://www.instagram.com/skala_church/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__gallerey-button"
      >
        Instagram
      </a>
    </nav>
  );
};

export default Navbar;
