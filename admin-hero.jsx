import React from 'react';

// Hàm xử lý background (để dùng chung)
const getBackgroundStyle = (bg = {}) => {
  if (bg.type === 'gradient') {
    return { background: `linear-gradient(${bg.gradientDirection || 'to bottom right'}, ${bg.gradientFrom || '#667eea'}, ${bg.gradientTo || '#764ba2'})` };
  }
  if (bg.type === 'image' && bg.imageUrl) {
    return { backgroundImage: `url('${bg.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' };
  }
  return { backgroundColor: bg.color || '#ffffff' };
};

// Component chính
export const AdminHero = ({ 
  title, 
  subtitle, 
  buttons = [], 
  background = {}, 
  layout = { align: 'center' }, 
  borderRadius = 20 // Bo góc mặc định 20px
}) => {
  
  // Logic căn lề
  const alignMap = { 'left': 'flex-start', 'center': 'center', 'right': 'flex-end' };
  const justifyContent = alignMap[layout.align] || 'center';
  const textAlign = layout.align || 'center';

  return (
    <div style={{
      ...getBackgroundStyle(background),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Căn giữa theo chiều dọc của màn hình
      alignItems: justifyContent, // Căn trái/phải/giữa theo chiều ngang (YÊU CẦU CỦA CẤP TRÊN)
      minHeight: '400px',
      padding: '40px',
      width: '100%'
    }}>
      {/* Cụm nội dung "Sen Hồng" */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền card mờ
        borderRadius: `${borderRadius}px`, // Bo góc cụm nội dung (YÊU CẦU CỦA CẤP TRÊN)
        padding: '30px',
        textAlign: textAlign,
        maxWidth: '600px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {title && <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>{title}</h1>}
        {subtitle && <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#666' }}>{subtitle}</p>}
        
        {/* Nút bấm */}
        <div style={{ display: 'flex', justifyContent: textAlign === 'center' ? 'center' : (textAlign === 'right' ? 'flex-end' : 'flex-start'), gap: '10px' }}>
          {buttons.map((btn, index) => (
            <button key={index} style={{ 
              padding: '10px 20px', 
              borderRadius: '8px', 
              border: 'none', 
              backgroundColor: btn.style === 'outline' ? 'transparent' : '#3b82f6',
              border: btn.style === 'outline' ? '2px solid #3b82f6' : 'none',
              color: btn.style === 'outline' ? '#3b82f6' : '#fff',
              cursor: 'pointer' 
            }}>
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHero;