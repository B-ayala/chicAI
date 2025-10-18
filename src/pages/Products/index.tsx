import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from '../../users/components/Product/Product';
import { RootState } from '../../users/store';
import { ProductsGrid } from './styled';

export default function Products() {
  const listProducts = useSelector((state: RootState) => state.product.value);
  const list = listProducts['0'];
  const listModificada = Object.values(list); //devuelve array de objetos

  return (
    <>
      <Container maxWidth={false} sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, color: 'text.primary' }}>
          Productos Destacados
        </Typography>

        <ProductsGrid>
          {listModificada.map((product) => (
            <Product show={true} product={product} key={product.id} />
          ))}
        </ProductsGrid>
      </Container>
    </>
  );
}
