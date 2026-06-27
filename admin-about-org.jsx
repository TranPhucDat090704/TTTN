import React from 'react';

export const AdminAboutOrg = ({ children, gridCols = 2 }) => {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f9fafb' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {children}
      </div>
    </section>
  );
};