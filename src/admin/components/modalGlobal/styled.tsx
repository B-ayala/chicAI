import styled from 'styled-components';

// Font family fallback
const fontFamily = `'Inter', 'Poppins', 'Segoe UI', Arial, sans-serif`;

// Pink color palette
const pinkMain = '#ff4081';
const pinkLight = '#ffe4ef';
const pinkDark = '#e73370';
const white = '#fff';
const grayText = '#888';
const grayBorder = '#f3c2d7';
const shadow = '0 2px 16px 0 rgba(255, 64, 129, 0.10)';

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  background: transparent;
`;

// ===== Mobile Card Styles =====
export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  background: ${white};
  border-radius: 18px;
  box-shadow: ${shadow};
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1.5px solid ${pinkLight};
  transition: box-shadow 0.25s, border 0.25s;
  &:hover {
    box-shadow: 0 4px 24px 0 rgba(255, 64, 129, 0.18);
    border: 1.5px solid ${pinkMain};
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

export const CardLabel = styled.span`
  font-size: 0.98rem;
  color: ${grayText};
  font-weight: 500;
`;

export const CardValue = styled.span`
  font-size: 1.08rem;
  color: ${pinkDark};
  font-weight: 600;
`;

// ===== Desktop Table Styles =====
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: ${white};
  border-radius: 18px;
  box-shadow: ${shadow};
  overflow: hidden;
  font-size: 1rem;
  font-family: ${fontFamily};
  border: 1.5px solid ${pinkLight};
  transition: box-shadow 0.25s, border 0.25s;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TableHead = styled.thead`
  background: ${pinkLight};
`;

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${grayBorder};
  }
  transition: background 0.18s;
  &:hover {
    background: ${pinkLight};
  }
`;

export const TableCell = styled.td`
  padding: 16px 14px;
  text-align: left;
  color: ${pinkDark};
  font-weight: 500;
  vertical-align: middle;
  background: transparent;
  transition: background 0.18s, color 0.18s;

  &:first-child {
    border-top-left-radius: 18px;
  }
  &:last-child {
    border-top-right-radius: 18px;
  }
`;

// ===== Reusable Components =====
export const StatusTag = styled.span<{ $bg: string; $color: string; $dot: string }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: ${({ $bg }) => $bg || pinkLight};
  color: ${({ $color }) => $color || pinkDark};
  font-weight: 600;
  font-size: 0.98rem;
  border-radius: 14px;
  padding: 4px 14px 4px 10px;
  box-shadow: 0 1px 4px 0 rgba(255, 64, 129, 0.1);
  transition: background 0.18s, color 0.18s;

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ $dot }) => $dot || pinkMain};
    display: inline-block;
    transition: background 0.18s;
  }
`;

export const ActionLink = styled.button`
  background: none;
  border: none;
  color: ${pinkMain};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  transition: color 0.2s, text-shadow 0.2s;

  &:hover {
    color: ${pinkDark};
    text-shadow: 0 2px 8px #ffe4ef;
  }
`;
