import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

test('renders church contacts, service schedule, Instagram, and map', () => {
  const markup = renderToStaticMarkup(<App />);

  expect(markup).toContain('Церковь Евангельских Христиан Баптистов');
  expect(markup).toContain('Smetanova 20, Brno');
  expect(markup).toContain('mailto:skala.church.brno@gmail.com');
  expect(markup.match(/class="main__event"/g)).toHaveLength(3);
  expect(markup).toContain('Каждое воскресенье');
  expect(markup).toContain('12:30');
  expect(markup).toContain('Каждый четверг');
  expect(markup).toContain('18:30');
  expect(markup).toContain('Каждую субботу');
  expect(markup).toContain('18:00');
  expect(markup).toContain('https://www.instagram.com/skala_church/');
  expect(markup).toContain('Карта: Smetanova 20, Брно');
  expect(markup.indexOf('Расписание служений')).toBeLessThan(
    markup.indexOf('Церковь Евангельских Христиан Баптистов')
  );
});
