import React, { useState } from 'react';
import './Header.css';
import logoImg from '../assets/logo.jpg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logoImg} alt="Простір" className="logo-img" />
            <span className="logo-text">Простір</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <ul className="nav-list">
              <li><a href="#home">Головна</a></li>
              <li><a href="#services">Послуги</a></li>
              <li><a href="#tariffs">Тарифи</a></li>
              <li><a href="#tv">Телебачення</a></li>
              <li><a href="#about">Про нас</a></li>
              <li><a href="#contacts">Контакти</a></li>
            </ul>
          </nav>
          
          {/* Desktop Actions */}
          <div className="header-actions desktop-actions">
            <a href="#payment" className="btn btn-outline">Оплата</a>
            <a href="#cabinet" className="btn btn-primary">Особистий кабінет</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-content">
            <ul className="mobile-nav-list">
              <li><a href="#home" onClick={closeMobileMenu}>Головна</a></li>
              <li><a href="#services" onClick={closeMobileMenu}>Послуги</a></li>
              <li><a href="#tariffs" onClick={closeMobileMenu}>Тарифи</a></li>
              <li><a href="#tv" onClick={closeMobileMenu}>Телебачення</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>Про нас</a></li>
              <li><a href="#contacts" onClick={closeMobileMenu}>Контакти</a></li>
            </ul>
            
            <div className="mobile-actions">
              <a href="#payment" className="btn btn-outline" onClick={closeMobileMenu}>Оплата</a>
              <a href="#cabinet" className="btn btn-primary" onClick={closeMobileMenu}>Особистий кабінет</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;