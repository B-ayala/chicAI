import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import Product from '../../components/Product/Product';
import { carouselImages, featuredProducts } from '../Products/mockData';
import { ProductsGrid } from '../Products/styled';
import { HomeCarousel } from './components/HomeCarousel';


export default function Home() {
  const [currentSlide, setCurrentSlide] =useState(0);  
  return (
    <div>
      <HomeCarousel imageRender={carouselImages} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} renderBoolean={true} widthImageXs='100' widthImageSm='100' widthImageMd='100'/>
      {/* Productos destacados en el Home */}
      <Container maxWidth={false}  sx={{ py: 8 }}>
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
            <Product product={product} show={false} key={product.id}/> 
            
          ))}
        </ProductsGrid>
      </Container>
    </div>
  );
}
