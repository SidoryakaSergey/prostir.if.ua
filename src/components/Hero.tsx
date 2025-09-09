import React from 'react';
import './Hero.css';
import prostirImg from '../assets/prostir.png';

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
              <img 
                src={prostirImg} 
                alt="Простір - інтернет провайдер" 
                className="prostir-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;