import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoImg} alt="Простір" className="logo-img" />
            </div>
            <p className="footer-description">
              Надійний інтернет-провайдер в м. Снятин та навколишніх селах. 
              Забезпечуємо стабільний зв'язок та якісний сервіс для наших клієнтів.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📧</a>
              <a href="#" className="social-link">📞</a>
              <a href="#" className="social-link">💬</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Послуги</h4>
            <ul className="footer-links">
              <li><a href="#internet">Високошвидкісний Інтернет</a></li>
              <li><a href="#tv">Інтернет Телебачення</a></li>
              <li><a href="#backup">Інтернет без світла</a></li>
              <li><a href="#support">Технічна підтримка</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Тарифи та оплата</h4>
            <ul className="footer-links">
              <li><a href="#tariffs">Тарифні плани</a></li>
              <li><a href="#payment">Способи оплати</a></li>
              <li><a href="#offers">Акції та знижки</a></li>
              <li><a href="#cabinet">Особистий кабінет</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Контактна інформація</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>м. Снятин, Івано-Франківська область</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="phones-group">
                  <div className="phone-line">
                    <span className="kyivstar-icon">📱</span>
                    <span>097 921 65 22 (Kyivstar)</span>
                  </div>
                  <div className="phone-line">
                    <span className="kyivstar-icon">📱</span>
                    <span>097 812 80 28 (Kyivstar)</span>
                  </div>
                  <div className="phone-line">
                    <span className="vodafone-icon">📞</span>
                    <span>099 495 15 35 (Vodafone)</span>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@prostir.if.ua</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Пн-Пт: 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 ФОП Юрійчук Ольга Ярoslavівна. Всі права захищені.
            </p>
            <div className="payment-methods">
              <span>Способи оплати:</span>
              <div className="payment-icons">
                <div className="payment-icon">Privat24</div>
                <div className="payment-icon">Portmone</div>
                <div className="payment-icon">Готівка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;