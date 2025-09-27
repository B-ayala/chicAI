import styled, { keyframes } from 'styled-components';

// Color bordo/burdeos intenso
const burgundy = '#201f1fff';

const marqueeAnim = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  width: 100%;
  background: ${burgundy};
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
`;

export const MarqueeText = styled.span`
  display: inline-block;
  min-width: 100%;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 0.1em 0;
  font-size: 0.95rem;
  animation: ${marqueeAnim} 60s linear infinite;

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
  @media (min-width: 900px) {
    font-size: 1.2rem;
  }
`;
