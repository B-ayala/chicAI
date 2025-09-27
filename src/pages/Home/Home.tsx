import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { featuredProducts } from '../Products/mockData';
import { ProductCard, ProductsGrid } from '../Products/styled';
import { HomeCarousel } from './components/HomeCarousel';

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      {/* Productos destacados en el Home */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            mb: 4,
            color: 'text.primary',
            fontWeight: 800,
            fontFamily: `'Montserrat', 'Roboto', Arial, sans-serif`,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            fontSize: { xs: '1.7rem', sm: '2.2rem', md: '2.6rem' },
            lineHeight: 1.1,
          }}
        >
          ÚLTIMOS INGRESOS
        </Typography>
        <ProductsGrid>
          {featuredProducts.slice(0, 6).map((product) => (
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
                  sx={{ height: { xs: 220, sm: 260, md: 320 }, objectFit: 'cover' }}
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
