# 📋 Contexto Técnico - EMC Jewelry

## 🎯 Resumen del Proyecto

**EMC Jewelry** es una plataforma de e-commerce de joyería de lujo construida con Next.js 15, TypeScript y Tailwind CSS. El proyecto implementa internacionalización completa (ES/EN), carrito de compras persistente, sistema de favoritos, y una experiencia de usuario optimizada para móviles.

---

## 🛠️ Stack Tecnológico

### Core
- **Next.js 15.5.6** con Turbopack (modo desarrollo)
- **React 19.1.0**
- **TypeScript 5** (strict mode)
- **Node.js** (versión compatible con Next.js 15)

### Estilos y UI
- **Tailwind CSS 4** (con PostCSS)
- **Framer Motion 12.23.24** (animaciones)
- **Lucide React** (iconos)
- **Radix UI Icons** (iconos adicionales)

### Fuentes
- **Playfair Display** (títulos/headings)
- **Inter** (cuerpo de texto)

### Estado y Persistencia
- **React Context API** (gestión de estado global)
- **localStorage** (persistencia de carrito y favoritos)

---

## 📁 Estructura del Proyecto

```
emcejewelry/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── [locale]/           # Rutas con internacionalización
│   │   │   ├── page.tsx        # Home (/es, /en)
│   │   │   ├── catalogo/       # Catálogo de productos
│   │   │   ├── colecciones/    # Colecciones
│   │   │   ├── nosotros/      # Sobre nosotros
│   │   │   ├── contacto/      # Contacto
│   │   │   ├── favoritos/      # Favoritos
│   │   │   └── layout.tsx      # Layout con providers
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css         # Estilos globales
│   │
│   ├── components/             # Componentes React
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Footer.tsx          # Footer
│   │   ├── Cart.tsx            # Carrito lateral
│   │   ├── CartWrapper.tsx     # Wrapper con Header/Cart
│   │   ├── CatalogGrid.tsx     # Grid de productos
│   │   ├── CollectionsGrid.tsx # Grid de colecciones
│   │   ├── HeroSection.tsx     # Hero de home
│   │   ├── FeaturedCollections.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTA.tsx
│   │   ├── FavoritesList.tsx
│   │   ├── LocaleSwitcher.tsx  # Selector de idioma
│   │   ├── SearchModal.tsx
│   │   ├── SimpleToast.tsx     # Sistema de notificaciones
│   │   ├── ToastContainer.tsx
│   │   ├── WhatsAppFloat.tsx   # Botón flotante WhatsApp
│   │   ├── LazyLoad.tsx
│   │   └── ScrollReveal.tsx
│   │
│   ├── contexts/               # Context API
│   │   ├── CartContext.tsx     # Estado del carrito
│   │   └── FavoritesContext.tsx # Estado de favoritos
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useCartFeedback.ts
│   │   └── useScrollReveal.ts
│   │
│   ├── i18n/                   # Internacionalización
│   │   ├── config.ts           # Config y tipos
│   │   └── dictionaries/
│   │       ├── es.ts           # Traducciones español
│   │       └── en.ts           # Traducciones inglés
│   │
│   └── lib/                     # Utilidades
│       └── products.ts         # Datos de productos
│
├── public/                      # Assets estáticos
│   └── hero.png
│
├── next.config.ts              # Configuración Next.js
├── tsconfig.json               # Configuración TypeScript
├── postcss.config.mjs         # Configuración PostCSS
├── package.json
└── vercel.json                 # Configuración Vercel
```

---

## 🌐 Sistema de Internacionalización (i18n)

### Estructura
- **Routing por locale**: `/es` y `/en`
- **Redirect automático**: `/` → `/es` (301)
- **Diccionarios tipados**: TypeScript garantiza que todas las traducciones existan

### Implementación

```typescript
// src/i18n/config.ts
export type Locale = "es" | "en";
export type Dict = { /* estructura completa tipada */ };

export async function getDictionary(locale: Locale): Promise<Dict>
```

### Uso en Componentes

```typescript
// En Server Components
const t = await getDictionary(locale);

// En Client Components (se pasa como prop)
<Component t={t} locale={locale} />
```

### Archivos de Traducción
- `src/i18n/dictionaries/es.ts` - Español (completo)
- `src/i18n/dictionaries/en.ts` - Inglés (completo)

**Estructura de traducciones:**
- `meta` (title, description)
- `nav` (navegación)
- `hero`, `catalog`, `collections`, `about`, `contact`, `favorites`
- `footer`, `cta`, `testimonials`

---

## 🛒 Sistema de Carrito de Compras

### Arquitectura
- **Context API** con `useReducer`
- **Persistencia en localStorage** (key: `emc-jewelry-cart`)
- **Estado sincronizado** entre pestañas

### Funcionalidades
```typescript
// CartContext proporciona:
- addItem(product)        // Agregar producto
- removeItem(productId)    // Eliminar producto
- updateQuantity(id, qty)  // Actualizar cantidad
- clearCart()              // Vaciar carrito
- toggleCart()            // Abrir/cerrar
- getTotalItems()         // Total de items
- getTotalPrice()         // Precio total
```

### Componente Cart
- **Sidebar lateral** (derecha)
- **Lista de productos** con cantidad editable
- **Checkout por WhatsApp** (genera mensaje con pedido)
- **Persistencia automática** en localStorage

---

## ❤️ Sistema de Favoritos

### Arquitectura
- **Context API** similar al carrito
- **Persistencia en localStorage** (key: `emc-jewelry-favorites`)
- **Sincronización automática**

### Funcionalidades
```typescript
// FavoritesContext proporciona:
- addFavorite(product)
- removeFavorite(productId)
- clearFavorites()
- isFavorite(productId)
- getTotalFavorites()
```

---

## 📦 Gestión de Productos

### Estructura de Datos
```typescript
interface Product {
  id: string;
  name: string;              // Nombre en español
  nameEn: string;            // Nombre en inglés
  description: string;       // Descripción en español
  descriptionEn: string;     // Descripción en inglés
  price: number;             // Precio en USD
  category: string;          // Categoría
  materials: string[];       // Materiales (ES)
  materialsEn: string[];     // Materiales (EN)
  weight?: string;           // Peso opcional
  featured?: boolean;         // Producto destacado
  images?: string[];         // URLs de imágenes (futuro)
}
```

### Categorías Disponibles
- `rings` - Anillos
- `earrings` - Aretes
- `ear-cuffs` - Ear Cuffs
- `bracelets` - Pulseras
- `chokers` - Chokers
- `sets` - Sets
- `anklets` - Tobilleras
- `pearls` - Perlas
- `colombian-emeralds` - Esmeraldas Colombianas
- `natural-stones` - Piedras Naturales

### Funciones Utilitarias
```typescript
// src/lib/products.ts
- getFeaturedProducts()      // Productos destacados
- getProductsByCategory()    // Por categoría
- formatPrice(price)         // Formateo de precio
- searchProducts(query)      // Búsqueda
```

**Total de productos**: ~80 productos en el catálogo

---

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: Stone (grises elegantes)
  - `stone-50` a `stone-900`
- **Acento**: Oro (`#d4af37`)
- **Fondo**: `stone-50` (blanco cálido)
- **Texto**: `stone-900` (negro suave)

### Tipografía
- **Headings**: Playfair Display (serif elegante)
- **Body**: Inter (sans-serif moderna)
- **Pesos**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Espaciado
- **Grid system**: 8px base
- **Padding/Margin**: Consistente con Tailwind

### Animaciones
- **Framer Motion** para transiciones suaves
- **Easing personalizado**: `[0.25, 0.46, 0.45, 0.94]` (ease-out suave)
- **Hover effects**: Scale, translate, opacity
- **Loading states**: Spinners y skeletons

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- **Mobile**: `< 768px` (default)
- **Tablet**: `md: >= 768px`
- **Desktop**: `lg: >= 1024px`
- **Large**: `xl: >= 1280px`

### Mobile-First
- **Touch targets**: Mínimo 44px (accesibilidad)
- **Viewport**: `100dvh` (dynamic viewport height)
- **Safe areas**: Soporte para iPhone (notch)
- **Gestos**: Optimizados para touch

### Optimizaciones Mobile
- Menú hamburguesa
- Filtros con scroll horizontal
- Imágenes optimizadas
- Lazy loading
- Reducción de animaciones pesadas

---

## 🔧 Configuración Next.js

### next.config.ts
```typescript
{
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compress: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },
  redirects: [
    { source: "/", destination: "/es", permanent: true }
  ]
}
```

### TypeScript
- **Strict mode**: Activado
- **Path aliases**: `@/*` → `./src/*`
- **Module resolution**: `bundler` (Next.js)

---

## 🚀 Scripts Disponibles

```bash
npm run dev      # Desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # ESLint
```

---

## 📦 Dependencias Principales

### Producción
- `next`: 15.5.6
- `react`: 19.1.0
- `react-dom`: 19.1.0
- `framer-motion`: 12.23.24
- `lucide-react`: 0.546.0
- `clsx`: 2.1.1
- `tailwind-merge`: 3.3.1

### Desarrollo
- `typescript`: ^5
- `tailwindcss`: ^4
- `eslint`: ^9
- `eslint-config-next`: 15.5.6

---

## 🎯 Patrones de Código

### Server vs Client Components
- **Server Components por defecto** (páginas, layouts)
- **Client Components** cuando se necesita interactividad (`'use client'`)
- **Context Providers** siempre son Client Components

### Manejo de Estado
- **Context API** para estado global (carrito, favoritos)
- **useState** para estado local de componentes
- **useReducer** para lógica compleja (carrito, favoritos)

### Persistencia
- **localStorage** para carrito y favoritos
- **Sincronización automática** al cargar/mutar estado
- **Manejo de errores** con try/catch

### Internacionalización
- **Server Components**: `await getDictionary(locale)`
- **Client Components**: Reciben `t` y `locale` como props
- **Productos**: Tienen `name`/`nameEn`, `description`/`descriptionEn`

### Animaciones
- **Framer Motion** para animaciones complejas
- **CSS transitions** para hover states simples
- **Respeto a `prefers-reduced-motion`**

---

## 🔌 Integraciones

### WhatsApp Business
- **Número**: +354 123 5829
- **Checkout**: Genera mensaje con pedido completo
- **Botón flotante**: Componente `WhatsAppFloat`
- **Link en Header**: "Contactar"

### Formato de Mensaje WhatsApp
```
Hola! Me interesa realizar el siguiente pedido:

• Producto 1 x2 - $70
• Producto 2 x1 - $35

Total: $105
```

---

## 🎨 Componentes Clave

### Header
- **Navegación responsive** (desktop/mobile)
- **Contador de carrito** y favoritos
- **Selector de idioma**
- **Botón WhatsApp**
- **Fixed position** con backdrop blur

### Cart
- **Sidebar lateral** (slide-in desde derecha)
- **Lista de productos** con cantidad
- **Total calculado**
- **Botón checkout WhatsApp**
- **Persistencia automática**

### CatalogGrid
- **Filtros por categoría** (scroll horizontal en mobile)
- **Grid responsive** (1/2/3 columnas)
- **Botones agregar al carrito/favoritos**
- **Animaciones de entrada**
- **Estados de carga**

### Toast System
- **Notificaciones no intrusivas**
- **Animaciones suaves**
- **Auto-dismiss**
- **Iconos personalizados**

---

## 🔐 Convenciones de Código

### Naming
- **Componentes**: PascalCase (`CatalogGrid.tsx`)
- **Hooks**: camelCase con `use` (`useCart.ts`)
- **Contextos**: PascalCase (`CartContext.tsx`)
- **Utilidades**: camelCase (`products.ts`)

### Imports
- **Path aliases**: `@/components/Header`
- **Orden**: React → Next.js → Librerías → Internos

### TypeScript
- **Tipos explícitos** en props
- **Interfaces** para objetos complejos
- **Type aliases** para uniones simples

### Estilos
- **Tailwind classes** preferidas
- **CSS custom** solo cuando es necesario
- **Responsive**: Mobile-first

---

## 📊 Estado Actual del Proyecto

### ✅ Implementado
- ✅ Sistema de i18n completo (ES/EN)
- ✅ Carrito de compras funcional
- ✅ Sistema de favoritos
- ✅ Catálogo con filtros
- ✅ Integración WhatsApp
- ✅ Diseño responsive
- ✅ Animaciones y transiciones
- ✅ Persistencia localStorage
- ✅ SEO básico (meta tags)

### 🚧 Pendiente/Futuro
- ⏳ Imágenes reales de productos
- ⏳ Sistema de búsqueda avanzada
- ⏳ Página de detalle de producto
- ⏳ Sistema de pagos
- ⏳ Panel de administración
- ⏳ CMS para productos

---

## 🐛 Debugging y Desarrollo

### Herramientas
- **React DevTools**: Para inspeccionar componentes
- **Next.js DevTools**: Para debugging de rutas
- **Browser DevTools**: Para localStorage, network, etc.

### Logs
- **Console.log** en desarrollo (eliminar en producción)
- **Error boundaries** (implementar si es necesario)

### Performance
- **Turbopack** en desarrollo (más rápido que Webpack)
- **Code splitting** automático de Next.js
- **Image optimization** con Next.js Image

---

## 📝 Notas Importantes

1. **localStorage**: Solo funciona en cliente, siempre verificar `typeof window !== 'undefined'`
2. **Server Components**: No pueden usar hooks ni Context directamente
3. **Client Components**: Deben tener `'use client'` al inicio
4. **Routing**: Next.js 15 usa App Router (no Pages Router)
5. **TypeScript**: Proyecto en strict mode, todos los tipos deben estar definidos
6. **Animaciones**: Respetar `prefers-reduced-motion` para accesibilidad

---

## 🚀 Comandos de Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
# Abre http://localhost:3000 (redirige a /es)

# Build producción
npm run build

# Servidor producción
npm run start
```

---

## 📞 Contacto y Soporte

- **WhatsApp Business**: +354 123 5829
- **Email**: info@emcjewelry.com (según diccionario)

---

**Última actualización**: Enero 2025
**Versión del proyecto**: 0.1.0

