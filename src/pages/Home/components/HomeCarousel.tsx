import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { carouselImages } from '../../Products/mockData';

export const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', sm: '70vh', md: '80vh' },
        width: '100vw',
        maxWidth: '100%',
        overflow: 'hidden',
        boxShadow: { xs: 'none', md: 4 },
      }}
      role="region"
      aria-label="Carrusel de productos"
    >
      {carouselImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 2 : 1,
            transition: 'opacity 1s cubic-bezier(0.4,0,0.2,1)',
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.0) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              px: { xs: 2, md: 8 },
            }}
          >
            <Box
              sx={{
                color: 'white',
                maxWidth: { xs: '90%', md: '40%' },
                textAlign: { xs: 'center', md: 'left' },
                p: { xs: 2, md: 4 },
                borderRadius: 3,
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(0,0,0,0.3)',
                boxShadow: 2,
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontFamily: `'Montserrat', 'Roboto', Arial, sans-serif`,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                  lineHeight: 1.1,
                }}
              >
                {image.title}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  mb: 3,
                  fontWeight: 400,
                  fontFamily: `'Montserrat', 'Roboto', Arial, sans-serif`,
                  letterSpacing: '0.02em',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
                  lineHeight: 1.3,
                }}
              >
                {image.subtitle}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontFamily: `'Montserrat', 'Roboto', Arial, sans-serif`,
                  backgroundColor: '#000000ff', // beige
                  color: '#ffffffff', // texto negro
                  boxShadow: 3,
                  borderRadius: 2,
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  '&:hover': {
                    backgroundColor: '#BDBDBD', // gris
                    color: '#222',
                  },
                  '&:active': {
                    backgroundColor: '#BDBDBD', // gris
                    color: '#222',
                  },
                  transition: 'background 0.2s, color 0.2s',
                }}
                aria-label="Comprar ahora"
              >
                Comprar Ahora
              </Button>
            </Box>
          </Box>
        </Box>
      ))}

      <IconButton
        onClick={prevSlide}
        aria-label="Anterior"
        sx={{
          position: 'absolute',
          left: { xs: 10, sm: 32 },
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.08)',
            color: 'primary.main',
          },
          width: { xs: 40, sm: 48 },
          height: { xs: 40, sm: 48 },
          zIndex: 10,
        }}
      >
        <ArrowBackIos fontSize="large" />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        aria-label="Siguiente"
        sx={{
          position: 'absolute',
          right: { xs: 10, sm: 32 },
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.08)',
            color: 'primary.main',
          },
          width: { xs: 40, sm: 48 },
          height: { xs: 40, sm: 48 },
          zIndex: 10,
        }}
      >
        <ArrowForwardIos fontSize="large" />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 18, sm: 28, md: 38 },
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: { xs: 1, sm: 2 },
          zIndex: 10,
        }}
        role="tablist"
        aria-label="Indicadores de carrusel"
      >
        {carouselImages.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Ir al slide ${index + 1}`}
            tabIndex={0}
            sx={{
              width: { xs: 12, sm: 16, md: 20 },
              height: { xs: 12, sm: 16, md: 20 },
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? '#F5F5DC' : '#222', // activo: beige, inactivo: negro
              border: currentSlide === index ? '2px solid white' : 'none',
              boxShadow: currentSlide === index ? 3 : 1,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              outline: 'none',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
