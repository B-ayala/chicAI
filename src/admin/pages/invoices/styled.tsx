import styled from 'styled-components';

// Font family fallback
const fontFamily = `'Inter', 'Poppins', 'Segoe UI', Arial, sans-serif`;

export const InvoicesContainer = styled.div`
  font-family: ${fontFamily};
  padding: 20px;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #222;
`;

export const NewInvoiceButton = styled.button`
  background: #ff4081;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 64, 129, 0.08);
  transition: background 0.2s;
  &:hover {
    background: #e73370;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

export const CardLabel = styled.span`
  font-size: 0.98rem;
  color: #888;
  font-weight: 500;
`;

export const CardValue = styled.span`
  font-size: 1.08rem;
  color: #222;
  font-weight: 600;
`;

export const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  font-size: 1rem;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TableHead = styled.thead`
  background: #f7f7f7;
`;

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #ececec;
  }
`;

export const TableCell = styled.td`
  padding: 16px 14px;
  text-align: left;
  color: #222;
  font-weight: 500;
  vertical-align: middle;
  &:first-child {
    border-top-left-radius: 18px;
  }
  &:last-child {
    border-top-right-radius: 18px;
  }
`;

export const StatusTag = styled.span<{ $bg: string; $color: string; $dot: string }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-weight: 600;
  font-size: 0.98rem;
  border-radius: 14px;
  padding: 4px 14px 4px 10px;
  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ $dot }) => $dot};
    display: inline-block;
  }
`;

export const DetailsLink = styled.button`
  background: none;
  border: none;
  color: #ff4081;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  transition: color 0.2s;
  &:hover {
    color: #e73370;
  }
`;
