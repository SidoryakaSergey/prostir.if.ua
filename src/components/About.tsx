import React from 'react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { value: '10+', label: 'Років на ринку' },
    { value: '1000+', label: 'Задоволених клієнтів' },
    { value: '99.9%', label: 'Час безвідмовної роботи' },
    { value: '24/7', label: 'Технічна підтримка' }
  ];

  const advantages = [
    {
      icon: '🏆',
      title: 'Якісний сервіс',
      description: 'Спеціалісти нашої компанії регулярно підвищують свій професійний рівень для надання найкращого сервісу.'
    },
    {
      icon: '⚡',
      title: 'Сучасні технології',
      description: 'Використовуємо найновіші технології оптичного зв\'язку для забезпечення стабільного і швидкого інтернету.'
    },
    {
      icon: '💰',
      title: 'Доступні ціни',
      description: 'Пропонуємо конкурентні тарифи і гнучку систему знижок для постійних клієнтів.'
    },
    {
      icon: '🛡️',
      title: 'Надійність',
      description: 'Наша мережа забезпечує безперебійну роботу навіть в умовах аварійних відключень електроенергії.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              Про компанію <span className="highlight">Простір</span>
            </h2>
            <div className="about-description">
              <p>
                <strong>ФОП Юрійчук Ольга Ярославівна</strong> надає послуги в сфері оптичного 
                високошвидкісного доступу до мережі Інтернет в м. Снятин та навколишніх 
                селах Івано-Франківської та Чернівецької областей.
              </p>
              <p>
                За якісну роботу протягом тривалого часу користувачі визнають «Простір» 
                як надійного та доступного інтернет-провайдера.
              </p>
              <p>
                Головний акцент ми ставимо на те, щоб кожен з наших клієнтів був задоволений 
                нашими послугами. Ми постійно підвищуємо якість сервісу, аби досягти 
                максимального комфорту для наших абонентів.
              </p>
            </div>
            
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="company-photo">
              <div className="photo-placeholder">
                <div className="building-icon">🏢</div>
                <p>Наш офіс в центрі Снятина</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="advantages">
          <h3 className="advantages-title">Чому обирають нас</h3>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-item">
                <div className="advantage-icon">{advantage.icon}</div>
                <h4>{advantage.title}</h4>
                <p>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;