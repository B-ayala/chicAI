import { ClientsIcon, DashboardIcon, InvoicesIcon, ProductsIcon } from './styled';

const menuData = [
  { label: 'Dashboard', icon: <DashboardIcon />, to: '/admin/dashboard' },
  { label: 'Productos', icon: <ProductsIcon />, to: '/admin/products' },
  { label: 'Facturas', icon: <InvoicesIcon />, to: '/admin/invoices' },
  { label: 'Clientes', icon: <ClientsIcon />, to: '/admin/customer' },
];

export default menuData;
