import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Швидкісний Інтернет в <span className="highlight">Снятині</span>
            </h1>
            <p className="hero-subtitle">
              Надійний оптичний інтернет, що працює навіть без світла. 
              Підключайтесь до мережі «Простір» та отримуйте стабільний зв'язок 24/7.
            </p>
            <div className="hero-features">
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <span>Швидкість до 100 Мбіт/с</span>
              </div>
              <div className="feature">
                <div className="feature-icon">🔌</div>
                <span>Працює без світла</span>
              </div>
              <div className="feature">
                <div className="feature-icon">📺</div>
                <span>Інтернет телебачення</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#tariffs" className="btn btn-primary btn-large">
                Обрати тариф
              </a>
              <a href="#contact" className="btn btn-outline btn-large">
                Зв'язатись з нами
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visual">
              <div className="network-equipment">
                <svg viewBox="0 0 240 160" className="router-svg">
                  {/* Основной корпус роутера */}
                  <rect x="40" y="60" width="160" height="80" rx="8" fill="#2c5aa0" stroke="#1e40af" strokeWidth="2"/>
                  
                  {/* Передняя панель */}
                  <rect x="45" y="65" width="150" height="70" rx="4" fill="#3b82f6"/>
                  
                  {/* LED индикаторы */}
                  <circle cx="60" cy="80" r="3" fill="#10b981" className="led-green"/>
                  <circle cx="75" cy="80" r="3" fill="#f59e0b" className="led-orange"/>
                  <circle cx="90" cy="80" r="3" fill="#ef4444" className="led-red"/>
                  
                  {/* Порты Ethernet */}
                  <rect x="120" y="95" width="12" height="8" rx="1" fill="#1f2937"/>
                  <rect x="135" y="95" width="12" height="8" rx="1" fill="#1f2937"/>
                  <rect x="150" y="95" width="12" height="8" rx="1" fill="#1f2937"/>
                  <rect x="165" y="95" width="12" height="8" rx="1" fill="#1f2937"/>
                  
                  {/* Антенны */}
                  <line x1="70" y1="60" x2="70" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="170" y1="60" x2="170" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* WiFi волны */}
                  <path d="M 120 45 Q 120 35 130 35 Q 140 35 140 45" stroke="#f59e0b" strokeWidth="2" fill="none" className="wifi-wave"/>
                  <path d="M 115 50 Q 115 25 130 25 Q 145 25 145 50" stroke="#f59e0b" strokeWidth="2" fill="none" className="wifi-wave"/>
                  <path d="M 110 55 Q 110 15 130 15 Q 150 15 150 55" stroke="#f59e0b" strokeWidth="2" fill="none" className="wifi-wave"/>
                  
                  {/* Логотип или текст */}
                  <text x="120" y="120" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">PROSTIR</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;