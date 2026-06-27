import React from 'react';

export const AdminSpecialties = ({ title, cards = [], gridCols = 3 }) => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-3xl font-bold mb-10">{title}</h2>
      <div className={`grid gap-6`} style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}>
        {cards.map((card, index) => (
          <div key={index} style={{ 
            borderRadius: `${card.borderRadius || 20}px`, 
            background: 'linear-gradient(135deg, #007bff, #00d2ff)',
            padding: '24px',
            color: 'white',
            textAlign: 'center'
          }}>
            <img src={card.icon} alt="icon" style={{ width: '50px', margin: '0 auto 15px' }} />
            <h3 className="font-bold mb-4">{card.title}</h3>
            <button style={{ 
              padding: '8px 16px', 
              borderRadius: `${card.btnRadius || 8}px`,
              background: 'rgba(255,255,255,0.2)' 
            }}>
              {card.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};