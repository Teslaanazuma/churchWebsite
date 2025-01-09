import React from 'react';
import './MainPage.scss';

function MainPage() {
  return (
    <main>
      <div className="mainpage">
        <p className="mainpage__title">О нас</p>
        <p className="mainpage__text">
          Мы — церковь Евангельских Христиан Баптистов (ЕХБ), община верующих, стремящихся жить по Слову Божьему и следовать примеру Иисуса Христа. Наша миссия — прославлять Бога, делиться Благой Вестью, поддерживать друг друга в вере и служить нашему обществу.
        </p>
        
        <p className="mainpage__title">Во что мы верим</p>
        <ul className="mainpage__list">
          <li className="mainpage__list-item">Мы верим в Бога Троицу — Отца, Сына и Святого Духа.</li>
          <li className="mainpage__list-item">Мы утверждаем, что Иисус Христос — Спаситель мира, искупивший грехи человечества через Свою жертву и воскресение.</li>
          <li className="mainpage__list-item">Библия является нашим единственным авторитетом в вопросах веры и жизни.</li>
          <li className="mainpage__list-item">Спасение достигается благодатью через веру, а не делами.</li>
          <li className="mainpage__list-item">Мы стремимся жить в любви, следуя заповедям Иисуса, и делиться Благой Вестью.</li>
        </ul>
      </div>
    </main>
  );
}

export default MainPage;
