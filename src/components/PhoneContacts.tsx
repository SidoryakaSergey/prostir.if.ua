import React from 'react';
import './PhoneContacts.css';

const PhoneContacts: React.FC = () => {
  const phones = [
    {
      number: '097 921 65 22',
      operator: 'Kyivstar',
      color: '#FFD700',
      icon: '📱'
    },
    {
      number: '097 812 80 28', 
      operator: 'Kyivstar',
      color: '#FFD700',
      icon: '📱'
    },
    {
      number: '099 495 15 35',
      operator: 'Vodafone',
      color: '#E60012',
      icon: '📞'
    }
  ];

  const handleCall = (number: string) => {
    window.open(`tel:+38${number.replace(/\s/g, '')}`, '_self');
  };

  return (
    <div className="phone-contacts">
      <h4 className="phones-title">Зв'яжіться з нами:</h4>
      <div className="phones-list">
        {phones.map((phone, index) => (
          <div 
            key={index} 
            className="phone-item"
            onClick={() => handleCall(phone.number)}
            style={{ '--operator-color': phone.color } as React.CSSProperties}
          >
            <div className="phone-icon">{phone.icon}</div>
            <div className="phone-info">
              <div className="phone-number">{phone.number}</div>
              <div className="phone-operator">{phone.operator}</div>
            </div>
            <div className="call-button">
              📞
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneContacts;