import React from 'react';
import './Offers.css';

const Offers: React.FC = () => {
  const offers = [
    {
      title: 'Акція "5+1"',
      subtitle: 'Оплатіть 5 місяців - отримайте 6-й безкоштовно!',
      description: 'Оплатіть абонплату за п\'ять місяців наперед і отримаєте місяць в подарунок. Додаткова перевага - захист від підвищення тарифів.',
      discount: '17%',
      color: 'blue',
      features: ['Знижка 17%', 'Захист від підвищення тарифів', 'Доступно для всіх тарифів']
    },
    {
      title: 'Акція "10+2"',
      subtitle: 'Річна оплата з максимальною вигодою!',
      description: 'Оплатіть абонплату за десять місяців і отримайте два місяці в подарунок. Найвигідніша пропозиція року!',
      discount: '20%',
      color: 'orange',
      features: ['Знижка 20%', 'Захист на цілий рік', 'Максимальна економія']
    },
    {
      title: 'Безкоштовний платіж',
      subtitle: 'Тимчасовий доступ до 4 числа',
      description: 'Не встигли заплатити? Скористайтесь безкоштовним тимчасовим платежем через особистий кабінет.',
      discount: 'FREE',
      color: 'green',
      features: ['Доступ до 4 числа', 'Через особистий кабінет', 'Для діючих абонентів']
    },
    {
      title: 'Денний тариф',
      subtitle: '10 грн за кожен день до кінця місяця',
      description: 'Потрібен інтернет на декілька днів? Оплачуйте по 10 грн за кожен день до кінця місяця.',
      discount: '10₴',
      color: 'purple',
      features: ['Гнучка оплата', 'Без переплат', 'Зручно для подорожей']
    }
  ];

  return (
    <section className="offers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Спеціальні пропозиції</h2>
          <p className="section-subtitle">
            Економте з нашими вигідними акціями та спеціальними тарифами
          </p>
        </div>
        
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className={`offer-card offer-${offer.color}`}>
              <div className="offer-badge">
                <span className="badge-text">{offer.discount}</span>
                <span className="badge-label">знижка</span>
              </div>
              
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-subtitle">{offer.subtitle}</p>
                <p className="offer-description">{offer.description}</p>
                
                <ul className="offer-features">
                  {offer.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="offer-btn">
                  Скористатись пропозицією
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="offers-notice">
          <div className="notice-content">
            <h4>Увага абоненти!</h4>
            <p>
              З метою забезпечення надійним зв'язком та підвищення енергонезалежності нашої мережі, 
              у зв'язку з підвищенням вартості обслуговування, модернізації та ремонту мережі 
              ми оновлюємо тарифні плани з 01.05.2025. Дякуємо за розуміння!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;