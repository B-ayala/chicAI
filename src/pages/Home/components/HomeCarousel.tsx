import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { carouselImages } from '../../Products/mockData';
import { useEffect, useState } from 'react';

export const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  return (
    <div>
      <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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
              transition: 'opacity 0.8s ease-in-out',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <Box
                      sx={{
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        padding: 4,
                        borderRadius: 2,
                        backdropFilter: 'blur(5px)',
                      }}
                    >
                      <Typography
                        variant="h1"
                        gutterBottom
                        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                      >
                        {image.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mb: 3, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
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
                          backgroundColor: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.main',
                          },
                        }}
                      >
                        Comprar Ahora
                      </Button>
                    </Box> */}
          </Box>
        ))}

        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
          }}
        >
          {carouselImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};
