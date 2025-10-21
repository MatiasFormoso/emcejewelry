# EMC Jewelry - Elegant Jewelry Website

A modern, responsive jewelry e-commerce website built with Next.js 15, featuring elegant design, internationalization (ES/EN), and WhatsApp integration for purchases.

## 🌟 Features

- **Modern Design**: Elegant luxury jewelry aesthetic with custom animations
- **Internationalization**: Full Spanish and English support
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **E-commerce Frontend**: Shopping cart and favorites system
- **WhatsApp Integration**: Direct purchase via WhatsApp
- **Performance Optimized**: Fast loading with Next.js 15 optimizations
- **SEO Ready**: Meta tags and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.6 with Turbopack
- **Styling**: Tailwind CSS 4 with custom theme
- **Language**: TypeScript
- **State Management**: React Context API
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter
- **Deployment**: Vercel

## 📱 Pages

- **Home**: Hero section with featured collections
- **Catalog**: Product grid with filtering
- **Collections**: Curated jewelry collections
- **Favorites**: User's favorite products
- **About Us**: Company information
- **Contact**: Contact form and information

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
│   └── layout.tsx        # Root layout
├── components/            # React components
├── contexts/             # React Context providers
├── i18n/                 # Internationalization
├── lib/                  # Utilities and data
└── public/               # Static assets
```

## 🌐 Internationalization

The website supports both Spanish and English:

- **Spanish**: `/es` (default)
- **English**: `/en`

All text content is dynamically translated based on the selected language.

## 🛒 E-commerce Features

- **Shopping Cart**: Add/remove items, quantity management
- **Favorites**: Save products for later
- **WhatsApp Checkout**: Complete purchases via WhatsApp
- **Product Filtering**: Filter by category (rings, necklaces, etc.)

## 🎨 Design System

- **Colors**: Gold primary, elegant grays
- **Typography**: Playfair Display (headings) + Inter (body)
- **Animations**: Smooth transitions and hover effects
- **Layout**: Clean, minimalist luxury aesthetic

## 📦 Deployment

This project is configured for automatic deployment on Vercel:

1. Push to main branch
2. Vercel automatically builds and deploys
3. Available at `emcejewelry.vercel.app`

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customization
- Update product data in `src/lib/products.ts`
- Modify translations in `src/i18n/dictionaries/`
- Customize styling in `src/app/globals.css`

## 📄 License

This project is proprietary to EMC Jewelry.

## 📞 Support

For technical support or questions about the website, please contact the development team.

---

**EMC Jewelry** - Creating elegant and sophisticated jewelry for special moments.