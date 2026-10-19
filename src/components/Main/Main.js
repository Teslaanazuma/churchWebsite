import React from 'react';
import './Main.scss';
import photo from '../../img/photo.png';

function Main() {
  return (
    <div className="main">
      <section className="main__schedule" aria-labelledby="schedule-title">
        <h2 className="main__title" id="schedule-title">
          Расписание служений
        </h2>
        <ul className="main__list">
          <li className="main__event">
            <h3 className="main__event-title">Богослужение</h3>
            <p className="main__event-details">Каждое воскресенье</p>
            <time className="main__event-time" dateTime="12:30">12:30</time>
          </li>
          <li className="main__event">
            <h3 className="main__event-title">Домашняя группа</h3>
            <p className="main__event-details">Каждый четверг</p>
            <time className="main__event-time" dateTime="18:30">18:30</time>
          </li>
          <li className="main__event">
            <h3 className="main__event-title">Молодёжное служение</h3>
            <p className="main__event-details">Каждую субботу</p>
            <time className="main__event-time" dateTime="18:00">18:00</time>
          </li>
        </ul>
      </section>
      <section className="main__identity" aria-labelledby="church-title">
        <h1 className="main__church-title" id="church-title">
          Церковь Евангельских Христиан Баптистов «Скала»
        </h1>
        <img
          className="main__photo"
          src={photo}
          alt="Церковь «Скала» в Брно"
        />
      </section>
      <section className="main__intro" aria-labelledby="welcome-title">
        <h2 className="main__title" id="welcome-title">
          Добро пожаловать
        </h2>
        <p className="main__about">
          Мы — церковь евангельских христиан-баптистов в городе Брно.
          Библия — основание нашей веры, и каждый человек важен.
        </p>
        <p className="main__about">
          Здесь ты найдёшь надежду. Ты не случайность — ты нужен.
        </p>
      </section>
    </div>
  );
}

export default Main;
