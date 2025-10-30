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
    image:[
      {
      color:"red",
      imageRender:[camisa], // was url: camisa
    }
    ]
    , 
    
    category: 'Chaquetas',
    quotas:3,
    color:[{color:"#ee1d1d",name:"red"},{color:"#0c0d77",name:"blue"},{color:"#000000",name:"black"}],
    size:[
  { talle: 'XS', busto: 80, cadera: 88, largo: 60 },
  { talle: 'S', busto: 86, cadera: 94, largo: 62 },
  { talle: 'M', busto: 92, cadera: 100, largo: 64 },
  { talle: 'L', busto: 98, cadera: 106, largo: 66 },
  { talle: 'XL', busto: 104, cadera: 112, largo: 68 },
],
  },
  {
    id: 2,
    name: 'saco jean',
    price: '$129.99',
    image:[
      {
      color:"red",
      imageRender:[primavera], // was url: camisaRoja
    }, 
    ],
    
    category: 'Vestidos',
    quotas:6,
    color:[{color:"#ee1d1d",name:"red"},{color:"#0c0d77",name:"blue"},{color:"#000000",name:"black"}],
    size:[
  { talle: 'XS', busto: 80, cadera: 88, largo: 60 },
  { talle: 'S', busto: 86, cadera: 94, largo: 62 },
  { talle: 'M', busto: 92, cadera: 100, largo: 64 },
  { talle: 'L', busto: 98, cadera: 106, largo: 66 },
  { talle: 'XL', busto: 104, cadera: 112, largo: 68 },
],
  },
  {
    id: 3,
    name: 'Camisola bordo',
    price: '$159.99',
    image: [
      {
      color:"red",
      imageRender:[camisaRosa]
    } 
    ]
    
    
    , // was url: camisaRosa
    category: 'Calzado',
    quotas:3,
    color:[{color:"#ee1d1d",name:"red"},{color:"#0c0d77",name:"blue"},{color:"#000000",name:"black"}],
    size:[
  { talle: 'XS', busto: 80, cadera: 88, largo: 60 },
  { talle: 'S', busto: 86, cadera: 94, largo: 62 },
  { talle: 'M', busto: 92, cadera: 100, largo: 64 },
  { talle: 'L', busto: 98, cadera: 106, largo: 66 },
  { talle: 'XL', busto: 104, cadera: 112, largo: 68 },
],
  },
  {
    id: 4,
    name: 'Camisa Formal Blanca',
    price: '$69.99',
    image: [
      {color:"red",imageRender:[imagesMap['crisp-white-formal-shirt-folded-neatly.jpg'] ||
      '/crisp-white-formal-shirt-folded-neatly.jpg',imagesMap['elegant-woman-in-modern-casual-wear-standing-in-mi.jpg'] ||
      '/elegant-woman-in-modern-casual-wear-standing-in-mi.jpg']},
      {color:"blue",imageRender:[imagesMap["stylish-man-in-contemporary-streetwear-against-urb.jpg"]||'/stylish-man-in-contemporary-streetwear-against-urb.jpg',imagesMap["modern-white-sneakers-product-shot.jpg"]||"/modern-white-sneakers-product-shot.jpg"]}
    ]
      ,
    category: 'Camisas',
    quotas:4,
    color:[{color:"#ee1d1d",name:"red"},{color:"#0c0d77",name:"blue"},{color:"#000000",name:"black"}],
    size:[
  { talle: 'XS', busto: 80, cadera: 88, largo: 60 },
  { talle: 'S', busto: 86, cadera: 94, largo: 62 },
  { talle: 'M', busto: 92, cadera: 100, largo: 64 },
  { talle: 'L', busto: 98, cadera: 106, largo: 66 },
  { talle: 'XL', busto: 104, cadera: 112, largo: 68 },
  { talle: 'XM', busto: 104, cadera: 112, largo: 68 },
  
  
  
],
  },
  {
    id: 5,
    name: 'Pantalón Casual',
    price: '$79.99',
    image: [
      {
        color:"red",imageRender:[imagesMap['casual-khaki-pants-laid-flat.jpg'] || '/casual-khaki-pants-laid-flat.jpg',imagesMap['stylish-man-in-contemporary-streetwear-against-urb.jpg'] ||
      '/stylish-man-in-contemporary-streetwear-against-urb.jpg']
      },
      {
        color:"blue",imageRender:[imagesMap['stylish-man-in-contemporary-streetwear-against-urb.jpg'] || '/stylish-man-in-contemporary-streetwear-against-urb.jpg',imagesMap['stylish-man-in-contemporary-streetwear-against-urb.jpg'] ||
      '/stylish-man-in-contemporary-streetwear-against-urb.jpg']
      }
    ],
    category: 'Pantalones',
    quotas:6,
    color:[{color:"#ee1d1d",name:"red"},{color:"#0c0d77",name:"blue"},{color:"#000000",name:"black"}],
    size:[
  { talle: 'XS', busto: 80, cadera: 88, largo: 60 },
  { talle: 'S', busto: 86, cadera: 94, largo: 62 },
  { talle: 'M', busto: 92, cadera: 100, largo: 64 },
  { talle: 'L', busto: 98, cadera: 106, largo: 66 },
  { talle: 'XL', busto: 104, cadera: 112, largo: 68 },
],
  },
  {
    id: 6,
    name: 'Bolso de Cuero',
    price: '$199.99',
    image:[
      {
         color:"red",
      imageRender:[imagesMap['luxury-leather-handbag-on-marble-surface.jpg'] ||
      '/luxury-leather-handbag-on-marble-surface.jpg',imagesMap['classic-denim-jacket-on-white-background.jpg'] ||
      '/classic-denim-jacket-on-white-background.jpg']
      },
      {
        color:"blue",
        imageRender:[imagesMap['elegant-floral-dress-on-hanger.jpg'] ||
      '/elegant-floral-dress-on-hanger.jpg',imagesMap['classic-denim-jacket-on-white-background.jpg'] ||
      '/classic-denim-jacket-on-white-background.jpg']
      }
     
    ]
      ,
    category: 'Accesorios',
    quotas:2,
    color:[{color:"#ee1d1d",name:"red"},{color:"#0c0d77",name:"blue"},{color:"#000000",name:"black"}],
    size:[
  { talle: 'XS', busto: 80, cadera: 88, largo: 60 },
  { talle: 'S', busto: 86, cadera: 94, largo: 62 },
  { talle: 'M', busto: 92, cadera: 100, largo: 64 },
  { talle: 'L', busto: 98, cadera: 106, largo: 66 },
  { talle: 'XL', busto: 104, cadera: 112, largo: 68 },
],
  },
];
