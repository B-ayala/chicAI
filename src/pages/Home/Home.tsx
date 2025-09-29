import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { featuredProducts } from '../Products/mockData';
import { ProductCard, ProductsGrid } from '../Products/styled';
import { HomeCarousel } from './components/HomeCarousel';

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      {/* Productos destacados en el Home */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4, color: 'text.primary' }}>
          Productos Destacados
        </Typography>
        <ProductsGrid>
          {featuredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id}>
              <Card
                elevation={0}

                sx={{
                  height: '100%',
                  boxShadow: 'none',
                  transition: 'none',
                }}
                
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: { xs: 220, sm: 260, md: 500 }, objectFit: 'cover' }}
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
                </CardContent>
              </Card>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </div>
  );
}
