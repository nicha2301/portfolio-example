# Portfolio - Modern Developer Portfolio (AI version)

![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.8-blueviolet)

Một website portfolio hiện đại với giao diện đẹp mắt và hiệu ứng mượt mà, xây dựng trên Next.js 15 và React 19.

## ✨ Demo

Nhánh `portfolio-example` chứa phiên bản hoàn chỉnh của portfolio mẫu.

## 🌟 Tính năng

- **Thiết kế hiện đại**: Giao diện đẹp mắt, phản hồi trên mọi thiết bị
- **Hiệu ứng đẹp mắt**: Animation và chuyển động mượt mà với Framer Motion
- **Nền động 3D**: Hệ thống nền thay đổi theo vị trí scroll và section
- **Dark Mode**: Hỗ trợ giao diện tối đẹp mắt
- **SEO tối ưu**: Metadata và cấu trúc phù hợp với SEO
- **Tương thích thiết bị**: Hiển thị tốt trên mobile, tablet và desktop
- **Form liên hệ**: Form với validation và hiệu ứng phản hồi
- **Hiệu năng cao**: Tối ưu cho Core Web Vitals

## 🛠️ Công nghệ sử dụng

- **Frontend**: Next.js 15, React 19
- **Styling**: TailwindCSS, CSS Variables
- **Animation**: Framer Motion
- **Form**: React Hook Form, Zod Validation
- **Icons**: Lucide Icons
- **Fonts**: Geist Sans, Geist Mono

## 🚀 Cài đặt và chạy

### Yêu cầu

- Node.js 18.17 hoặc cao hơn
- npm, yarn hoặc pnpm

### Cài đặt

1. Clone repository

```bash
git clone https://github.com/nicha2301/portfolio-example.git
```

2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn
# hoặc
pnpm install
```

3. Chạy phiên bản development

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

## 📝 Tùy chỉnh

### Cấu trúc project

```
portfolio/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Các section chính
│   ├── ui/               # UI components
│   └── hooks/            # Custom hooks
├── public/               # Static assets
└── styles/               # Global styles
```

### Chỉnh sửa nội dung

- Thông tin cá nhân và dự án có thể được chỉnh sửa trong các file tương ứng trong thư mục `components/sections/`
- Ảnh và tài nguyên có thể được thay thế trong thư mục `public/`
- Theme và màu sắc có thể được điều chỉnh trong `app/globals.css`

## 🌐 Triển khai

Portfolio có thể được triển khai dễ dàng trên các nền tảng như Vercel, Netlify, hoặc bất kỳ nền tảng hỗ trợ Next.js nào.

```bash
# Build production
npm run build

# Start production server
npm start
```

## 📄 License

[MIT](LICENSE)

---

Thiết kế và phát triển với 💜
