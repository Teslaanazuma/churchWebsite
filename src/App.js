// src/App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.scss';  // Для общих стилей

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main id="main">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;