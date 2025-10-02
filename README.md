# Laundri - AI-Powered Fashion Label Creation Platform

A modern Single Page Application (SPA) built with TypeScript and React that enables users to create fashion labels/brands or collections, design products using pre-made fabrics and templates, and connect with on-demand suppliers like Printful and AliExpress.

## Features

### 🎨 AI-Powered Fashion Designer
- Interactive chat-based interface for fashion design assistance
- Intelligent responses for clothing categories (Headwear, Shirts, Pants, Jackets, Footwear, Underwear)
- Real-time conversation with contextual design recommendations
- Supplier and fabric selection guidance

### 👕 Clothing Categories
Six main clothing categories linking to the [laundri-app repository](https://github.com/jobbyist/laundri-app):
- **Headwear** - Caps, beanies, bucket hats, and more
- **Shirts** - T-shirts, button-ups, long sleeves
- **Pants** - Denim, chinos, cargo, joggers
- **Jackets** - Bombers, hoodies, windbreakers
- **Footwear** - Shoes and sneakers
- **Underwear** - Essentials and basics

### 📱 Progressive Web App (PWA)
- Fully installable on mobile and desktop devices
- Offline functionality with service worker caching
- Fast loading with optimized assets
- Responsive design for all screen sizes

## Technology Stack

- **Framework**: React 18.2
- **Language**: TypeScript 5.3
- **Build Tool**: Vite 5.4
- **PWA**: Vite PWA Plugin with Workbox
- **Styling**: CSS3 with custom animations
- **Fonts**: Roboto Mono, Roboto Condensed

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jobbyist/laundri.git
cd laundri
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
laundri/
├── src/
│   ├── components/
│   │   ├── AIChat.tsx           # AI-powered chat interface
│   │   ├── AIChat.css
│   │   ├── CategorySection.tsx  # Clothing categories display
│   │   └── CategorySection.css
│   ├── App.tsx                  # Main application component
│   ├── App.css
│   └── main.tsx                 # Application entry point
├── public/                      # Static assets (images, logos)
├── index.html                   # HTML entry point
├── manifest.json               # PWA manifest
├── pwabuilder-sw.js            # Service worker
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies

```

## PWA Features

The application is a fully functional Progressive Web App with:

- **Offline Support**: Works without internet connection after first visit
- **Installable**: Can be installed on home screen (mobile) or desktop
- **Fast Loading**: Optimized caching strategies
- **App-like Experience**: Standalone mode without browser UI

## AI Chat Interface

The AI Fashion Designer chat provides:

- Contextual responses based on clothing categories
- Fabric and material recommendations
- Supplier connection guidance (Printful, AliExpress)
- Brand creation advice
- Product design assistance

## Deployment

The application can be deployed to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

Simply deploy the contents of the `dist/` folder after building.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is part of the Laundri platform.

## Links

- [Laundri App Repository](https://github.com/jobbyist/laundri-app)
- [Instagram](https://www.instagram.com/Laundri_coza)
- [Facebook](https://www.facebook.com/Laundri.co.za)
- [WhatsApp Channel](https://whatsapp.com/channel/0029VaJg2Ix3GJP7qt8U7p0m)

## Contact

For questions or support, visit our [contact page](https://laundri.co.za/contact.html).
