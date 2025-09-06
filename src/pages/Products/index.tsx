import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { featuredProducts } from './mockData';

export default function Products() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, color: 'text.primary' }}>
          Productos Destacados
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {featuredProducts.map((product) => (
            <Box key={product.id}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  boxShadow: 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'none',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: { xs: 260, sm: 320, md: 490 }, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="primary.main" sx={{ fontWeight: 400, fontSize: '1rem' }}>
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
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
