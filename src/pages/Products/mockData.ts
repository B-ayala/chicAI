declare const require: any;
const req = require.context('../../assets/img/example', false, /\.(png|jpe?g|webp|svg)$/);

export const imagesMap: Record<string, string> = req
  .keys()
  .reduce((acc: Record<string, string>, path: string) => {
    const key = path.replace('./', '');
    const mod = req(path);
    // soporte para módulos con default export o string directo
    acc[key] = (mod && (mod.default || mod)) as string;
    return acc;
  }, {});

export const carouselImages = [
  {
    url:
      imagesMap['elegant-woman-in-modern-casual-wear-standing-in-mi.jpg'] ||
      '/elegant-woman-in-modern-casual-wear-standing-in-mi.jpg',
    title: 'Nueva Colección Primavera',
    subtitle: 'Descubre los últimos estilos',
  },
  {
    url:
      imagesMap['stylish-man-in-contemporary-streetwear-against-urb.jpg'] ||
      '/stylish-man-in-contemporary-streetwear-against-urb.jpg',
    title: 'Moda Urbana',
    subtitle: 'Estilo para cada ocasión',
  },
  {
    url:
      imagesMap['fashion-accessories-and-clothing-laid-out-aestheti.jpg'] ||
      '/fashion-accessories-and-clothing-laid-out-aestheti.jpg',
    title: 'Accesorios Exclusivos',
    subtitle: 'Completa tu look perfecto',
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: 'Chaqueta Denim Clásica',
    price: '$89.99',
    image:
      imagesMap['classic-denim-jacket-on-white-background.jpg'] ||
      '/classic-denim-jacket-on-white-background.jpg',
    category: 'Chaquetas',
  },
  {
    id: 2,
    name: 'Vestido Floral Elegante',
    price: '$129.99',
    image: imagesMap['elegant-floral-dress-on-hanger.jpg'] || '/elegant-floral-dress-on-hanger.jpg',
    category: 'Vestidos',
  },
  {
    id: 3,
    name: 'Sneakers Deportivos',
    price: '$159.99',
    image:
      imagesMap['modern-white-sneakers-product-shot.jpg'] ||
      '/modern-white-sneakers-product-shot.jpg',
    category: 'Calzado',
  },
  {
    id: 4,
    name: 'Camisa Formal Blanca',
    price: '$69.99',
    image:
      imagesMap['crisp-white-formal-shirt-folded-neatly.jpg'] ||
      '/crisp-white-formal-shirt-folded-neatly.jpg',
    category: 'Camisas',
  },
  {
    id: 5,
    name: 'Pantalón Casual',
    price: '$79.99',
    image: imagesMap['casual-khaki-pants-laid-flat.jpg'] || '/casual-khaki-pants-laid-flat.jpg',
    category: 'Pantalones',
  },
  {
    id: 6,
    name: 'Bolso de Cuero',
    price: '$199.99',
    image:
      imagesMap['luxury-leather-handbag-on-marble-surface.jpg'] ||
      '/luxury-leather-handbag-on-marble-surface.jpg',
    category: 'Accesorios',
  },
];
