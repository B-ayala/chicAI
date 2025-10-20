import {
  Card,
  CardLabel,
  CardList,
  CardRow,
  CardValue,
  DetailsLink,
  Header,
  InvoicesContainer,
  InvoiceTable,
  NewInvoiceButton,
  StatusTag,
  TableCell,
  TableHead,
  TableRow,
  TableWrapper,
  Title,
} from './styled';

// Invoice status type
type InvoiceStatus = 'Recibido' | 'Pagado' | 'Facturado' | 'Enviado' | 'Cancelado';

// Mock data for demonstration
const invoices: {
  id: string;
  client: string;
  total: string;
  status: InvoiceStatus;
}[] = [
  {
    id: 'ORD-001',
    client: 'Juan Pérez',
    total: '$1,200.00',
    status: 'Recibido',
  },
  {
    id: 'ORD-001',
    client: 'Juan Pérez',
    total: '$1,200.00',
    status: 'Recibido',
  },
  {
    id: 'ORD-001',
    client: 'Juan Pérez',
    total: '$1,200.00',
    status: 'Recibido',
  },

  {
    id: 'ORD-002',
    client: 'Ana Gómez',
    total: '$850.00',
    status: 'Pagado',
  },
  {
    id: 'ORD-003',
    client: 'Carlos Ruiz',
    total: '$2,300.00',
    status: 'Facturado',
  },
  {
    id: 'ORD-004',
    client: 'María López',
    total: '$1,050.00',
    status: 'Enviado',
  },
  {
    id: 'ORD-005',
    client: 'Pedro Sánchez',
    total: '$500.00',
    status: 'Cancelado',
  },
];

// Status color mapping
const statusColors: Record<InvoiceStatus, { bg: string; color: string; dot: string }> = {
  Recibido: { bg: '#e3f2fd', color: '#1976d2', dot: '#1976d2' },
  Pagado: { bg: '#e8f5e9', color: '#388e3c', dot: '#388e3c' },
  Facturado: { bg: '#ececec', color: '#757575', dot: '#757575' },
  Enviado: { bg: '#fffde7', color: '#fbc02d', dot: '#fbc02d' },
  Cancelado: { bg: '#ffebee', color: '#d32f2f', dot: '#d32f2f' },
};

export default function Invoices() {
  return (
    <InvoicesContainer>
      <Header>
        <Title>Facturas</Title>
        <NewInvoiceButton>+ Nueva Factura</NewInvoiceButton>
      </Header>
      <TableWrapper>
        {/* Mobile: Card List */}
        <CardList>
          {invoices.map((inv) => (
            <Card key={inv.id}>
              <CardRow>
                <CardLabel>Cliente</CardLabel>
                <CardValue>{inv.client}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>ID del pedido</CardLabel>
                <CardValue>{inv.id}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Monto total</CardLabel>
                <CardValue>{inv.total}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Estado</CardLabel>
                <StatusTag
                  $bg={statusColors[inv.status].bg}
                  $color={statusColors[inv.status].color}
                  $dot={statusColors[inv.status].dot}
                >
                  <span className="dot" />
                  {inv.status}
                </StatusTag>
              </CardRow>
              <CardRow>
                <DetailsLink>Ver detalles</DetailsLink>
              </CardRow>
            </Card>
          ))}
        </CardList>
        {/* Desktop: Table */}
        <InvoiceTable>
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>ID del pedido</TableCell>
              <TableCell>Monto total</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell>{inv.client}</TableCell>
                <TableCell>{inv.id}</TableCell>
                <TableCell>{inv.total}</TableCell>
                <TableCell>
                  <StatusTag
                    $bg={statusColors[inv.status].bg}
                    $color={statusColors[inv.status].color}
                    $dot={statusColors[inv.status].dot}
                  >
                    <span className="dot" />
                    {inv.status}
                  </StatusTag>
                </TableCell>
                <TableCell>
                  <DetailsLink>Ver detalles</DetailsLink>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </InvoiceTable>
      </TableWrapper>
    </InvoicesContainer>
  );
}
