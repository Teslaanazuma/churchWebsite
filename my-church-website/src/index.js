// Импортируем ReactDOM из правильного места
import React from 'react';  // Добавьте этот импорт
import ReactDOM from 'react-dom/client'; // Обновление импорта
import './index.scss';  // Основной файл стилей
import App from './App';  // Ваш компонент App

const root = ReactDOM.createRoot(document.getElementById('root')); // Использование createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);