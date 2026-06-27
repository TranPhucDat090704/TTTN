import React from 'react';
import AdminHeading from './components/admin-heading';
import AdminText from './components/admin-text';
import AdminImage from './components/admin-image';
import AdminSection from './components/admin-section';
import AdminHero from './components/admin-hero';
import { AdminSpecialties } from './components/admin-specialties';
import { AdminAboutOrg } from './components/admin-about-org';

export const puckConfig = {
  components: {
    Heading: {
      label: 'Tiêu đề',
      fields: {
        content: { type: 'text', label: 'Nội dung', contentEditable: true },
        level: { type: 'select', label: 'Cấp độ', options: [{label: 'H1', value: 1}, {label: 'H2', value: 2}, {label: 'H3', value: 3}] },
        align: { type: 'select', label: 'Căn lề', options: [{label: 'Trái', value: 'left'}, {label: 'Giữa', value: 'center'}, {label: 'Phải', value: 'right'}] }
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left' },
      render: (props) => <AdminHeading {...props} />
    },

    Text: {
      label: 'Văn bản',
      fields: {
        content: { type: 'textarea', label: 'Nội dung', contentEditable: true },
        align: { type: 'select', label: 'Căn lề', options: [{label: 'Trái', value: 'left'}, {label: 'Giữa', value: 'center'}, {label: 'Phải', value: 'right'}, {label: 'Đều', value: 'justify'}] }
      },
      defaultProps: { content: 'Nhập văn bản ở đây...', align: 'left' },
      render: (props) => <AdminText {...props} />
    },

    Image: {
      label: 'Ảnh',
      fields: {
        src: { type: 'text', label: 'URL ảnh' },
        alt: { type: 'text', label: 'Alt text' },
        borderRadius: { type: 'text', label: 'Bo góc', default: '0' },
        align: { type: 'select', label: 'Căn lề', options: [{label: 'Trái', value: 'left'}, {label: 'Giữa', value: 'center'}, {label: 'Phải', value: 'right'}] }
      },
      defaultProps: { src: 'https://via.placeholder.com/800x400', alt: 'Ảnh', align: 'center' },
      render: (props) => <AdminImage {...props} />
    },

    Section: {
      label: 'Khoảng (Section)',
      fields: {
        container: { type: 'select', label: 'Chiều rộng', options: [{label: 'Medium', value: 'md'}, {label: 'Large', value: 'lg'}] },
        content: { type: 'slot' }
      },
      defaultProps: { container: 'lg', content: [] },
      render: (props) => <AdminSection {...props} />
    },

    Hero: {
      label: 'Hero Section',
      fields: {
        title: { type: 'text', label: 'Tiêu đề' },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn' },
        boxStyle: {
          type: 'object',
          label: 'Cụm nội dung (Card)',
          objectFields: {
            borderRadius: { type: 'number', label: 'Bo góc (px)', default: 20 },
            bgColor: { type: 'text', label: 'Màu nền Card', default: 'rgba(255,255,255,0.7)' }
          }
        },
        buttons: {
          type: 'array',
          label: 'Danh sách nút',
          arrayFields: {
            text: { type: 'text', label: 'Chữ' },
            url: { type: 'text', label: 'URL' },
            style: { type: 'select', label: 'Style', options: [{label: 'Primary', value: 'primary'}, {label: 'Outline', value: 'outline'}] }
          },
          getItemSummary: (item) => item.text
        }
      },
      defaultProps: {
        title: 'Chào mừng',
        subtitle: 'Mô tả sản phẩm',
        buttons: [{ text: 'Liên hệ', url: '#', style: 'primary' }]
      },
      render: (props) => <AdminHero {...props} />
    },

    Specialties: {
      label: 'Danh sách chuyên môn',
      fields: {
        title: { type: 'text', label: 'Tiêu đề lớn' },
        gridCols: { type: 'number', label: 'Số cột', default: 3 },
        cards: {
          type: 'array',
          label: 'Danh sách các ban',
          arrayFields: {
            icon: { type: 'text', label: 'URL Icon' },
            title: { type: 'text', label: 'Tên ban' },
            btnText: { type: 'text', label: 'Chữ trên nút' },
            borderRadius: { type: 'number', label: 'Bo góc card (px)', default: 20 },
            btnRadius: { type: 'number', label: 'Bo góc nút (px)', default: 10 }
          },
          getItemSummary: (item) => item.title
        }
      },
      defaultProps: {
        title: 'CÁC BAN CHUYÊN MÔN',
        gridCols: 3,
        cards: [{ title: 'Ban Kinh tế', btnText: 'Xem hoạt động →', borderRadius: 20 }]
      },
      render: (props) => <AdminSpecialties {...props} />
    },

    AboutOrg: {
      label: 'Về CLB & Tổ chức',
      fields: {
        gridCols: { type: 'number', label: 'Số cột', default: 2 },
        content: { type: 'slot' }
      },
      defaultProps: {
        gridCols: 2
      },
      render: (props) => <AdminAboutOrg {...props} />
    }
  },

  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image'] },
    { title: 'Layout', components: ['Section', 'AboutOrg'] },
    { title: 'Nâng cao', components: ['Hero', 'Specialties'] }
  ],

  root: {
    render: ({ children }) => <div className="min-h-screen">{children}</div>
  }
};

export default puckConfig;