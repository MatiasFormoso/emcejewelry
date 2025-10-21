// src/lib/products.ts
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number; // Precio en USD
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  images: string[];
  featured: boolean;
  inStock: boolean;
  materials: string[];
  materialsEn: string[];
  weight?: string;
  dimensions?: string;
}

export const products: Product[] = [
  {
    id: 'ring-gold-classic',
    name: 'Anillo de Oro Clásico',
    nameEn: 'Classic Gold Ring',
    description: 'Anillo de oro de 18k con diseño clásico y elegante',
    descriptionEn: '18k gold ring with classic and elegant design',
    price: 450,
    category: 'rings',
    images: ['/products/ring-gold-classic-1.jpg', '/products/ring-gold-classic-2.jpg'],
    featured: true,
    inStock: true,
    materials: ['Oro 18k', 'Diamante'],
    materialsEn: ['18k Gold', 'Diamond'],
    weight: '3.2g',
    dimensions: 'Talla 6-10'
  },
  {
    id: 'necklace-pearl-elegant',
    name: 'Collar de Perlas Elegante',
    nameEn: 'Elegant Pearl Necklace',
    description: 'Collar de perlas naturales con cierre de oro',
    descriptionEn: 'Natural pearl necklace with gold clasp',
    price: 680,
    category: 'necklaces',
    images: ['/products/necklace-pearl-1.jpg', '/products/necklace-pearl-2.jpg'],
    featured: true,
    inStock: true,
    materials: ['Perlas naturales', 'Oro 14k'],
    materialsEn: ['Natural Pearls', '14k Gold'],
    weight: '12.5g',
    dimensions: '45cm'
  },
  {
    id: 'earrings-diamond-stud',
    name: 'Aretes de Diamante',
    nameEn: 'Diamond Stud Earrings',
    description: 'Aretes de diamante con montura de oro blanco',
    descriptionEn: 'Diamond earrings with white gold setting',
    price: 1200,
    category: 'earrings',
    images: ['/products/earrings-diamond-1.jpg', '/products/earrings-diamond-2.jpg'],
    featured: true,
    inStock: true,
    materials: ['Diamante 0.5ct', 'Oro blanco 18k'],
    materialsEn: ['0.5ct Diamond', '18k White Gold'],
    weight: '2.8g',
    dimensions: '6mm'
  },
  {
    id: 'bracelet-tennis-gold',
    name: 'Pulsera Tennis de Oro',
    nameEn: 'Tennis Gold Bracelet',
    description: 'Pulsera tennis con diamantes engastados en oro amarillo',
    descriptionEn: 'Tennis bracelet with diamonds set in yellow gold',
    price: 2500,
    category: 'bracelets',
    images: ['/products/bracelet-tennis-1.jpg', '/products/bracelet-tennis-2.jpg'],
    featured: true,
    inStock: true,
    materials: ['Diamantes 2ct', 'Oro 18k'],
    materialsEn: ['2ct Diamonds', '18k Gold'],
    weight: '15.2g',
    dimensions: '18cm'
  },
  {
    id: 'ring-engagement-solitaire',
    name: 'Anillo de Compromiso Solitario',
    nameEn: 'Solitaire Engagement Ring',
    description: 'Anillo de compromiso con diamante solitario en oro blanco',
    descriptionEn: 'Engagement ring with solitaire diamond in white gold',
    price: 3500,
    category: 'rings',
    images: ['/products/ring-engagement-1.jpg', '/products/ring-engagement-2.jpg'],
    featured: true,
    inStock: true,
    materials: ['Diamante 1ct', 'Oro blanco 18k'],
    materialsEn: ['1ct Diamond', '18k White Gold'],
    weight: '4.5g',
    dimensions: 'Talla 5-9'
  },
  {
    id: 'necklace-choker-diamond',
    name: 'Choker de Diamantes',
    nameEn: 'Diamond Choker',
    description: 'Choker elegante con diamantes engastados',
    descriptionEn: 'Elegant choker with set diamonds',
    price: 1800,
    category: 'necklaces',
    images: ['/products/necklace-choker-1.jpg', '/products/necklace-choker-2.jpg'],
    featured: false,
    inStock: true,
    materials: ['Diamantes 1.2ct', 'Oro blanco 18k'],
    materialsEn: ['1.2ct Diamonds', '18k White Gold'],
    weight: '8.3g',
    dimensions: '38cm'
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const formatPrice = (price: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
