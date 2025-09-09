import React from 'react';
import './ContactBar.css';

const ContactBar: React.FC = () => {
  const phones = [
    { number: '097 921 65 22', operator: 'Kyivstar', color: '#FFD700' },
    { number: '097 812 80 28', operator: 'Kyivstar', color: '#FFD700' },
    { number: '099 495 15 35', operator: 'Vodafone', color: '#E60012' }
  ];

  return (
    <div className="contact-bar">
      <div className="container">
        <div className="contact-bar-content">
          <div className="working-hours">
            <span className="hours-icon">🕒</span>
            <span>Пн-Пт: 8:00-18:00</span>
          </div>
          
          <div className="phones-bar">
            {phones.map((phone, index) => (
              <a 
                key={index}
                href={`tel:+38${phone.number.replace(/\s/g, '')}`}
                className="phone-link"
                style={{ '--operator-color': phone.color } as React.CSSProperties}
              >
                <span className="phone-icon">📞</span>
                <span className="phone-number">{phone.number}</span>
              </a>
            ))}
          </div>
          
          <div className="email-contact">
            <span className="email-icon">📧</span>
            <span>info@prostir.if.ua</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;