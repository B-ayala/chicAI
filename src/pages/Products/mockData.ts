import modlea from '../../assets/img/carru.png';
import camisa from '../../assets/img/modelo/camisa-roja.png';
import camisaRosa from '../../assets/img/modelo/camisa-rosa.png';
import primavera from '../../assets/img/modelo/primavera.jpg';
import getty from '../../assets/img/modelo/sacos.jpg';

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
    url: modlea,
    subtitle: 'Descubre los últimos estilos',
  },
  {
    url: getty, // Using zapatose as fallback since "zapatos" doesn't exist
    title: 'Moda Urbana',
    subtitle: 'Estilo para cada ocasión',
  },
  {
    url: primavera,
    title: 'Accesorios Exclusivos',
    subtitle: 'Completa tu look perfecto',
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: 'Chaqueta Denim Clásica',
    price: '$89.99',
    image: camisa, // was url: camisa
    category: 'Chaquetas',
    quotas:3,
    color:["#ee1d1d","#0c0d77","#000000"],
  },
  {
    id: 2,
    name: 'saco jean',
    price: '$129.99',
    image: primavera, // was url: camisaRoja
    category: 'Vestidos',
    quotas:6,
    color:["#ee1d1d","#0c0d77","#000000"],
  },
  {
    id: 3,
    name: 'Camisola bordo',
    price: '$159.99',
    image: camisaRosa, // was url: camisaRosa
    category: 'Calzado',
    quotas:3,
    color:["#ee1d1d","#0c0d77","#000000"],
  },
  {
    id: 4,
    name: 'Camisa Formal Blanca',
    price: '$69.99',
    image:
      imagesMap['crisp-white-formal-shirt-folded-neatly.jpg'] ||
      '/crisp-white-formal-shirt-folded-neatly.jpg',
    category: 'Camisas',
    quotas:4,
    color:["#ee1d1d","#0c0d77","#000000"],
  },
  {
    id: 5,
    name: 'Pantalón Casual',
    price: '$79.99',
    image: imagesMap['casual-khaki-pants-laid-flat.jpg'] || '/casual-khaki-pants-laid-flat.jpg',
    category: 'Pantalones',
    quotas:6,
    color:["#ee1d1d","#0c0d77","#000000"],
  },
  {
    id: 6,
    name: 'Bolso de Cuero',
    price: '$199.99',
    image:
      imagesMap['luxury-leather-handbag-on-marble-surface.jpg'] ||
      '/luxury-leather-handbag-on-marble-surface.jpg',
    category: 'Accesorios',
    quotas:2,
    color:["#ee1d1d","#0c0d77","#000000"],
  },
];
