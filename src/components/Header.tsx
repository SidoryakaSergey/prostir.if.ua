import React from 'react';
import './Header.css';
import logoImg from '../assets/logo.jpg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logoImg} alt="Простір" className="logo-img" />
            <span className="logo-text">Простір</span>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#home">Головна</a></li>
              <li><a href="#services">Послуги</a></li>
              <li><a href="#tariffs">Тарифи</a></li>
              <li><a href="#tv">Телебачення</a></li>
              <li><a href="#about">Про нас</a></li>
              <li><a href="#contacts">Контакти</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <a href="#payment" className="btn btn-outline">Оплата</a>
            <a href="#cabinet" className="btn btn-primary">Особистий кабінет</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;