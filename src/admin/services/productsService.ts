// Tipos para los productos
export type ProductCategory = 'Calzado' | 'Indumentaria' | 'Accesorios';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  priceNumeric: number;
  stock: number;
  image: string;
  description?: string;
  sku?: string;
  sizes?: string[];
  colors?: string[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  discount?: number;
}

// Mock data - JSON structure lista para integración con backend
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'PROD-001',
    name: 'Zapatillas Deportivas',
    category: 'Calzado',
    price: '$89.99',
    priceNumeric: 89.99,
    stock: 25,
    image: 'https://picsum.photos/id/1011/100/100',
    description: 'Zapatillas deportivas de alta calidad con tecnología de amortiguación avanzada',
    sku: 'ZAP-DEP-001',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['Negro', 'Blanco', 'Azul', 'Rojo'],
    weight: 0.8,
    dimensions: { length: 30, width: 15, height: 12 },
    createdAt: '2025-09-15T10:00:00Z',
    updatedAt: '2025-10-20T14:30:00Z',
    isActive: true,
    discount: 10,
  },
  {
    id: 'PROD-002',
    name: 'Camiseta Casual',
    category: 'Indumentaria',
    price: '$29.99',
    priceNumeric: 29.99,
    stock: 50,
    image: 'https://picsum.photos/id/1012/100/100',
    description: 'Camiseta casual de algodón 100% orgánico, perfecta para uso diario',
    sku: 'CAM-CAS-002',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanco', 'Negro', 'Gris', 'Azul marino', 'Verde'],
    weight: 0.2,
    dimensions: { length: 25, width: 20, height: 2 },
    createdAt: '2025-09-18T11:30:00Z',
    updatedAt: '2025-10-22T09:15:00Z',
    isActive: true,
  },
  {
    id: 'PROD-003',
    name: 'Pantalón Jeans',
    category: 'Indumentaria',
    price: '$59.99',
    priceNumeric: 59.99,
    stock: 0,
    image: 'https://picsum.photos/id/1012/100/100',
    description: 'Pantalón jeans de mezclilla premium con corte slim fit',
    sku: 'PANT-JEA-003',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Azul oscuro', 'Azul claro', 'Negro'],
    weight: 0.6,
    dimensions: { length: 35, width: 25, height: 3 },
    createdAt: '2025-09-20T09:45:00Z',
    updatedAt: '2025-10-25T16:20:00Z',
    isActive: false,
  },
  {
    id: 'PROD-011',
    name: 'Vestido de Verano',
    category: 'Indumentaria',
    price: '$49.99',
    priceNumeric: 49.99,
    stock: 30,
    image: 'https://picsum.photos/id/1012/100/100',
    description: 'Vestido ligero y fresco ideal para el verano, disponible en varios colores',
    sku: 'VES-VER-011',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Amarillo', 'Blanco', 'Rosa', 'Azul'],
    weight: 0.25,
    dimensions: { length: 100, width: 50, height: 2 },
    createdAt: '2025-10-12T10:00:00Z',
    updatedAt: '2025-10-27T12:00:00Z',
    isActive: true,
  },
  {
    id: 'PROD-012',
    name: 'Chaqueta de Cuero Sintético',
    category: 'Indumentaria',
    price: '$89.99',
    priceNumeric: 89.99,
    stock: 20,
    image: 'https://picsum.photos/id/1012/100/100',
    description: 'Chaqueta de cuero sintético con cierre frontal y bolsillos laterales',
    sku: 'CHA-CUE-012',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Marrón'],
    weight: 0.8,
    dimensions: { length: 60, width: 50, height: 5 },
    createdAt: '2025-10-15T09:00:00Z',
    updatedAt: '2025-10-28T08:30:00Z',
    isActive: true,
    discount: 10,
  },
  {
    id: 'PROD-013',
    name: 'Sombrero de Paja',
    category: 'Accesorios',
    price: '$24.99',
    priceNumeric: 24.99,
    stock: 40,
    image: 'https://picsum.photos/id/1012/100/100',
    description: 'Sombrero de paja ideal para protegerse del sol en verano',
    sku: 'SOM-PAJ-013',
    sizes: ['Única'],
    colors: ['Beige', 'Blanco', 'Marrón'],
    weight: 0.2,
    dimensions: { length: 30, width: 30, height: 12 },
    createdAt: '2025-10-18T10:30:00Z',
    updatedAt: '2025-10-28T11:45:00Z',
    isActive: true,
  },
  {
    id: 'PROD-014',
    name: 'Bufanda de Lana',
    category: 'Accesorios',
    price: '$19.99',
    priceNumeric: 19.99,
    stock: 50,
    image: 'https://picsum.photos/id/1012/100/100',
    description: 'Bufanda de lana suave para los días fríos',
    sku: 'BUF-LAN-014',
    sizes: ['Única'],
    colors: ['Rojo', 'Azul', 'Gris', 'Negro'],
    weight: 0.15,
    dimensions: { length: 180, width: 30, height: 1 },
    createdAt: '2025-10-20T09:00:00Z',
    updatedAt: '2025-10-28T12:00:00Z',
    isActive: true,
  },
];
