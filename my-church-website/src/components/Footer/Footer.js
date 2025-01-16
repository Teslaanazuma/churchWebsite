import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__contacts">
          <h2 className="footer__title">Контакты</h2>
          <p className="footer__contact-item">Адрес: Smetanova 20, Brno</p>
          <p className="footer__contact-item">
            Электронная почта: 
            <a href="mailto:skala.church.brno@gmail.com" className="footer__link"> skala.church.brno@gmail.com</a>
          </p>
          <p className="footer__contact-item">
  <span>Время служений:</span>
  <span>Воскресенье, 12:30</span>
</p>
        </div>
        <div className="footer__map">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.875402106627!2d16.602633276978654!3d49.20292317138097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712958856e3d7f5%3A0x9c89faea12c0d3ad!2sSmetanova%2020%2C%20602%2000%20Brno-st%C5%99ed!5e0!3m2!1sru!2scz!4v1736444537886!5m2!1sru!2scz"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map of Smetanova 20, Brno"  // Добавьте этот атрибут
></iframe>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
