import React from 'react';

export const AdminSpecialties = ({ title, gridCols = 3, cards = [] }) => {
  return (
    <section style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '40px', color: '#1e3a8a', fontSize: '24px' }}>{title}</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`, 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {cards.map((card, index) => (
          <div key={index} style={{ 
            background: 'linear-gradient(135deg, #2563eb, #1e40af)',
            borderRadius: `${card.borderRadius || 20}px`,
            padding: '30px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s'
          }}>
            {card.icon && <img src={card.icon} alt="icon" style={{ width: '50px', marginBottom: '15px' }} />}
            <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>{card.title}</h3>
            <button style={{ 
              background: 'rgba(255,255,255,0.2)', 
              border: 'none', 
              padding: '10px 20px',
              borderRadius: `${card.btnRadius || 10}px`,
              color: 'white',
              cursor: 'pointer'
            }}>
              {card.btnText || 'Xem hoạt động →'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};