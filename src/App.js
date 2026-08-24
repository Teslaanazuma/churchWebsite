// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.scss';  // Для общих стилей

function App() {
  console.log('App is rendering');

  return (
    <div>
      <Navbar />
      <header id="header">
        <Header />
      </header>
      <main id = "main">
        <Main />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;