import { TableBuilder, renderProductStock } from '../../components/modalGlobal';
import { MOCK_PRODUCTS, Product } from '../../services/productsService';
import {
  ActionButton,
  Header,
  NewProductButton,
  ProductImage,
  ProductsContainer,
  Title,
} from './styled';

// Iconos SVG locales
const EditIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1976d2"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
  </svg>
);
const DeleteIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c62828"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

export default function Products() {
  // Crear la tabla usando el TableBuilder
  const tableBuilder = new TableBuilder<Product>({
    data: MOCK_PRODUCTS,
    getRowKey: (product) => product.id,
    emptyMessage: 'No hay productos disponibles',
  });

  // Configurar las columnas
  tableBuilder
    .addColumn('image', 'Imagen', {
      hideMobile: true,
      render: (product) =>
        product.image ? <ProductImage src={product.image} /> : <span>{product.name}</span>,
    })
    .addColumn('name', 'Producto', { mobileLabel: 'Producto' })
    .addColumn('category', 'Categoría', { mobileLabel: 'Categoría' })
    .addColumn('price', 'Precio', { mobileLabel: 'Precio' })
    .addColumn('stock', 'Stock', {
      mobileLabel: 'Stock',
      render: (product) => renderProductStock(product.stock),
    })
    .addColumn('actions', 'Acciones', {
      hideMobile: true,
      render: (product) => (
        <>
          <ActionButton variant="edit" title="Editar">
            <EditIcon /> Editar
          </ActionButton>
          <ActionButton variant="delete" title="Eliminar" style={{ marginLeft: 8 }}>
            <DeleteIcon /> Eliminar
          </ActionButton>
        </>
      ),
    })
    .generateDefaultMobileCardRender();

  return (
    <ProductsContainer>
      <Header>
        <Title>Productos</Title>
        <NewProductButton>+ Nuevo Producto</NewProductButton>
      </Header>

      {tableBuilder.build()}
    </ProductsContainer>
  );
}
