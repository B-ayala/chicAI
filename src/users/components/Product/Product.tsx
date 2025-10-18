import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { ProductCard, ProductImage } from '../../../pages/Products/styled';

type typeProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  quotas: number;
  color: string[];
}; //ARRRAY PARA LOS COLORES

type typeProps = {
  product: typeProduct;
  show: boolean;
};

function Product({ product, show }: typeProps) {
  return (
    <ProductCard>
      <Card
        elevation={0}
        sx={{
          height: '100%',
          boxShadow: 'none',
          transition: 'none',
          // El zoom se maneja en ProductCard
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <ProductImage>
            <CardMedia
              component="img"
              image={product.image} // ensure this is .image, not .url
              alt={product.name}
              sx={{ height: { xs: 350, sm: 450, md: 620 }, objectFit: 'cover' }}
            />
          </ProductImage>
        </div>

        <CardContent>
          <Typography
            textAlign={'center'}
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="h6"
            color="primary.main"
            sx={{ fontWeight: 400, fontSize: '1rem', textAlign: 'center' }}
          >
            {product.price}
          </Typography>
          {show && (
            <>
              <Typography textAlign={'center'}>{product.quotas} cuotas sin interés</Typography>
              <Container sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                {product.color.map((item) => (
                  <Box
                    key={product.id}
                    width={30}
                    borderRadius={100}
                    sx={{ background: item }}
                    height={30}
                    marginTop={1}
                  />
                ))}
              </Container>
            </>
          )}
          <Box sx={{ marginY: 'auto', display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="outlined" sx={{}} color="inherit">
              Leer más
            </Button>
          </Box>
        </CardContent>
      </Card>
    </ProductCard>
  );
}

export default Product;
