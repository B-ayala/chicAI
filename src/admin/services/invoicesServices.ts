// Tipos para las facturas
export type InvoiceStatus = 'Recibido' | 'Pagado' | 'Facturado' | 'Enviado' | 'Cancelado';

export interface Invoice {
  id: string;
  client: string;
  clientEmail?: string;
  clientPhone?: string;
  total: string;
  subtotal?: string;
  tax?: string;
  status: InvoiceStatus;
  createdAt: string;
  updatedAt: string;
  items?: InvoiceItem[];
  shippingAddress?: string;
  paymentMethod?: string;
}

export interface InvoiceItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export const MOCK_INVOICES: Invoice[] = [
  {
    id: 'ORD-001',
    client: 'Juan Pérez',
    clientEmail: 'juan.perez@email.com',
    clientPhone: '+54 11 1234-5678',
    subtotal: '$1,100.00',
    tax: '$100.00',
    total: '$1,200.00',
    status: 'Recibido',
    createdAt: '2025-10-20T10:30:00Z',
    updatedAt: '2025-10-20T10:30:00Z',
    paymentMethod: 'Tarjeta de crédito',
    shippingAddress: 'Av. Corrientes 1234, CABA, Argentina',
    items: [
      {
        productId: 'PROD-001',
        productName: 'Zapatillas Deportivas',
        quantity: 2,
        unitPrice: 89.99,
        total: 179.98,
      },
      {
        productId: 'PROD-004',
        productName: 'Gorra Urbana',
        quantity: 3,
        unitPrice: 19.99,
        total: 59.97,
      },
    ],
  },
  {
    id: 'ORD-002',
    client: 'Ana Gómez',
    clientEmail: 'ana.gomez@email.com',
    clientPhone: '+54 11 2345-6789',
    subtotal: '$780.00',
    tax: '$70.00',
    total: '$850.00',
    status: 'Pagado',
    createdAt: '2025-10-21T14:15:00Z',
    updatedAt: '2025-10-22T09:20:00Z',
    paymentMethod: 'Mercado Pago',
    shippingAddress: 'Calle Florida 567, CABA, Argentina',
    items: [
      {
        productId: 'PROD-002',
        productName: 'Camiseta Casual',
        quantity: 5,
        unitPrice: 29.99,
        total: 149.95,
      },
      {
        productId: 'PROD-003',
        productName: 'Pantalón Jeans',
        quantity: 2,
        unitPrice: 59.99,
        total: 119.98,
      },
    ],
  },
  {
    id: 'ORD-003',
    client: 'Carlos Ruiz',
    clientEmail: 'carlos.ruiz@email.com',
    clientPhone: '+54 11 3456-7890',
    subtotal: '$2,100.00',
    tax: '$200.00',
    total: '$2,300.00',
    status: 'Facturado',
    createdAt: '2025-10-22T16:45:00Z',
    updatedAt: '2025-10-23T11:30:00Z',
    paymentMethod: 'Transferencia bancaria',
    shippingAddress: 'Av. Santa Fe 2890, CABA, Argentina',
    items: [
      {
        productId: 'PROD-001',
        productName: 'Zapatillas Deportivas',
        quantity: 10,
        unitPrice: 89.99,
        total: 899.9,
      },
      {
        productId: 'PROD-002',
        productName: 'Camiseta Casual',
        quantity: 15,
        unitPrice: 29.99,
        total: 449.85,
      },
    ],
  },
  {
    id: 'ORD-004',
    client: 'María López',
    clientEmail: 'maria.lopez@email.com',
    clientPhone: '+54 11 4567-8901',
    subtotal: '$960.00',
    tax: '$90.00',
    total: '$1,050.00',
    status: 'Enviado',
    createdAt: '2025-10-23T09:00:00Z',
    updatedAt: '2025-10-24T15:45:00Z',
    paymentMethod: 'Tarjeta de débito',
    shippingAddress: 'Av. Rivadavia 4521, CABA, Argentina',
    items: [
      {
        productId: 'PROD-003',
        productName: 'Pantalón Jeans',
        quantity: 4,
        unitPrice: 59.99,
        total: 239.96,
      },
      {
        productId: 'PROD-004',
        productName: 'Gorra Urbana',
        quantity: 8,
        unitPrice: 19.99,
        total: 159.92,
      },
    ],
  },
  {
    id: 'ORD-005',
    client: 'Pedro Sánchez',
    clientEmail: 'pedro.sanchez@email.com',
    clientPhone: '+54 11 5678-9012',
    subtotal: '$460.00',
    tax: '$40.00',
    total: '$500.00',
    status: 'Cancelado',
    createdAt: '2025-10-24T11:20:00Z',
    updatedAt: '2025-10-25T08:15:00Z',
    paymentMethod: 'Efectivo',
    shippingAddress: 'Calle Lavalle 123, CABA, Argentina',
    items: [
      {
        productId: 'PROD-002',
        productName: 'Camiseta Casual',
        quantity: 3,
        unitPrice: 29.99,
        total: 89.97,
      },
    ],
  },
  {
    id: 'ORD-006',
    client: 'Lucía Fernández',
    clientEmail: 'lucia.fernandez@email.com',
    clientPhone: '+54 11 6789-0123',
    subtotal: '$650.00',
    tax: '$60.00',
    total: '$710.00',
    status: 'Recibido',
    createdAt: '2025-10-25T13:30:00Z',
    updatedAt: '2025-10-25T13:30:00Z',
    paymentMethod: 'Tarjeta de crédito',
    shippingAddress: 'Av. Callao 789, CABA, Argentina',
    items: [
      {
        productId: 'PROD-001',
        productName: 'Zapatillas Deportivas',
        quantity: 3,
        unitPrice: 89.99,
        total: 269.97,
      },
    ],
  },
  {
    id: 'ORD-007',
    client: 'Diego Martínez',
    clientEmail: 'diego.martinez@email.com',
    clientPhone: '+54 11 7890-1234',
    subtotal: '$420.00',
    tax: '$38.00',
    total: '$458.00',
    status: 'Pagado',
    createdAt: '2025-10-26T10:00:00Z',
    updatedAt: '2025-10-27T12:20:00Z',
    paymentMethod: 'Mercado Pago',
    shippingAddress: 'Calle Maipú 456, CABA, Argentina',
    items: [
      {
        productId: 'PROD-004',
        productName: 'Gorra Urbana',
        quantity: 12,
        unitPrice: 19.99,
        total: 239.88,
      },
    ],
  },
];
