import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 80vh;
  min-height: 320px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);

  @media (max-width: 600px) {
    height: 60vh;
    min-height: 180px;
    border-radius: 0;
    box-shadow: none;
  }

  @media (min-width: 601px) and (max-width: 1024px) {
    height: 70vh;
    min-height: 240px;
    border-radius: 12px;
  }

  @media (min-width: 1025px) {
    height: 80vh;
    min-height: 320px;
    border-radius: 24px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;
