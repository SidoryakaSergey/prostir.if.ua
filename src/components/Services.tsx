import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Високошвидкісний Інтернет',
      description: 'Оптичний інтернет до 100 Мбіт/с. Стабільне з\'єднання для роботи, навчання та розваг.',
      features: ['Без обмежень трафіку', 'Стабільна швидкість', '24/7 підтримка']
    },
    {
      icon: '📺',
      title: 'Інтернет Телебачення Trinity',
      description: 'Сучасна OTT технологія для перегляду телебачення через інтернет на будь-якому пристрої.',
      features: ['SmartTV підтримка', 'HD якість', 'Мобільні додатки']
    },
    {
      icon: '⚡',
      title: 'Інтернет без світла',
      description: 'Наша PON мережа працює навіть при відключенні електроенергії.',
      features: ['Автономна мережа', 'Резервне живлення', 'Безперебійна робота']
    },
    {
      icon: '💳',
      title: 'Зручна оплата',
      description: 'Миттєве поповнення через Privat24, Portmone та інші платіжні системи.',
      features: ['Онлайн оплата', 'Безкоштовний тимчасовий платіж', 'Гнучкі тарифи']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Наші послуги</h2>
          <p className="section-subtitle">
            Комплексні рішення для вашого цифрового життя
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">Детальніше</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;