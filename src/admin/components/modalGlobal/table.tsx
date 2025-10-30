import { ReactNode } from 'react';
import {
  Card,
  CardLabel,
  CardList,
  CardRow,
  CardValue,
  StyledTable,
  TableCell,
  TableHead,
  TableRow,
  TableWrapper,
  StatusTag,
  ActionLink
} from './styled';

// ==================== TIPOS ====================

export interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => ReactNode;
  mobileLabel?: string; // Label personalizado para vista móvil
  hideMobile?: boolean; // Ocultar en vista móvil
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  getRowKey: (item: T, index: number) => string | number;
  mobileCardRender?: (item: T) => ReactNode; 
  tableClassName?: string;
  cardClassName?: string;
  emptyMessage?: string;
}

// Tipos de estado genéricos para reutilizar en diferentes componentes
export type StatusType = {
  label: string;
  bg: string;
  color: string;
  dot: string;
};

// Interfaz para configurar la tabla
export interface TableBuilderConfig<T> {
  data: T[];
  getRowKey: (item: T, index: number) => string | number;
  emptyMessage?: string;
  tableClassName?: string;
  cardClassName?: string;
}

// ==================== UTILIDADES ====================

// Utilidades para estados comunes
export const statusColors = {
  // Para facturas
  invoice: {
    Recibido: { bg: '#e3f2fd', color: '#1976d2', dot: '#1976d2' },
    Pagado: { bg: '#e8f5e9', color: '#388e3c', dot: '#388e3c' },
    Facturado: { bg: '#ececec', color: '#757575', dot: '#757575' },
    Enviado: { bg: '#fffde7', color: '#fbc02d', dot: '#fbc02d' },
    Cancelado: { bg: '#ffebee', color: '#d32f2f', dot: '#d32f2f' },
  },
  // Para productos
  product: {
    inStock: { bg: '#e8f5e9', color: '#388e3c', dot: '#388e3c' },
    outOfStock: { bg: '#ffebee', color: '#d32f2f', dot: '#d32f2f' },
  },
};

// Función para renderizar etiquetas de estado
export const renderStatusTag = (
  status: string, 
  bg: string, 
  color: string, 
  dot: string
) => (
  <StatusTag $bg={bg} $color={color} $dot={dot}>
    <span className="dot" />
    {status}
  </StatusTag>
);

// Función para renderizar acciones
export const renderActions = (
  actions: Array<{ label: string; onClick?: () => void }>
) => (
  <div style={{ display: 'flex', gap: '10px' }}>
    {actions.map((action, index) => (
      <ActionLink key={index} onClick={action.onClick}>
        {action.label}
      </ActionLink>
    ))}
  </div>
);

// Función para renderizar el stock de productos
export const renderProductStock = (stock: number) => (
  <StatusTag 
    $bg={stock > 0 ? statusColors.product.inStock.bg : statusColors.product.outOfStock.bg}
    $color={stock > 0 ? statusColors.product.inStock.color : statusColors.product.outOfStock.color}
    $dot={stock > 0 ? statusColors.product.inStock.dot : statusColors.product.outOfStock.dot}
  >
    <span className="dot" />
    {stock > 0 ? `${stock} unidades` : 'Agotado'}
  </StatusTag>
);

// ==================== COMPONENTE DE TABLA ====================

export function Table<T>({
  data,
  columns,
  getRowKey,
  mobileCardRender,
  tableClassName,
  cardClassName,
  emptyMessage = 'No hay datos disponibles',
}: TableProps<T>) {
  // Renderizado por defecto de cards móviles
  const renderDefaultMobileCard = (item: T) => {
    return columns
      .filter((col) => !col.hideMobile)
      .map((col) => (
        <CardRow key={col.key}>
          <CardLabel>{col.mobileLabel || col.label}</CardLabel>
          <CardValue>{col.render ? col.render(item) : (item as any)[col.key]}</CardValue>
        </CardRow>
      ));
  };

  if (data.length === 0) {
    return (
      <TableWrapper>
        <p style={{ textAlign: 'center', color: '#888', padding: '20px' }}>{emptyMessage}</p>
      </TableWrapper>
    );
  }

  return (
    <TableWrapper>
      {/* Vista móvil: Cards */}
      <CardList className={cardClassName}>
        {data.map((item, index) => (
          <Card key={getRowKey(item, index)}>
            {mobileCardRender ? mobileCardRender(item) : renderDefaultMobileCard(item)}
          </Card>
        ))}
      </CardList>

      {/* Vista desktop: Tabla */}
      <StyledTable className={tableClassName}>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key} as="th">
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={getRowKey(item, index)}>
              {columns.map((col) => (
                <TableCell key={col.key}>
                  {col.render ? col.render(item) : (item as any)[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

// ==================== CONSTRUCTOR DE TABLA ====================

export class TableBuilder<T> {
  private config: TableBuilderConfig<T>;
  private columns: Column<T>[] = [];
  private mobileCardRenderer?: (item: T) => ReactNode;

  constructor(config: TableBuilderConfig<T>) {
    this.config = config;
  }

  // Método para añadir una columna estándar
  addColumn(key: string, label: string, options?: {
    mobileLabel?: string;
    hideMobile?: boolean;
    render?: (item: T) => ReactNode;
  }): TableBuilder<T> {
    this.columns.push({
      key,
      label,
      mobileLabel: options?.mobileLabel || label,
      hideMobile: options?.hideMobile,
      render: options?.render,
    });
    return this;
  }

  // Método para añadir una columna de estado con etiqueta de estado
  addStatusColumn(
    key: string,
    label: string,
    statusMap: Record<string, StatusType>,
    statusGetter: (item: T) => string,
    options?: { mobileLabel?: string; hideMobile?: boolean }
  ): TableBuilder<T> {
    this.columns.push({
      key,
      label,
      mobileLabel: options?.mobileLabel || label,
      hideMobile: options?.hideMobile,
      render: (item) => {
        const statusKey = statusGetter(item);
        const status = statusMap[statusKey];
        if (!status) return statusKey;
        
        return (
          <StatusTag $bg={status.bg} $color={status.color} $dot={status.dot}>
            <span className="dot" />
            {status.label}
          </StatusTag>
        );
      },
    });
    return this;
  }

  // Método para añadir una columna de acciones
  addActionsColumn(
    label: string,
    actions: Array<{
      label: string;
      onClick?: (item: T) => void;
    }>,
    options?: { hideMobile?: boolean }
  ): TableBuilder<T> {
    this.columns.push({
      key: 'actions',
      label,
      hideMobile: options?.hideMobile !== undefined ? options.hideMobile : true,
      render: (item) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          {actions.map((action, index) => (
            <ActionLink 
              key={index} 
              onClick={action.onClick ? () => action.onClick!(item) : undefined}
            >
              {action.label}
            </ActionLink>
          ))}
        </div>
      ),
    });
    return this;
  }

  // Configurar renderizado personalizado para tarjetas móviles
  setMobileCardRender(renderer: (item: T) => ReactNode): TableBuilder<T> {
    this.mobileCardRenderer = renderer;
    return this;
  }

  // Generar renderizado por defecto para tarjetas móviles
  generateDefaultMobileCardRender(): TableBuilder<T> {
    this.mobileCardRenderer = (item: T) => {
      return this.columns
        .filter((col) => !col.hideMobile)
        .map((col) => (
          <CardRow key={col.key}>
            <CardLabel>{col.mobileLabel || col.label}</CardLabel>
            <CardValue>{col.render ? col.render(item) : (item as any)[col.key]}</CardValue>
          </CardRow>
        ));
    };
    return this;
  }

  // Construir la tabla final
  build(): React.ReactElement {
    return (
      <Table
        data={this.config.data}
        columns={this.columns}
        getRowKey={this.config.getRowKey}
        mobileCardRender={this.mobileCardRenderer}
        tableClassName={this.config.tableClassName}
        cardClassName={this.config.cardClassName}
        emptyMessage={this.config.emptyMessage}
      />
    );
  }
}