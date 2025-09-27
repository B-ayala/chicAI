import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ProductCard, ProductsGrid } from './styled';

export default function Products() {
  const dispatch = useDispatch();

  const listProducts = useSelector((state: RootState) => state.product.value);
  const list = listProducts['0'];
  const listModificada = Object.values(list); //devuelve array de objetos

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, color: 'text.primary' }}>
          Productos Destacados
        </Typography>

        <ProductsGrid>
          {listModificada.map((product) => (
            <ProductCard key={product.id}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  boxShadow: 'none',
                  // El zoom se maneja en ProductCard
                  transition: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image} // ensure this is .image, not .url
                  alt={product.name}
                  sx={{ height: { xs: 260, sm: 320, md: 490 }, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary.main"
                    sx={{ fontWeight: 400, fontSize: '1rem' }}
                  >
                    {product.price}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary" gutterBottom>
                    {product.category}
                  </Typography> */}
                  {/* <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                      {product.price}
                    </Typography>
                    <Box>
                      <IconButton size="small" color="secondary">
                        <Favorite />
                      </IconButton>
                      <Button variant="contained" size="small" sx={{ ml: 1 }}>
                        Agregar
                      </Button>
                    </Box>
                  </Box> */}
                </CardContent>
              </Card>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </>
  );
}
