// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import './App.scss';  // Для общих стилей

function App() {
  console.log('App is rendering');

  return (
    <div>
      <Navbar />
      <header id="header">
        <Header />
      </header>
      <main id="main-page">
        <MainPage />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;