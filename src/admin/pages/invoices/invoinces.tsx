import { statusColors, StatusType, TableBuilder } from '../../components/modalGlobal';
import { Invoice, InvoiceStatus, MOCK_INVOICES } from '../../services/invoicesServices';
import { Header, InvoicesContainer, NewInvoiceButton, Title } from './styled';

// Mapa de estados para facturas
const invoiceStatusMap: Record<InvoiceStatus, StatusType> = {
  Recibido: { label: 'Recibido', ...statusColors.invoice.Recibido },
  Pagado: { label: 'Pagado', ...statusColors.invoice.Pagado },
  Facturado: { label: 'Facturado', ...statusColors.invoice.Facturado },
  Enviado: { label: 'Enviado', ...statusColors.invoice.Enviado },
  Cancelado: { label: 'Cancelado', ...statusColors.invoice.Cancelado },
};

export default function Invoices() {
  // Crear la tabla usando el TableBuilder
  const tableBuilder = new TableBuilder<Invoice>({
    data: MOCK_INVOICES,
    getRowKey: (invoice) => invoice.id,
    emptyMessage: 'No hay facturas disponibles',
  });

  // Configurar las columnas
  tableBuilder
    .addColumn('client', 'Cliente', { mobileLabel: 'Cliente' })
    .addColumn('id', 'ID del pedido', { mobileLabel: 'ID del pedido' })
    .addColumn('total', 'Monto total', { mobileLabel: 'Monto total' })
    .addStatusColumn('status', 'Estado', invoiceStatusMap, (invoice) => invoice.status, {
      mobileLabel: 'Estado',
    })
    .addActionsColumn('Acciones', [{ label: 'Ver detalles' }], { hideMobile: true })
    .generateDefaultMobileCardRender();

  return (
    <InvoicesContainer>
      <Header>
        <Title>Facturas</Title>
        <NewInvoiceButton>+ Nueva Factura</NewInvoiceButton>
      </Header>

      {tableBuilder.build()}
    </InvoicesContainer>
  );
}
